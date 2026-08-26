import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts.list);

  const loading = useSelector((state) => state.posts.loading);

  if (loading) {
    return <p className="text-muted">Cargando publicaciones...</p>;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="content-title">Publicaciones ({posts.length})</h3>
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <h3>{post.title}</h3>

          <p>{post.body}</p>

          <div className="comments">
            <p className="comments-title">Comentarios</p>

            {post.comments.map((comment) => (
              <div key={comment.id} className="comment">
                <strong>{comment.name}</strong>

                <p>{comment.body}</p>

                <small>{comment.email}</small>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default Posts;
