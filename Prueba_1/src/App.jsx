import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <p className="app-header__eyebrow">Frontend Developer Test</p>

          <h1>Evaluación Técnica Nuxiba</h1>

          <p>Aplicación desarrollada con React, Hooks y Redux utilizando la API de JSONPlaceholder.</p>
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
