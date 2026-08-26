import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
});

const usersSlice = createSlice({
  name: "users",

  initialState: {
    list: [],
    selectedUser: null,
    loading: false,
  },

  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { selectUser } = usersSlice.actions;

export default usersSlice.reducer;
