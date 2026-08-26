import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

  const posts = await response.json();

  const postsWithComments = await Promise.all(
    posts.map(async (post) => {
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

      const comments = await commentsResponse.json();

      return {
        ...post,
        comments,
      };
    }),
  );

  return postsWithComments;
});

const postsSlice = createSlice({
  name: "posts",

  initialState: {
    list: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
