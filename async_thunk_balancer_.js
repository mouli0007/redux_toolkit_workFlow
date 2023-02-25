const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetching the post !
export const fetch_post = createAsyncThunk("post/fetch_post", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

// Adding a new Post !

export const addNew_Post = createAsyncThunk(
  "post/addNew_Post",
  async (initialPost) => {
    try {
      const response = await axios.post(POSTS_URL, initialPost);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);



  extraReducers(builder) {
    builder
      .addCase(fetch_post.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetch_post.fulfilled, (state, action) => {
        state.status = "Succeeded";

        // Adding Dates and Time To the new Post !

        let min = 1;
        const loaded_post = action.payload.map((post) => {
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

        state.posts = state.posts.concat(loaded_post);
        console.log(state.posts);
      })
      .addCase(fetch_post.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      })


      // Adding a Post !
      .addCase(addNew_Post.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.posts.push(action.payload);
      });
  },
