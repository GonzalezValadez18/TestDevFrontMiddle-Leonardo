# Evaluación Técnica Nuxiba

Para esta prueba utilicé React con Hooks y Redux Toolkit para consumir la API de JSONPlaceholder y traer los datos de los usuarios para mostrarlos en la aplicación.

Al seleccionar un usuario se muestra su información como nombre, usuario, correo, teléfono y sitio web, además de dos botones para poder visualizar sus Posts y sus Todos.

En la sección de Posts se muestran todas las publicaciones correspondientes al usuario seleccionado, cada una con sus respectivos comentarios.

En la sección de Todos se muestran las tareas del usuario ordenadas por su ID de mayor a menor. También se agregó un formulario para crear una nueva tarea, donde se puede ingresar el título y seleccionar si la tarea está completada.

Al guardar una nueva tarea se realiza una petición POST a JSONPlaceholder enviando el ID del usuario, el título y el estado de la tarea. Cabe destacar que JSONPlaceholder no guarda realmente la información, solamente devuelve la tarea con el ID 201, por lo que esta se muestra temporalmente en la aplicación y desaparece al recargar la página.

Para la interfaz utilicé Bootstrap y algunos estilos propios para mantener un diseño simple y responsivo.

## Tecnologías utilizadas

- React
- React Hooks
- Redux Toolkit
- React Redux
- Bootstrap
- Fetch API
- JSONPlaceholder

## Ejecutar el proyecto

```bash
npm install
```

```bash
npm run dev
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
