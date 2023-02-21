
######################################
#########################################

Redux Async Thunk !

import { createAsyncThunk} from "@reduxjs/toolkit";


###############

Syntax

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});


  // Extra Reducers !

  extraReducers(builder) {
    builder
      // Pending
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      // FullFilled !
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "Succeeded";

        let min = 1;
        const loadedPost = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.posts = state.posts.concat(loadedPost);
      })
      // Rejected !
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
