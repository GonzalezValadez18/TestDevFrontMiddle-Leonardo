import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);

  const todos = await response.json();

  return todos.sort((a, b) => b.id - a.id);
});

export const createTodo = createAsyncThunk("todos/createTodo", async (todo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  return response.json();
});

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    list: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      });
  },
});

export default todosSlice.reducer;
