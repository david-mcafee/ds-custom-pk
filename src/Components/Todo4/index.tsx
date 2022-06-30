import '../todoStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Todo4 } from '../../models';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Todo4Component() {
	const [todos4, setTodos4] = useState<any>([]);
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
			DataStore.observe(Todo4).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo4).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo4, t => t.name('contains', 'Todo')).subscribe(
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
		setTodos4([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Todo 4
	// Query
	async function getTodos4() {
		const _todos = await DataStore.query(Todo4);
		setTodos4(_todos);
		console.log('Todos4', _todos);
	}

	// Query by PK
	async function getTodo4ByPk() {
		const [_todo] = await DataStore.query(Todo4);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo4, _todo.id);
		console.log('by PK', todo);
		setTodos4(todo);
	}

	// Query by PK Predicate
	async function getTodo4ByPkPredicate() {
		const [_todo] = await DataStore.query(Todo4);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo4, c => c.id('eq', _todo.id));
		console.log('by PK Predicate', todo);
		setTodos4(todo);
	}

	// Does not apply: Query by PK + SK Predicate

	// Query by PK OL
	// Query by PK + SK OL

	// Query by ALL
	async function getTodo4ByAll() {
		const todo = await DataStore.query(Todo4, Predicates.ALL);
		console.log('Query ALL by PK', todo);
		if (!todo) return;
		setTodos4(todo);
	}

	// Create
	async function createTodo4() {
		clearState();
		try {
			const todo = await DataStore.save(
				new Todo4({
					name: `Todo 4 ${Date.now()}`,
					description: 'Todo description',
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				})
			);

			console.log('Todo created:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTodo4() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo4);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo4.copyOf(originalTodo, updated => {
					updated.name = `name ${Date.now()}`;
				})
			);

			console.log('Todo updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutable
	async function updateTodo4Pk() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo4);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo4.copyOf(originalTodo, updated => {
					// TODO: throws TS error, as PK is immutable
					// @ts-expect-error
					updated.id = `this shouldn't work!`;
				})
			);

			console.log('Todo updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deleteTodo4() {
		clearState();
		const [todo] = await DataStore.query(Todo4);
		if (!todo) return;
		await DataStore.delete(todo);
	}

	// Delete by PK
	async function deleteTodo4ByPk() {
		clearState();
		const [todo] = await DataStore.query(Todo4);
		if (!todo) return;
		await DataStore.delete(Todo4, todo.id);
	}

	// Delete by PK Predicate
	async function deleteTodo4ByPkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo4);
		if (!todo) return;
		await DataStore.delete(Todo4, c => c.id('eq', todo.id));
	}

	// Delete by PK OL
	async function deleteTodo4ByPkOL() {
		clearState();
		const [todo] = await DataStore.query(Todo4);
		if (!todo) return;
		debugger;
		await DataStore.delete(Todo4, { id: todo.id });
	}

	// Does not apply: Delete by PK + SK Predicate

	// Does not apply: Delete by PK + Multi SK Predicate

	// Does not apply: Delete by PK + SK OL

	function deleteAll() {
		DataStore.delete(Todo4, Predicates.ALL);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo 4 (Model w/out CPK)</h1>
				<div className="buttons">
					<button data-test="datastore-query-4" onClick={getTodos4}>
						Query
					</button>
					<button onClick={getTodo4ByPk}>Query by PK</button>
					<button onClick={getTodo4ByPkPredicate}>Query by PK Pred</button>
					<button disabled>Query by PK + SK Predicate</button>
					<button disabled>Query by PK OL</button>
					<button disabled>Query by PK + SK OL</button>
					<button onClick={getTodo4ByAll}>Query by ALL</button>
					<button data-test="datastore-create-4" onClick={createTodo4}>
						Create
					</button>
					<button data-test="datastore-update-4" onClick={updateTodo4}>
						Update Last
					</button>
					<button data-test="datastore-update-1" onClick={updateTodo4Pk}>
						Update Last by PK
					</button>
					<button data-test="datastore-delete-1" onClick={deleteTodo4}>
						Delete Last
					</button>
					<button onClick={deleteTodo4ByPk}>Delete by PK</button>
					<button onClick={deleteTodo4ByPkPredicate}>Delete by PK Pred</button>
					<button onClick={deleteTodo4ByPkOL}>Delete by PK OL</button>
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
					<span>todos4:</span>
					<pre data-test="datastore-output-4">
						{JSON.stringify(todos4, null, 2)}
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

export default Todo4Component;
