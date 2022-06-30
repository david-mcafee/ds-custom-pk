import '../todoStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Todo } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function TodoComponent() {
	const [todos, setTodos] = useState<any>([]);
	const [subMsg, setSubMsg] = useState<any>([]);
	const [snapshots, setSnapshots] = useState([]);
	const [filteredSnapshots, setFilteredSnapshots] = useState([]);

	useEffect(() => {
		initSubs();

		return () => {
			unsubSubs();
		};
	}, []);

	function initSubs() {
		if (subscriptions.length) {
			unsubSubs();
		}

		subscriptions.push(
			DataStore.observe(Todo).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo, t => t.name('contains', 'Todo')).subscribe(
				snapshot => {
					console.log('filtered observeQuery', snapshot);
					setFilteredSnapshots(prev => [...prev, snapshot] as any);
				}
			)
		);
	}

	function unsubSubs() {
		subscriptions &&
			subscriptions.length &&
			subscriptions.forEach(sub => sub.unsubscribe());
	}

	// function to clear local React state
	function clearState() {
		setTodos([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Todo
	// Query
	async function getTodos() {
		const _todos = await DataStore.query(Todo);
		setTodos(_todos);
		console.log('Todos', _todos);
	}

	// Query by PK
	async function getTodoByPk() {
		const [_todo] = await DataStore.query(Todo);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo, _todo.customId);
		console.log('by PK', todo);
		setTodos(todo);
	}

	// Query by PK Predicate
	async function getTodoByPkPredicate() {
		const [_todo] = await DataStore.query(Todo);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo, c =>
			c.customId('eq', _todo.customId)
		);
		console.log('by PK Predicate', todo);
		setTodos(todo);
	}

	// Does not apply: Query by PK + SK Predicate

	// Query by PK OL
	async function getTodoByPkOL() {
		const [_todo] = await DataStore.query(Todo);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo, { customId: _todo.customId });
		console.log('by PK', todo);
		setTodos(todo);
	}

	// Does not apply: // Query by PK + SK OL

	// Query by ALL
	async function getTodoByAll() {
		const todo = await DataStore.query(Todo, Predicates.ALL);
		console.log('Query ALL by PK', todo);
		if (!todo) return;
		setTodos(todo);
	}

	// Create
	async function createTodo() {
		try {
			clearState();
			const todo = await DataStore.save(
				new Todo({
					customId: ulid(),
					name: `Todo ${Date.now()}`,
				})
			);

			console.log('Todo created:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTodo() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo.copyOf(originalTodo, updated => {
					updated.name = `name ${Date.now()}`;
				})
			);

			console.log('Todo updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutable
	async function updateTodoPk() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo.copyOf(originalTodo, updated => {
					// TODO: throws TS error, as PK is immutable
					// @ts-expect-error
					updated.customId = `this shouldn't work!`;
				})
			);

			console.log('Todo updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deleteTodo() {
		clearState();
		const [todo] = await DataStore.query(Todo);
		if (!todo) return;
		await DataStore.delete(todo);
	}

	// Delete by PK
	async function deleteTodoByPk() {
		clearState();
		const [todo] = await DataStore.query(Todo);
		if (!todo) return;
		await DataStore.delete(Todo, todo.customId);
	}

	// Delete by PK Predicate
	async function deleteTodoByPkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo);
		if (!todo) return;
		// await DataStore.delete(Todo, todo.customId);
		await DataStore.delete(Todo, c => c.customId('eq', todo.customId));
	}

	// Delete by PK OL
	async function deleteTodoByPkOL() {
		clearState();
		const [todo] = await DataStore.query(Todo);
		if (!todo) return;
		debugger;
		await DataStore.delete(Todo, { customId: todo.customId });
	}
	// Does not apply: Delete by PK + SK Predicate
	// Does not apply: Delete by PK + Multi SK Predicate
	// Does not apply: Delete by PK + SK OL

	//#endregion

	function deleteAll() {
		clearState();
		DataStore.delete(Todo, Predicates.ALL);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo (Custom PK)</h1>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getTodos}>
						Query
					</button>
					<button onClick={getTodoByPk}>Query by PK</button>
					<button onClick={getTodoByPkPredicate}>Query by PK Pred</button>
					<button disabled>Query by PK + SK Predicate</button>
					<button onClick={getTodoByPkOL}>Query by PK OL</button>
					<button disabled onClick={getTodoByPkOL}>
						Query by PK + SK OL
					</button>
					<button onClick={getTodoByAll}>Query by ALL</button>
					<button data-test="datastore-create-1" onClick={createTodo}>
						Create
					</button>
					<button data-test="datastore-update-1" onClick={updateTodo}>
						Update Last
					</button>
					<button data-test="datastore-update-1" onClick={updateTodoPk}>
						Update Last by PK
					</button>
					<button data-test="datastore-delete-1" onClick={deleteTodo}>
						Delete Last
					</button>
					<button onClick={deleteTodoByPk}>Delete by PK</button>
					<button onClick={deleteTodoByPkPredicate}>Delete by PK Pred</button>
					<button onClick={deleteTodoByPkOL}>Delete by PK OL</button>
					<button disabled>Delete by PK + SK Pred</button>
					<button disabled>Delete by PK + SK OL</button>
				</div>
				<p>DS</p>
				<div className="buttons">
					<button
						data-test="datastore-start"
						onClick={() => {
							DataStore.start();
							initSubs();
						}}
					>
						Start
					</button>
					<button onClick={() => DataStore.stop()}>Stop</button>
					<button data-test="datastore-clear" onClick={() => DataStore.clear()}>
						Clear
					</button>
					<button
						onClick={deleteAll}
						data-test="datastore-delete-all"
						style={{ backgroundColor: 'red' }}
					>
						Delete All Records
					</button>
					<button onClick={() => clearState()}>Clear component state</button>
				</div>
				<pre>
					<span>todos:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(todos, null, 2)}
					</pre>
				</pre>
				<pre>
					<span>Observe Subscription Messages:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(subMsg, null, 2)}
					</pre>
				</pre>
				<pre>
					<span>ObserveQuery Subscription Messages:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(snapshots, null, 2)}
					</pre>
				</pre>
				<pre>
					<span>ObserveQuery Filtered Subscription Messages:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(filteredSnapshots, null, 2)}
					</pre>
				</pre>
			</header>
		</div>
	);
}

export default TodoComponent;
