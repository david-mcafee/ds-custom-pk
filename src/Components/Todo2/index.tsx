import '../todoStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Todo2 } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Todo2Component() {
	const [todos2, setTodos2] = useState<any>([]);
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
			DataStore.observe(Todo2).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo2).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);
		subscriptions.push(
			DataStore.observeQuery(Todo2, t => t.name('contains', 'Todo')).subscribe(
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
		setTodos2([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Todo 2
	// Query
	async function getTodos2() {
		const _todos = await DataStore.query(Todo2);
		setTodos2(_todos);
		console.log('Todo2s', _todos);
	}

	// Does not apply: Query by PK

	// Query by PK Predicate
	async function getTodoByPkPredicate() {
		const [_todo] = await DataStore.query(Todo2);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo2, c =>
			c.customId('eq', _todo.customId)
		);
		console.log('by PK Predicate', todo);
		setTodos2(todo);
	}

	// Query by PK + SK Predicate
	async function getTodo2byPKSKPredicate() {
		const [_todo] = await DataStore.query(Todo2);
		console.log('result of first query:', _todo);
		if (!_todo) return;
		const todos = await DataStore.query(Todo2, c =>
			c.customId('eq', _todo.customId).createdAt('eq', _todo.createdAt)
		);
		console.log('PK + SK Predicate:', todos);
		setTodos2(todos);
	}

	// Does not apply: Query by PK OL

	// Query by PK + SK OL
	async function getTodoByPkSkOL() {
		const [_todo] = await DataStore.query(Todo2);
		console.log('first query:', _todo);
		if (!_todo) return;
		const todo = await DataStore.query(Todo2, {
			customId: _todo.customId,
			createdAt: _todo.createdAt,
		});
		console.log('by PK', todo);
		setTodos2(todo);
	}

	// Query by ALL
	async function getTodo2ByAll() {
		const todo = await DataStore.query(Todo2, Predicates.ALL);
		console.log('Query ALL by PK', todo);
		if (!todo) return;
		setTodos2(todo);
	}

	// Create
	async function createTodo2() {
		try {
			clearState();
			const todo = await DataStore.save(
				new Todo2({
					customId: ulid(),
					name: `Todo 2 ${Date.now()}`,
					createdAt: new Date().toISOString(),
				})
			);

			console.log('Todo2 created:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTodo2() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo2);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo2.copyOf(originalTodo, updated => {
					updated.name = `name ${Date.now()}`;
				})
			);

			console.log('Todo updated:', todo);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// TODO: Update PK: should throw TS error, as PK is immutable
	async function updateTodo2Pk() {
		clearState();
		const [originalTodo] = await DataStore.query(Todo2);
		console.log('Original Todo:', originalTodo);

		try {
			const todo = await DataStore.save(
				Todo2.copyOf(originalTodo, updated => {
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
	async function deleteTodo2() {
		clearState();
		const [todo] = await DataStore.query(Todo2);
		if (!todo) return;
		await DataStore.delete(todo);
	}

	// Does not apply: Delete by PK

	// Delete by PK Predicate
	async function deleteTodo2ByPkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo2);
		if (!todo) return;
		// await DataStore.delete(Todo, todo.customId);
		await DataStore.delete(Todo2, c => c.customId('eq', todo.customId));
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteTodo2ByPkSkPredicate() {
		clearState();
		const [todo] = await DataStore.query(Todo2);
		if (!todo) return;
		await DataStore.delete(Todo2, c =>
			c.customId('eq', todo.customId).createdAt('eq', todo.createdAt)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deleteTodo2ByPkSkOL() {
		clearState();
		const [todo] = await DataStore.query(Todo2);
		if (!todo) return;
		await DataStore.delete(Todo2, {
			customId: todo.customId,
			createdAt: todo.createdAt,
		});
	}

	function deleteAll() {
		DataStore.delete(Todo2, Predicates.ALL);
	}
	//#endregion

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo 2 (Custom PK + SK)</h1>
				<div className="buttons">
					<button data-test="datastore-query-2" onClick={getTodos2}>
						Query
					</button>
					<button disabled>Query by PK</button>
					<button onClick={getTodoByPkPredicate}>Query by PK Pred</button>
					<button onClick={getTodo2byPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getTodoByPkSkOL}>Query by PK + SK OL</button>
					<button onClick={getTodo2ByAll}>Query by ALL</button>
					<button data-test="datastore-create-2" onClick={createTodo2}>
						Create
					</button>
					<button data-test="datastore-update-2" onClick={updateTodo2}>
						Update Last
					</button>
					<button onClick={updateTodo2Pk}>Update Last by PK</button>
					<button data-test="datastore-delete-1" onClick={deleteTodo2}>
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteTodo2ByPkPredicate}>Delete by PK Pred</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteTodo2ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteTodo2ByPkSkOL}>Delete by PK + SK OL</button>
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
					<span>todos2:</span>
					<pre data-test="datastore-output-2">
						{JSON.stringify(todos2, null, 2)}
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

export default Todo2Component;
