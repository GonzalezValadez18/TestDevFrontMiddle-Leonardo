import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../redux/postsSlice";
import { fetchTodos } from "../redux/todosSlice";

import Posts from "./Posts";
import Todos from "./Todos";

function UserDetail() {
  const dispatch = useDispatch();
  const [section, setSection] = useState("");

  const user = useSelector((state) => state.users.selectedUser);

  useEffect(() => {
    setSection("");
  }, [user?.id]);

  if (!user) {
    return <div className="empty-state">Selecciona un usuario para consultar su información.</div>;
  }

  const handlePosts = () => {
    setSection("posts");
    dispatch(fetchPosts(user.id));
  };

  const handleTodos = () => {
    setSection("todos");
    dispatch(fetchTodos(user.id));
  };

  return (
    <>
      <div className="user-header">
        <div>
          <p className="section-label">Perfil</p>

          <h2 className="user-name">{user.name}</h2>

          <p className="user-username">@{user.username}</p>
        </div>
      </div>

      <div className="user-info">
        <div className="info-card">
          <span>Email</span>
          <p>{user.email}</p>
        </div>

        <div className="info-card">
          <span>Teléfono</span>
          <p>{user.phone}</p>
        </div>

        <div className="info-card">
          <span>Sitio web</span>
          <p>{user.website}</p>
        </div>

        <div className="info-card">
          <span>Empresa</span>
          <p>{user.company?.name}</p>
        </div>
      </div>

      <div className="actions">
        <button className={`action-button ${section === "posts" ? "active" : ""}`} onClick={handlePosts}>
          Posts
        </button>

        <button className={`action-button ${section === "todos" ? "active" : ""}`} onClick={handleTodos}>
          Todos
        </button>
      </div>

      {section === "posts" && <Posts />}
      {section === "todos" && <Todos />}
    </>
  );
}

export default UserDetail;
