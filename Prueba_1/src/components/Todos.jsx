import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/todosSlice";

function Todos() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState("");

  const todos = useSelector((state) => state.todos.list);

  const loading = useSelector((state) => state.todos.loading);

  const user = useSelector((state) => state.users.selectedUser);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTodo = {
      userId: user.id,
      title: title.trim(),
      completed,
    };

    const result = await dispatch(createTodo(newTodo)).unwrap();

    if (result.id === 201) {
      setMessage("Tarea creada correctamente");
    }

    setTitle("");
    setCompleted(false);
  };

  if (loading) {
    return <p className="text-muted">Cargando tareas...</p>;
  }

  return (
    <div>
      <h3 className="content-title">Tareas ({todos.length})</h3>

      <form className="todo-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo-title">Nueva tarea</label>

          <input id="todo-title" type="text" value={title} placeholder="Escribe el título de la tarea" onChange={(event) => setTitle(event.target.value)} />
        </div>

        <label className="todo-form__checkbox">
          <input type="checkbox" checked={completed} onChange={(event) => setCompleted(event.target.checked)} />
          Completada
        </label>

        <button type="submit" className="save-button">
          Guardar tarea
        </button>
      </form>

      {message && <div className="success-message">{message}</div>}

      {todos.map((todo) => (
        <article key={todo.id} className="todo-card">
          <div>
            <span className="todo-id">#{todo.id}</span>

            <strong>{todo.title}</strong>
          </div>

          <span className={`status ${todo.completed ? "completed" : "pending"}`}>{todo.completed ? "Completada" : "Pendiente"}</span>
        </article>
      ))}
    </div>
  );
}

export default Todos;
