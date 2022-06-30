import '../postStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Post21, Comment21 } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Post21Component() {
	const [post21s, setPost21s] = useState<any>([]);
	const [comment21s, setComment21s] = useState<any>([]);
	const [currentPost, setCurrentPost] = useState<any>(null);
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

		// Observe Post21
		subscriptions.push(
			DataStore.observe(Post21).subscribe((msg: any) => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);

		// ObserveQuery Post21
		subscriptions.push(
			DataStore.observeQuery(Post21).subscribe((data: any) => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);

		// ObserveQuery Post21 with filter
		subscriptions.push(
			DataStore.observeQuery(Post21, t =>
				t.title('contains', 'Post21')
			).subscribe(snapshot => {
				console.log('filtered observeQuery', snapshot);
				setFilteredSnapshots(prev => [...prev, snapshot] as any);
			})
		);

		// Observe Comment21
		subscriptions.push(
			DataStore.observe(Comment21).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);

		// ObserveQuery Comment21
		subscriptions.push(
			DataStore.observeQuery(Comment21).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);

		// ObserveQuery Comment21 with filter
		subscriptions.push(
			DataStore.observeQuery(Comment21, t =>
				t.content('contains', 'Comment21')
			).subscribe(snapshot => {
				console.log('filtered observeQuery', snapshot);
				setFilteredSnapshots(prev => [...prev, snapshot] as any);
			})
		);
	}

	function unsubSubs() {
		subscriptions &&
			subscriptions.length &&
			subscriptions.forEach(sub => sub.unsubscribe());
	}

	// function to clear local React state
	function clearState() {
		setPost21s([]);
		setComment21s([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Post 21
	// Query
	async function getPost21s() {
		const _posts = await DataStore.query(Post21);
		setPost21s(_posts);
		console.log('Post21s', _posts);
	}

	// Does not apply: Query by PK (SK is present)

	// Query by PK Predicate
	async function getPost21ByPkPredicate() {
		const [_post] = await DataStore.query(Post21);
		console.log('first query:', _post);
		if (!_post) return;

		const post = await DataStore.query(Post21, c =>
			c.customPostId('eq', _post.customPostId)
		);

		console.log('by PK Predicate', post);
		setPost21s(post);
	}

	// Query by PK + SK Predicate
	async function getPost21sbyPKSKPredicate() {
		const [_post] = await DataStore.query(Post21);
		console.log('result of first query:', _post);
		if (!_post) return;

		const posts = await DataStore.query(Post21, c =>
			c.customPostId('eq', _post.customPostId).title('eq', _post.title)
		);
		console.log('PK + SK Predicate:', posts);
		setPost21s(posts);
	}

	// Does not apply: Query by PK OL (SK present)

	// Query by PK + SK OL
	async function getPost21sbyPkSkOl() {
		const [_post] = await DataStore.query(Post21);

		const post = await DataStore.query(Post21, {
			customPostId: _post.customPostId,
			title: _post.title,
		});
		console.log('Post21 by PK + SK w/ object literal', post);
		setPost21s(post);
	}

	// Query by ALL
	async function getPost21ByAll() {
		const post = await DataStore.query(Post21, Predicates.ALL);
		console.log('Query ALL by PK', post);
		if (!post) return;
		setPost21s(post);
	}

	// Create
	async function createCurrentPost21() {
		if (!currentPost) return;
		clearState();

		try {
			const post = await DataStore.save(
				new Post21({
					customPostId: ulid(),
					title: `Post21 ${Date.now()}`,
					content: 'Post21 content',
				})
			);

			setCurrentPost(post);
			console.log('Post21 created:', post);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updatePost21() {
		clearState();
		const [post] = await DataStore.query(Post21);

		try {
			const comment = await DataStore.save(
				Post21.copyOf(post, updated => {
					updated.content = 'UPDATED DESCRIPTION';
				})
			);

			console.log('Post21 updated:', comment);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updatePost21Pk() {
		clearState();
		const [originalPost] = await DataStore.query(Post21);
		console.log('Original Post:', originalPost);

		try {
			const post = await DataStore.save(
				Post21.copyOf(originalPost, updated => {
					// throws TS error, as PK is immutable
					//@ts-expect-error
					updated.title = `title ${Date.now()}`;
				})
			);

			console.log('Post updated:', post);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deletePost21() {
		clearState();
		const [post] = await DataStore.query(Post21);
		if (!post) return;

		await DataStore.delete(post);
	}

	// Does not apply: Delete by PK (SK is present)

	// Delete by PK Predicate
	async function deletePost21ByPkPredicate() {
		clearState();
		const [post] = await DataStore.query(Post21);
		if (!post) return;

		try {
			const result = await DataStore.delete(Post21, c =>
				c.customPostId('eq', post.customPostId)
			);
			console.log('Post21 deleted:', result);
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	// Does not apply: Delete by PK OL (SK is present)

	// Delete by PK + SK Predicate
	async function deletePost21ByPkSkPredicate() {
		clearState();
		const [post] = await DataStore.query(Post21);
		if (!post) return;

		try {
			await DataStore.delete(Post21, c =>
				c.customPostId('eq', post.customPostId).title('eq', post.title)
			);
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deletePost21ByPkSkOL() {
		clearState();
		const [post] = await DataStore.query(Post21);
		if (!post) return;

		try {
			await DataStore.delete(Post21, {
				customPostId: post.customPostId,
				title: post.title,
			});
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	//#endregion

	//#region Comment21
	// Query
	async function getComment21s() {
		const _comments = await DataStore.query(Comment21);
		setComment21s(_comments);
		console.log('comment21s', _comments);
	}

	// Does not apply: Query by PK (SK present)

	// Query by PK Predicate
	async function getComment21ByPkPredicate() {
		const [_comment] = await DataStore.query(Comment21);
		console.log('first query:', _comment);
		if (!_comment) return;

		const comment = await DataStore.query(Comment21, c =>
			c.customCommentId('eq', _comment.customCommentId)
		);
		console.log('by PK Predicate', comment);
		setComment21s(comment);
	}

	// Query by PK + SK Predicate
	async function getComment21sbyPKSKPredicate() {
		const [_comment] = await DataStore.query(Comment21);
		console.log('result of first query:', _comment);
		if (!_comment) return;

		const comments = await DataStore.query(Comment21, c =>
			c
				.customCommentId('eq', _comment.customCommentId)
				.content('eq', _comment.content)
		);

		console.log('PK + SK Predicate:', comments);
		setComment21s(comments);
	}

	// Does not apply: Query by PK OL

	// Query by PK + SK OL
	async function getComment21sbyPkSkOl() {
		const [_comment] = await DataStore.query(Comment21);

		const comment = await DataStore.query(Comment21, {
			customCommentId: _comment.customCommentId,
			content: _comment.content,
		});

		console.log('comment21 by PK + SK w/ object literal', comment);
		setComment21s(comment);
	}

	// Query by ALL
	async function getComment21ByAll() {
		const comment = await DataStore.query(Comment21, Predicates.ALL);
		console.log('Query ALL by PK', comment);
		if (!comment) return;
		setComment21s(comment);
	}

	async function createComment21() {
		clearState();

		try {
			const comment = await DataStore.save(
				new Comment21({
					customCommentId: ulid(),
					content: 'comment21 Original Description',
				})
			);

			// setCurrentPost(comment);
			console.log('Comment21 created:', comment);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// TODO: add additional field Update
	// async function updateComment21() {
	// 	clearState();
	// 	const [originalComment] = await DataStore.query(Comment21);
	// 	try {
	// 		const comment = await DataStore.save(
	// 			Comment21.copyOf(originalComment, updated => {
	// 				updated.content = 'UPDATED DESCRIPTION';
	// 			})
	// 		);

	// 		console.log('comment21 created:', comment);
	// 	} catch (error) {
	// 		console.error('Save failed:', error);
	// 	}
	// }

	// Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updateComment21Pk() {
		clearState();
		const [originalcomment] = await DataStore.query(Comment21);
		console.log('Original comment:', originalcomment);

		try {
			const comment = await DataStore.save(
				Comment21.copyOf(originalcomment, updated => {
					// throws TS error, as PK is immutable
					//@ts-expect-error
					updated.content = `content ${Date.now()}`;
				})
			);

			console.log('comment updated:', comment);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deleteComment21() {
		clearState();
		const [comment] = await DataStore.query(Comment21);
		if (!comment) return;
		await DataStore.delete(comment);
	}

	// Does not apply: Delete by PK (SK is present)

	// Delete by PK Predicate
	async function deleteComment21ByPkPredicate() {
		clearState();
		const [comment] = await DataStore.query(Comment21);
		if (!comment) return;

		await DataStore.delete(Comment21, c =>
			c.customCommentId('eq', comment.customCommentId)
		);
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteComment21ByPkSkPredicate() {
		clearState();
		const [comment] = await DataStore.query(Comment21);
		if (!comment) return;

		await DataStore.delete(Comment21, c =>
			c
				.customCommentId('eq', comment.customCommentId)
				.content('eq', comment.content)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deleteComment21ByPkSkOL() {
		clearState();
		const [comment] = await DataStore.query(Comment21);
		if (!comment) return;
		await DataStore.delete(Comment21, {
			customCommentId: comment.customCommentId,
			content: comment.content,
		});
	}

	//#endregion

	//#region Delete ALL

	function deleteAll() {
		DataStore.delete(Post21, Predicates.ALL);
		DataStore.delete(Comment21, Predicates.ALL);
	}

	//#endregion

	//#region Relational CRUD
	// Query by PK filter
	async function getCurrentPostComment21sByPkFilter() {
		const posts = (await DataStore.query(Comment21)).filter(
			c => c.post21CommentsCustomPostId === currentPost.customPostId
		);
		setPost21s(posts);
		console.log('Comment21s', posts);
	}

	// Query by PK + SK filter
	async function getCurrentPostComment21sByPkSkFilter() {
		if (!currentPost) return;
		const posts = (await DataStore.query(Comment21)).filter(
			c =>
				c.post21CommentsCustomPostId === currentPost.customCommentId &&
				c.post21CommentsTitle === currentPost.title
		);
		setPost21s(posts);
		console.log('Post21s', posts);
	}

	// Does not apply to relational query: Query by PK

	// Query by PK Predicate
	async function getCurrentPostComment21ByPkPredicate() {
		if (!currentPost) return;
		const post = await DataStore.query(Comment21, c =>
			c.post21CommentsCustomPostId('eq', currentPost.customCommentId)
		);
		console.log('by PK Predicate', post);
		setPost21s(post);
	}

	// Query by PK + SK Predicate
	async function getCurrentPostComment21sbyPKSKPredicate() {
		if (!currentPost) return;
		const post = await DataStore.query(Comment21, c =>
			c
				.post21CommentsCustomPostId('eq', currentPost.customCommentId)
				.post21CommentsTitle('eq', currentPost.title)
		);
		console.log('by PK Predicate', post);
		setPost21s(post);
	}

	// Does not apply to relational model: Query by PK OL

	// Does not apply to relational model: Query by PK + SK OL

	// Does not apply to relational model: Query by ALL

	// Does not apply to relational model: Create

	// Does not apply to relational model: Update

	// N/A: Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable

	// Does not apply to relational model: Delete

	// Does not apply to relational model: Delete by PK

	// Delete by PK Predicate
	async function deleteCurrentPostComment21ByPkPredicate() {
		clearState();

		await DataStore.delete(Comment21, c =>
			c.post21CommentsCustomPostId('eq', currentPost.customCommentId)
		);
	}

	// Does not apply to relational model: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteCurrentPostComment21ByPkSkPredicate() {
		clearState();

		await DataStore.delete(Comment21, c =>
			c
				.post21CommentsCustomPostId('eq', currentPost.customCommentId)
				.post21CommentsTitle('eq', currentPost.title)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Does not apply to relational model: Delete by PK + SK OL

	//#endregion

	//#region Comment21 Relational CRUD
	// Does not apply to unidirectional relationship
	//#endregion

	return (
		<div className="App">
			<header className="App-header">
				<h1>2.1 hasMany - unidirectional</h1>
				<p>{`Current comment: ${currentPost}`}</p>
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

				<span>Comment21:</span>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getComment21s}>
						Query
					</button>
					<button onClick={getComment21s}>Query by PK</button>
					<button onClick={getComment21ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getComment21sbyPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getComment21sbyPkSkOl}>Query by PK + SK OL</button>
					<button onClick={getComment21ByAll}>Query by ALL</button>
					<button onClick={createComment21} data-test="datastore-create-1">
						Create
					</button>
					<button onClick={updateComment21Pk} data-test="datastore-update-1">
						Update Last
					</button>
					<button onClick={updateComment21Pk} data-test="datastore-update-1">
						Update Last by PK
					</button>
					<button onClick={deleteComment21} data-test="datastore-delete-1">
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteComment21ByPkPredicate}>
						Delete by PK Pred
					</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteComment21ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteComment21ByPkSkOL}>
						Delete by PK + SK OL
					</button>
				</div>
				<span>Post21 relational operations:</span>
				<div className="buttons">
					<button
						disabled={!currentPost}
						onClick={getCurrentPostComment21sByPkFilter}
					>
						get Comments for Cur. Proj - PkFilter
					</button>
					<button
						disabled={!currentPost}
						onClick={getCurrentPostComment21sByPkSkFilter}
					>
						get Comment for Cur. Post - PkSkFilter
					</button>
					<button
						disabled={!currentPost}
						onClick={getCurrentPostComment21ByPkPredicate}
					>
						get Comment for Cur. Post - PkPredicate
					</button>
					<button
						disabled={!currentPost}
						onClick={getCurrentPostComment21sbyPKSKPredicate}
					>
						get Proj for Cur. Post - PkSkPredicate
					</button>
					<button disabled onClick={deleteCurrentPostComment21ByPkPredicate}>
						Del Comment for Cur. Post - PkPred
					</button>
					<button
						disabled={!currentPost}
						onClick={deleteCurrentPostComment21ByPkSkPredicate}
					>
						Del Comment for Cur. Post - PkSkPred
					</button>
				</div>
				<span>Independent Post21 operations:</span>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getPost21s}>
						Query
					</button>
					<button onClick={getPost21s}>Query by PK</button>
					<button onClick={getPost21ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getPost21sbyPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getPost21sbyPkSkOl}>Query by PK + SK OL</button>
					<button onClick={getPost21ByAll}>Query by ALL</button>
					<button
						disabled={!currentPost}
						onClick={createCurrentPost21}
						data-test="datastore-create-1"
					>
						Create (Cur. Post)
					</button>
					<button onClick={updatePost21} data-test="datastore-update-1">
						Update Last
					</button>
					<button onClick={updatePost21Pk} data-test="datastore-update-1">
						Update Last by PK
					</button>
					<button onClick={deletePost21} data-test="datastore-delete-1">
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deletePost21ByPkPredicate}>Delete by PK Pred</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deletePost21ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deletePost21ByPkSkOL}>Delete by PK + SK OL</button>
				</div>
				<div className="container">
					<div className="section">
						<pre>
							<span>Comment21:</span>

							<pre data-test="datastore-output-3">
								{JSON.stringify(comment21s, null, 2)}
							</pre>
						</pre>
					</div>
					<div className="section">
						<pre>
							<span>Post21:</span>
							<pre data-test="datastore-output-2">
								{JSON.stringify(post21s, null, 2)}
							</pre>
						</pre>
					</div>
				</div>
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

export default Post21Component;
