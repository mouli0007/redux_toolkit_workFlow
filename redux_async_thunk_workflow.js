
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
