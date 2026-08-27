import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <p className="app-header__eyebrow">Prueba 1</p>

          <h1>Nuxiba</h1>
        </header>

        <main className="app-layout">
          <aside className="panel sidebar">
            <UserList />
          </aside>

          <section className="panel content-panel">
            <UserDetail />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
