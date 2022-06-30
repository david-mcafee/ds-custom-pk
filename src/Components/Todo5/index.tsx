import '../todoStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Todo5 } from '../../models';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Todo5Component() {
	const [todos5, setTodos5] = useState<any>([]);
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
			DataStore.observe(Todo5).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo5).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo5, t => t.name('contains', 'Todo')).subscribe(
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
		setTodos5([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Todo 5
	// Query
	async function getTodos5() {
		const _todos = await DataStore.query(Todo5);
		console.log('Todos5', _todos);
		setTodos5(_todos);
	}

	// Query by PK
	// TODO: Query by PK Predicate
	async function getTodo5ByPkPredicate() {
		const [_todo] = await DataStore.query(Todo5);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo5, c => c.id('eq', _todo.id));
		console.log('by PK Predicate', todo);
		setTodos5(todo);
	}

	// Query by PK + SK Predicate
	// Query by PK OL
	// Query by PK + SK OL
	// Query by ALL
	async function getTodo5ByAll() {
		const todo = await DataStore.query(Todo5, Predicates.ALL);
		console.log('Query ALL by PK', todo);
		if (!todo) return;
		setTodos5(todo);
	}

	// Create
	async function createTodo5() {
		clearState();
		try {
			const todo = await DataStore.save(
				new Todo5({
					name: `Todo 5 ${Date.now()}`,
				})
			);

			console.log('Todo5 created:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTodo5() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo5);
		console.log('Original Todo5:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo5.copyOf(originalTodo, updated => {
					updated.name = `name5 ${Date.now()}`;
				})
			);

			console.log('Todo5 updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutable
	async function updateTodo5Pk() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo5);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo5.copyOf(originalTodo, updated => {
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
	async function deleteTodo5() {
		clearState();
		const [todo] = await DataStore.query(Todo5);
		if (!todo) return;
		await DataStore.delete(todo);
	}

	// Delete by PK
	async function deleteTodo5ByPk() {
		clearState();
		const [todo] = await DataStore.query(Todo5);
		if (!todo) return;
		await DataStore.delete(Todo5, todo.id);
	}

	// Delete by PK Predicate
	async function deleteTodo5ByPkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo5);
		if (!todo) return;
		await DataStore.delete(Todo5, c => c.id('eq', todo.id));
	}

	// Delete by PK OL
	async function deleteTodo5ByPkOL() {
		clearState();
		const [todo] = await DataStore.query(Todo5);
		if (!todo) return;
		debugger;
		await DataStore.delete(Todo5, { id: todo.id });
	}

	// Does not apply: Delete by PK + SK Predicate

	// Does not apply: Delete by PK + Multi SK Predicate

	// Does not apply: Delete by PK + SK OL

	function deleteAll() {
		DataStore.delete(Todo5, Predicates.ALL);
	}

	//#endregion

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo 5 (Model w/out explicit id)</h1>
				<div className="buttons">
					<button data-test="datastore-query-5" onClick={getTodos5}>
						Query
					</button>
					<button disabled>Query by PK</button>
					<button onClick={getTodo5ByPkPredicate}>Query by PK Pred</button>
					<button disabled>Query by PK + SK Predicate</button>
					<button disabled>Query by PK OL</button>
					<button disabled>Query by PK + SK OL</button>
					<button onClick={getTodo5ByAll}>Query by ALL</button>
					<button data-test="datastore-create-5" onClick={createTodo5}>
						Create
					</button>
					<button data-test="datastore-update-5" onClick={updateTodo5}>
						Update Last
					</button>
					<button data-test="datastore-update-1" onClick={updateTodo5Pk}>
						Update Last by PK
					</button>
					<button data-test="datastore-delete-1" onClick={deleteTodo5}>
						Delete Last
					</button>
					<button onClick={deleteTodo5ByPk}>Delete by PK</button>
					<button onClick={deleteTodo5ByPkPredicate}>Delete by PK Pred</button>
					<button onClick={deleteTodo5ByPkOL}>Delete by PK OL</button>
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
					<span>todos5:</span>
					<pre data-test="datastore-output-5">
						{JSON.stringify(todos5, null, 2)}
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

export default Todo5Component;
