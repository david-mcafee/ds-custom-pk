import "../postStyles.css";
import { useState, useEffect } from "react";
import { DataStore, Predicates } from "aws-amplify";
import { Post22, Comment22 } from "../../models";
import { ulid } from "ulid";

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Post22Component() {
  const [post22s, setPost22s] = useState<any>([]);
  const [comment22s, setComment22s] = useState<any>([]);
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [currentComment, setCurrentComment] = useState<any>(null);
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

    // Observe Post22
    subscriptions.push(
      DataStore.observe(Post22).subscribe((msg: any) => {
        console.log("observe", msg);
        setSubMsg(msg);
      })
    );

    // ObserveQuery Post22
    subscriptions.push(
      DataStore.observeQuery(Post22).subscribe((data: any) => {
        console.log("observeQuery", data);
        setSnapshots((prev) => [...prev, data] as any);
      })
    );

    // ObserveQuery Post22 with filter
    subscriptions.push(
      DataStore.observeQuery(Post22, (t) =>
        t.title("contains", "Post22")
      ).subscribe((snapshot) => {
        console.log("filtered observeQuery", snapshot);
        setFilteredSnapshots((prev) => [...prev, snapshot] as any);
      })
    );

    // Observe Comment22
    subscriptions.push(
      DataStore.observe(Comment22).subscribe((msg) => {
        console.log("observe", msg);
        setSubMsg(msg);
      })
    );

    // ObserveQuery Comment22
    subscriptions.push(
      DataStore.observeQuery(Comment22).subscribe((data) => {
        console.log("observeQuery", data);
        setSnapshots((prev) => [...prev, data] as any);
      })
    );

    // ObserveQuery Comment22 with filter
    subscriptions.push(
      DataStore.observeQuery(Comment22, (t) =>
        t.content("contains", "Comment22")
      ).subscribe((snapshot) => {
        console.log("filtered observeQuery", snapshot);
        setFilteredSnapshots((prev) => [...prev, snapshot] as any);
      })
    );
  }

  function unsubSubs() {
    subscriptions &&
      subscriptions.length &&
      subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // function to clear local React state
  function clearState() {
    setPost22s([]);
    setComment22s([]);
    setSubMsg([]);
    setSnapshots([]);
    setFilteredSnapshots([]);
  }

  //#region Post 22
  // Query
  async function getPost22s() {
    const _posts = await DataStore.query(Post22);
    setPost22s(_posts);
    console.log("Post22s", _posts);
  }

  // Does not apply: Query by PK (SK is present)

  // Query by PK Predicate
  async function getPost22ByPkPredicate() {
    const [_post] = await DataStore.query(Post22);
    console.log("first query:", _post);
    if (!_post) return;

    const post = await DataStore.query(Post22, (c) =>
      c.customPostId("eq", _post.customPostId)
    );

    console.log("by PK Predicate", post);
    setPost22s(post);
  }

  // Query by PK + SK Predicate
  async function getPost22sbyPKSKPredicate() {
    const [_post] = await DataStore.query(Post22);
    console.log("result of first query:", _post);
    if (!_post) return;

    const posts = await DataStore.query(Post22, (c) =>
      c.customPostId("eq", _post.customPostId).title("eq", _post.title)
    );
    console.log("PK + SK Predicate:", posts);
    setPost22s(posts);
  }

  // Does not apply: Query by PK OL (SK present)

  // Query by PK + SK OL
  async function getPost22sbyPkSkOl() {
    const [_post] = await DataStore.query(Post22);

    const post = await DataStore.query(Post22, {
      customPostId: _post.customPostId,
      title: _post.title,
    });
    console.log("Post22 by PK + SK w/ object literal", post);
    setPost22s(post);
  }

  // Query by ALL
  async function getPost22ByAll() {
    const post = await DataStore.query(Post22, Predicates.ALL);
    console.log("Query ALL by PK", post);
    if (!post) return;
    setPost22s(post);
  }

  // Create
  async function createCurrentPost22() {
    if (!currentPost) return;
    clearState();

    try {
      const post = await DataStore.save(
        new Post22({
          customPostId: ulid(),
          title: `Post22 ${Date.now()}`,
          content: "Post22 content",
        })
      );

      setCurrentPost(post);
      console.log("Post22 created:", post);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // Update
  async function updatePost22() {
    clearState();
    const [post] = await DataStore.query(Post22);

    try {
      const comment = await DataStore.save(
        Post22.copyOf(post, (updated) => {
          updated.content = "UPDATED DESCRIPTION";
        })
      );

      console.log("Post22 updated:", comment);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
  async function updatePost22Pk() {
    clearState();
    const [originalPost] = await DataStore.query(Post22);
    console.log("Original Post:", originalPost);

    try {
      const post = await DataStore.save(
        Post22.copyOf(originalPost, (updated) => {
          // throws TS error, as PK is immutable
          //@ts-expect-error
          updated.title = `title ${Date.now()}`;
        })
      );

      console.log("Post updated:", post);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // Delete
  async function deletePost22() {
    clearState();
    const [post] = await DataStore.query(Post22);
    if (!post) return;

    await DataStore.delete(post);
  }

  // Does not apply: Delete by PK (SK is present)

  // Delete by PK Predicate
  async function deletePost22ByPkPredicate() {
    clearState();
    const [post] = await DataStore.query(Post22);
    if (!post) return;

    try {
      const result = await DataStore.delete(Post22, (c) =>
        c.customPostId("eq", post.customPostId)
      );
      console.log("Post22 deleted:", result);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }

  // Does not apply: Delete by PK OL (SK is present)

  // Delete by PK + SK Predicate
  async function deletePost22ByPkSkPredicate() {
    clearState();
    const [post] = await DataStore.query(Post22);
    if (!post) return;

    try {
      await DataStore.delete(Post22, (c) =>
        c.customPostId("eq", post.customPostId).title("eq", post.title)
      );
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }

  // Does not apply: Delete by PK + Multi SK Predicate

  // Delete by PK + SK OL
  async function deletePost22ByPkSkOL() {
    clearState();
    const [post] = await DataStore.query(Post22);
    if (!post) return;

    try {
      await DataStore.delete(Post22, {
        customPostId: post.customPostId,
        title: post.title,
      });
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }

  //#endregion

  //#region Comment22
  // Query
  async function getComment22s() {
    const _comments = await DataStore.query(Comment22);
    setComment22s(_comments);
    console.log("comment22s", _comments);
  }

  // Does not apply: Query by PK (SK present)

  // Query by PK Predicate
  async function getComment22ByPkPredicate() {
    const [_comment] = await DataStore.query(Comment22);
    console.log("first query:", _comment);
    if (!_comment) return;

    const comment = await DataStore.query(Comment22, (c) =>
      c.customCommentId("eq", _comment.customCommentId)
    );
    console.log("by PK Predicate", comment);
    setComment22s(comment);
  }

  // Query by PK + SK Predicate
  async function getComment22sbyPKSKPredicate() {
    const [_comment] = await DataStore.query(Comment22);
    console.log("result of first query:", _comment);
    if (!_comment) return;

    const comments = await DataStore.query(Comment22, (c) =>
      c
        .customCommentId("eq", _comment.customCommentId)
        .content("eq", _comment.content)
    );

    console.log("PK + SK Predicate:", comments);
    setComment22s(comments);
  }

  // Does not apply: Query by PK OL

  // Query by PK + SK OL
  async function getComment22sbyPkSkOl() {
    const [_comment] = await DataStore.query(Comment22);

    const comment = await DataStore.query(Comment22, {
      customCommentId: _comment.customCommentId,
      content: _comment.content,
    });

    console.log("comment22 by PK + SK w/ object literal", comment);
    setComment22s(comment);
  }

  // Query by ALL
  async function getComment22ByAll() {
    const comment = await DataStore.query(Comment22, Predicates.ALL);
    console.log("Query ALL by PK", comment);
    if (!comment) return;
    setComment22s(comment);
  }

  async function createComment22() {
    clearState();

    try {
      const comment = await DataStore.save(
        new Comment22({
          customCommentId: ulid(),
          content: "comment22 Original Description",
        })
      );

      setCurrentComment(comment);
      console.log("Comment22 created:", comment);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // TODO: add additional field Update
  // async function updateComment22() {
  // 	clearState();
  // 	const [originalComment] = await DataStore.query(Comment22);
  // 	try {
  // 		const comment = await DataStore.save(
  // 			Comment22.copyOf(originalComment, updated => {
  // 				updated.content = 'UPDATED DESCRIPTION';
  // 			})
  // 		);

  // 		console.log('comment22 created:', comment);
  // 	} catch (error) {
  // 		console.error('Save failed:', error);
  // 	}
  // }

  // Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
  async function updateComment22Pk() {
    clearState();
    const [originalcomment] = await DataStore.query(Comment22);
    console.log("Original comment:", originalcomment);

    try {
      const comment = await DataStore.save(
        Comment22.copyOf(originalcomment, (updated) => {
          // throws TS error, as PK is immutable
          //@ts-expect-error
          updated.content = `content ${Date.now()}`;
        })
      );

      console.log("comment updated:", comment);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // Delete
  async function deleteComment22() {
    clearState();
    const [comment] = await DataStore.query(Comment22);
    if (!comment) return;
    await DataStore.delete(comment);
  }

  // Does not apply: Delete by PK (SK is present)

  // Delete by PK Predicate
  async function deleteComment22ByPkPredicate() {
    clearState();
    const [comment] = await DataStore.query(Comment22);
    if (!comment) return;

    await DataStore.delete(Comment22, (c) =>
      c.customCommentId("eq", comment.customCommentId)
    );
  }

  // Does not apply: Delete by PK OL

  // Delete by PK + SK Predicate
  async function deleteComment22ByPkSkPredicate() {
    clearState();
    const [comment] = await DataStore.query(Comment22);
    if (!comment) return;

    await DataStore.delete(Comment22, (c) =>
      c
        .customCommentId("eq", comment.customCommentId)
        .content("eq", comment.content)
    );
  }

  // Does not apply: Delete by PK + Multi SK Predicate

  // Delete by PK + SK OL
  async function deleteComment22ByPkSkOL() {
    clearState();
    const [comment] = await DataStore.query(Comment22);
    if (!comment) return;
    await DataStore.delete(Comment22, {
      customCommentId: comment.customCommentId,
      content: comment.content,
    });
  }

  //#endregion

  //#region Delete ALL

  function deleteAll() {
    DataStore.delete(Post22, Predicates.ALL);
    DataStore.delete(Comment22, Predicates.ALL);
  }

  //#endregion

  //#region Relational CRUD
  // Query by PK filter
  async function getCurrentCommentPost22sByPkFilter() {
    const posts = (await DataStore.query(Post22)).filter(
      (c) => c.customPostId === currentComment.post22CommentsCustomPostId
    );
    setPost22s(posts);
    console.log("Comment22s", posts);
  }

  // Query by PK + SK filter
  async function getCurrentCommentPost22sByPkSkFilter() {
    if (!currentPost) return;
    const posts = (await DataStore.query(Post22)).filter(
      (c) =>
        c.customPostId === currentComment.post22CommentsCustomPostId &&
        c.title === currentComment.post22CommentsTitle
    );
    setPost22s(posts);
    console.log("Post22s", posts);
  }

  // Does not apply to relational query: Query by PK

  // Query by PK Predicate
  async function getCurrentCommentPost22ByPkPredicate() {
    if (!currentPost) return;
    const post = await DataStore.query(Post22, (c) =>
      c.customPostId("eq", currentComment.post22CommentsCustomPostId)
    );
    console.log("by PK Predicate", post);
    setPost22s(post);
  }

  // Query by PK + SK Predicate
  async function getCurrentCommentPost22sbyPKSKPredicate() {
    if (!currentPost) return;
    const post = await DataStore.query(Post22, (c) =>
      c
        .customPostId("eq", currentComment.post22CommentsCustomPostId)
        .title("eq", currentComment.post22CommentsTitle)
    );
    console.log("by PK Predicate", post);
    setPost22s(post);
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
  async function deleteCurrentCommentPost22ByPkPredicate() {
    clearState();

    await DataStore.delete(Post22, (c) =>
      c.customPostId("eq", currentComment.post22CommentsCustomPostId)
    );
  }

  // Does not apply to relational model: Delete by PK OL

  // Delete by PK + SK Predicate
  async function deleteCurrentCommentPost22ByPkSkPredicate() {
    clearState();

    await DataStore.delete(Post22, (c) =>
      c
        .customPostId("eq", currentComment.post22CommentsCustomPostId)
        .title("eq", currentComment.post22CommentsTitle)
    );
  }

  // Does not apply: Delete by PK + Multi SK Predicate

  // Does not apply to relational model: Delete by PK + SK OL

  //#endregion

  //#region Comment22 Relational CRUD
  // Query by PK filter
  async function getCurrentPostComment22sByPkFilter() {
    const posts = (await DataStore.query(Comment22)).filter(
      (c) => c.post22CommentsCustomPostId === currentPost.customPostId
    );
    setPost22s(posts);
    console.log("Comment22s", posts);
  }

  // Query by PK + SK filter
  async function getCurrentPostComment22sByPkSkFilter() {
    if (!currentPost) return;
    const posts = (await DataStore.query(Comment22)).filter(
      (c) =>
        c.post22CommentsCustomPostId === currentPost.customCommentId &&
        c.post22CommentsTitle === currentPost.title
    );
    setPost22s(posts);
    console.log("Post22s", posts);
  }

  // Does not apply to relational query: Query by PK

  // Query by PK Predicate
  async function getCurrentPostComment22ByPkPredicate() {
    if (!currentPost) return;
    const post = await DataStore.query(Comment22, (c) =>
      c.post22CommentsCustomPostId("eq", currentPost.customCommentId)
    );
    console.log("by PK Predicate", post);
    setPost22s(post);
  }

  // Query by PK + SK Predicate
  async function getCurrentPostComment22sbyPKSKPredicate() {
    if (!currentPost) return;
    const post = await DataStore.query(Comment22, (c) =>
      c
        .post22CommentsCustomPostId("eq", currentPost.customCommentId)
        .post22CommentsTitle("eq", currentPost.title)
    );
    console.log("by PK Predicate", post);
    setPost22s(post);
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
  async function deleteCurrentPostComment22ByPkPredicate() {
    clearState();

    await DataStore.delete(Comment22, (c) =>
      c.post22CommentsCustomPostId("eq", currentPost.customCommentId)
    );
  }

  // Does not apply to relational model: Delete by PK OL

  // Delete by PK + SK Predicate
  async function deleteCurrentPostComment22ByPkSkPredicate() {
    clearState();

    await DataStore.delete(Comment22, (c) =>
      c
        .post22CommentsCustomPostId("eq", currentPost.customCommentId)
        .post22CommentsTitle("eq", currentPost.title)
    );
  }

  // Does not apply: Delete by PK + Multi SK Predicate

  // Does not apply to relational model: Delete by PK + SK OL
  //#endregion

  return (
    <div className="App">
      <header className="App-header">
        <h1>2.2 hasMany - bidirectional</h1>
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
            style={{ backgroundColor: "red" }}
          >
            Delete All Records
          </button>
          <button onClick={() => clearState()}>Clear component state</button>
        </div>

        <span>Comment22:</span>
        <div className="buttons">
          <button data-test="datastore-query-1" onClick={getComment22s}>
            Query
          </button>
          <button onClick={getComment22s}>Query by PK</button>
          <button onClick={getComment22ByPkPredicate}>Query by PK Pred</button>
          <button onClick={getComment22sbyPKSKPredicate}>
            Query by PK + SK Predicate
          </button>
          <button disabled>Query by PK OL</button>
          <button onClick={getComment22sbyPkSkOl}>Query by PK + SK OL</button>
          <button onClick={getComment22ByAll}>Query by ALL</button>
          <button onClick={createComment22} data-test="datastore-create-1">
            Create
          </button>
          <button onClick={updateComment22Pk} data-test="datastore-update-1">
            Update Last
          </button>
          <button onClick={updateComment22Pk} data-test="datastore-update-1">
            Update Last by PK
          </button>
          <button onClick={deleteComment22} data-test="datastore-delete-1">
            Delete Last
          </button>
          <button disabled>Delete by PK</button>
          <button onClick={deleteComment22ByPkPredicate}>
            Delete by PK Pred
          </button>
          <button disabled>Delete by PK OL</button>
          <button onClick={deleteComment22ByPkSkPredicate}>
            Delete by PK + SK Pred
          </button>
          <button onClick={deleteComment22ByPkSkOL}>
            Delete by PK + SK OL
          </button>
        </div>
        <span>Post22 relational operations:</span>
        <div className="buttons">
          <button
            disabled={!currentPost}
            onClick={getCurrentPostComment22sByPkFilter}
          >
            get Comments for Cur. Post - PkFilter
          </button>
          <button
            disabled={!currentPost}
            onClick={getCurrentPostComment22sByPkSkFilter}
          >
            get Comment for Cur. Post - PkSkFilter
          </button>
          <button
            disabled={!currentPost}
            onClick={getCurrentPostComment22ByPkPredicate}
          >
            get Comment for Cur. Post - PkPredicate
          </button>
          <button
            disabled={!currentPost}
            onClick={getCurrentPostComment22sbyPKSKPredicate}
          >
            get Proj for Cur. Post - PkSkPredicate
          </button>
          <button disabled onClick={deleteCurrentPostComment22ByPkPredicate}>
            Del Comment for Cur. Post - PkPred
          </button>
          <button
            disabled={!currentPost}
            onClick={deleteCurrentPostComment22ByPkSkPredicate}
          >
            Del Comment for Cur. Post - PkSkPred
          </button>
        </div>
        <span>Independent Post22 operations:</span>
        <div className="buttons">
          <button data-test="datastore-query-1" onClick={getPost22s}>
            Query
          </button>
          <button onClick={getPost22s}>Query by PK</button>
          <button onClick={getPost22ByPkPredicate}>Query by PK Pred</button>
          <button onClick={getPost22sbyPKSKPredicate}>
            Query by PK + SK Predicate
          </button>
          <button disabled>Query by PK OL</button>
          <button onClick={getPost22sbyPkSkOl}>Query by PK + SK OL</button>
          <button onClick={getPost22ByAll}>Query by ALL</button>
          <button
            disabled={!currentPost}
            onClick={createCurrentPost22}
            data-test="datastore-create-1"
          >
            Create (Cur. Post)
          </button>
          <button onClick={updatePost22} data-test="datastore-update-1">
            Update Last
          </button>
          <button onClick={updatePost22Pk} data-test="datastore-update-1">
            Update Last by PK
          </button>
          <button onClick={deletePost22} data-test="datastore-delete-1">
            Delete Last
          </button>
          <button disabled>Delete by PK</button>
          <button onClick={deletePost22ByPkPredicate}>Delete by PK Pred</button>
          <button disabled>Delete by PK OL</button>
          <button onClick={deletePost22ByPkSkPredicate}>
            Delete by PK + SK Pred
          </button>
          <button onClick={deletePost22ByPkSkOL}>Delete by PK + SK OL</button>
        </div>
        <span>Comment22 relational operations:</span>
        <div className="buttons">
          <button
            disabled={!currentPost}
            onClick={getCurrentCommentPost22sByPkFilter}
          >
            get Posts for Cur. Comment - PkFilter
          </button>
          <button
            disabled={!currentPost}
            onClick={getCurrentCommentPost22sByPkSkFilter}
          >
            get Post for Cur. Comment - PkSkFilter
          </button>
          <button
            disabled={!currentPost}
            onClick={getCurrentCommentPost22ByPkPredicate}
          >
            get Post for Cur. Comment - PkPredicate
          </button>
          <button
            disabled={!currentPost}
            onClick={getCurrentCommentPost22sbyPKSKPredicate}
          >
            get Proj for Cur. Comment - PkSkPredicate
          </button>
          <button disabled onClick={deleteCurrentCommentPost22ByPkPredicate}>
            Del Post for Cur. Comment - PkPred
          </button>
          <button
            disabled={!currentPost}
            onClick={deleteCurrentCommentPost22ByPkSkPredicate}
          >
            Del Post for Cur. Comment - PkSkPred
          </button>
        </div>
        <div className="container">
          <div className="section">
            <pre>
              <span>Comment22:</span>

              <pre data-test="datastore-output-3">
                {JSON.stringify(comment22s, null, 2)}
              </pre>
            </pre>
          </div>
          <div className="section">
            <pre>
              <span>Post22:</span>
              <pre data-test="datastore-output-2">
                {JSON.stringify(post22s, null, 2)}
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

export default Post22Component;
