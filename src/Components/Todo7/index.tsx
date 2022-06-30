import '../todoStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Todo7 } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Todo7Component() {
	const [todos7, setTodos7] = useState<any>([]);
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
			DataStore.observe(Todo7).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo7).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo7, t => t.name('contains', 'Todo')).subscribe(
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
		setTodos7([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Todo 7
	// Query
	async function getTodos7() {
		const _todos = await DataStore.query(Todo7);
		console.log('Todos7', _todos);
		setTodos7(_todos);
	}

	// Does not apply: Query by PK

	// Query by PK Predicate
	async function getTodo7ByPkPredicate() {
		const [_todo] = await DataStore.query(Todo7);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo7, c => c.id('eq', _todo.id));
		console.log('by PK Predicate', todo);
		setTodos7(todo);
	}

	// Query by PK + SK Predicate
	async function getTodo7byPKSKPredicate() {
		const [_todo] = await DataStore.query(Todo7);
		console.log('result of first query:', _todo);
		if (!_todo) return;
		const todos = await DataStore.query(Todo7, c =>
			c.id('eq', _todo.id).name('eq', _todo.name)
		);
		console.log('PK + SK Predicate:', todos);
		setTodos7(todos);
	}

	// Query by PK + Multi SK Predicate
	async function getTodo7byPKMultiSKPredicate() {
		const [_todo] = await DataStore.query(Todo7);
		console.log('result of first query:', _todo);
		if (!_todo) return;
		const todos = await DataStore.query(Todo7, c =>
			c
				.id('eq', _todo.id)
				.name('eq', _todo.name)
				.createdAt('eq', _todo.createdAt)
		);
		console.log('PK + SK Predicate:', todos);
		setTodos7(todos);
	}

	// Does not apply: Query by PK OL

	// Query by PK + SK OL
	async function getTodos7byPkMultiSkOl() {
		const [_todo] = await DataStore.query(Todo7);

		const todo = await DataStore.query(Todo7, {
			id: _todo.id,
			name: _todo.name,
			createdAt: _todo.createdAt,
		});
		console.log('Todo6 by PK + SK w/ object literal', todo);
		setTodos7(todo);
	}

	// Query by ALL
	async function getTodo7ByAll() {
		const todo = await DataStore.query(Todo7, Predicates.ALL);
		console.log('Query ALL by PK', todo);
		if (!todo) return;
		setTodos7(todo);
	}

	// Create
	async function createTodo7() {
		clearState();
		try {
			const todo = await DataStore.save(
				new Todo7({
					id: ulid(),
					name: `Todo 7 ${Date.now()}`,
					createdAt: new Date().toISOString(),
				})
			);

			console.log('Todo7 created:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTodo7() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo7);
		console.log('Original Todo7:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo7.copyOf(originalTodo, updated => {
					updated.description = `name7 ${Date.now()}`;
				})
			);

			console.log('Todo7 updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutable
	async function updateTodo7Pk() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo7);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo7.copyOf(originalTodo, updated => {
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
	async function deleteTodo7() {
		clearState();
		const [todo] = await DataStore.query(Todo7);
		if (!todo) return;
		await DataStore.delete(todo);
	}

	// Does not apply: Delete by PK

	// Delete by PK Predicate
	async function deleteTodo7ByPkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo7);
		if (!todo) return;
		// await DataStore.delete(Todo, todo.customId);
		await DataStore.delete(Todo7, c => c.id('eq', todo.id));
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteTodo7ByPkSkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo7);
		if (!todo) return;
		await DataStore.delete(Todo7, c =>
			c.id('eq', todo.id).name('eq', todo.name)
		);
	}

	// Delete by PK + Multi SK Predicate
	async function deleteTodo7ByPkMultiSkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo7);
		if (!todo) return;
		await DataStore.delete(Todo7, c =>
			c
				.id('eq', todo.id)
				.name('eq', todo.name)
				.createdAt('eq', todo.createdAt)
		);
	}

	// Delete by PK + SK OL
	async function deleteTodo7ByPkSkOL() {
		clearState();
		const [todo] = await DataStore.query(Todo7);
		if (!todo) return;
		await DataStore.delete(Todo7, {
			id: todo.id,
			name: todo.name,
			createdAt: todo.createdAt,
		});
	}

	function deleteAll() {
		DataStore.delete(Todo7, Predicates.ALL);
	}

	//#endregion

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo 7 (id as PK + two SKs)</h1>
				<div className="buttons">
					<button data-test="datastore-query-7" onClick={getTodos7}>
						Query
					</button>
					<button disabled>Query by PK</button>
					<button onClick={getTodo7ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getTodo7byPKSKPredicate}>
						Query by PK + SK Pred
					</button>
					<button onClick={getTodo7byPKMultiSKPredicate}>
						Q PK + Multi SK Pred
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getTodos7byPkMultiSkOl}>
						Query by PK + Multi SK OL
					</button>
					<button onClick={getTodo7ByAll}>Query by ALL</button>
					<button data-test="datastore-create-7" onClick={createTodo7}>
						Create
					</button>
					<button data-test="datastore-update-7" onClick={updateTodo7}>
						Update Last
					</button>
					<button data-test="datastore-update-1" onClick={updateTodo7Pk}>
						Update Last by PK
					</button>
					<button data-test="datastore-delete-1" onClick={deleteTodo7}>
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteTodo7ByPkPredicate}>Delete by PK Pred</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteTodo7ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteTodo7ByPkMultiSkPredicate}>
						Delete by PK + Multi SK Pred
					</button>
					<button onClick={deleteTodo7ByPkSkOL}>Delete by PK + SK OL</button>
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
					<span>todos7:</span>
					<pre data-test="datastore-output-7">
						{JSON.stringify(todos7, null, 2)}
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

export default Todo7Component;
