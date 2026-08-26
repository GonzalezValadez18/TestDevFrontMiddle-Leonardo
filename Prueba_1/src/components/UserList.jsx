import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUser } from "../redux/usersSlice";

function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.list);

  const selectedUser = useSelector((state) => state.users.selectedUser);

  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <>
      <p className="section-label">Usuarios</p>

      <div className="user-list">
        {users.map((user) => (
          <button key={user.id} className={`user-button ${selectedUser?.id === user.id ? "active" : ""}`} onClick={() => dispatch(selectUser(user))}>
            {user.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default UserList;
