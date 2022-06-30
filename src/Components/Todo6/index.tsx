import '../todoStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Todo6 } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Todo6Component() {
	const [todos6, setTodos6] = useState<any>([]);
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
			DataStore.observe(Todo6).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo6).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo6, t => t.name('contains', 'Todo')).subscribe(
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
		setTodos6([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	// #region Todo 6
	// Query
	async function getTodos6() {
		const _todos = await DataStore.query(Todo6);
		setTodos6(_todos);
		console.log('Todos6', _todos);
	}

	// Does not apply: Query by PK

	// Query by PK Predicate
	async function getTodo6ByPkPredicate() {
		const [_todo] = await DataStore.query(Todo6);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo6, c => c.id('eq', _todo.id));
		console.log('by PK Predicate', todo);
		setTodos6(todo);
	}

	// Query by PK + SK Predicate
	async function getTodos6byPKSKPredicate() {
		const [_todo] = await DataStore.query(Todo6);
		console.log('result of first query:', _todo);
		if (!_todo) return;
		const todos = await DataStore.query(Todo6, c =>
			c.id('eq', _todo.id).name('eq', _todo.name)
		);
		console.log('PK + SK Predicate:', todos);
		setTodos6(todos);
	}

	// Does not apply: Query by PK OL

	// Query by PK + SK OL
	async function getTodos6byPkSkOl() {
		const [_todo] = await DataStore.query(Todo6);

		const todo = await DataStore.query(Todo6, {
			id: _todo.id,
			name: _todo.name,
		});
		console.log('Todo6 by PK + SK w/ object literal', todo);
		setTodos6(todo);
	}

	// Query by ALL
	async function getTodo6ByAll() {
		const todo = await DataStore.query(Todo6, Predicates.ALL);
		console.log('Query ALL by PK', todo);
		if (!todo) return;
		setTodos6(todo);
	}

	// Create
	async function createTodo6() {
		clearState();
		try {
			const todo = await DataStore.save(
				new Todo6({
					id: ulid(),
					name: `Todo 6 ${Date.now()}`,
					createdAt: new Date().toISOString(),
				})
			);

			console.log('Todo6 created:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTodo6() {
		clearState();
		const [todo] = await DataStore.query(Todo6);
		try {
			const todoo = await DataStore.save(
				Todo6.copyOf(todo, updated => {
					updated.description = 'desc';
				})
			);

			console.log('Todo6 created:', todoo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// TODO: Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updateTodo6Pk() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo6);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo6.copyOf(originalTodo, updated => {
					// throws TS error, as PK is immutable
					//@ts-expect-error
					updated.name = `name ${Date.now()}`;
				})
			);

			console.log('Todo updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deleteTodo6() {
		clearState();
		const [todo] = await DataStore.query(Todo6);
		if (!todo) return;
		await DataStore.delete(todo);
	}

	// Does not apply: Delete by PK

	// Delete by PK Predicate
	async function deleteTodo6ByPkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo6);
		if (!todo) return;
		// await DataStore.delete(Todo, todo.customId);
		await DataStore.delete(Todo6, c => c.id('eq', todo.id));
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteTodo6ByPkSkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo6);
		if (!todo) return;
		await DataStore.delete(Todo6, c =>
			c.id('eq', todo.id).name('eq', todo.name)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deleteTodo6ByPkSkOL() {
		clearState();
		const [todo] = await DataStore.query(Todo6);
		if (!todo) return;
		await DataStore.delete(Todo6, {
			id: todo.id,
			name: todo.name,
		});
	}

	function deleteAll() {
		DataStore.delete(Todo6, Predicates.ALL);
	}

	//#endregion

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo 6 (id as PK + SK)</h1>
				<div className="buttons">
					<button data-test="datastore-query-6" onClick={getTodos6}>
						Query
					</button>
					<button disabled>Query by PK</button>
					<button onClick={getTodo6ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getTodos6byPkSkOl}>Query by PK + SK</button>
					<button onClick={getTodos6byPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button disabled>Query by PK + SK OL</button>
					<button onClick={getTodo6ByAll}>Query by ALL</button>
					<button data-test="datastore-create-6" onClick={createTodo6}>
						Create
					</button>
					<button data-test="datastore-update-6" onClick={updateTodo6}>
						Update Last
					</button>
					<button onClick={updateTodo6Pk}>Update Last PK</button>
					<button data-test="datastore-delete-1" onClick={deleteTodo6}>
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteTodo6ByPkPredicate}>Delete by PK Pred</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteTodo6ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteTodo6ByPkSkOL}>Delete by PK + SK OL</button>
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
					<span>todos6:</span>
					<pre data-test="datastore-output-6">
						{JSON.stringify(todos6, null, 2)}
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

export default Todo6Component;
