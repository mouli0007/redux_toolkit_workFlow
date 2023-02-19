// ################################
// #############################

// Make The Imports in Index.js

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    // Passing the reducers from slice to the store
    user: userReducer,
  },
});

// ################################
// #############################
// Wrap the Main App component with Provider !

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// ################################
// #############################

// CreateSlice Example Syntaxt 

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
      age: 0,
    },
  },
  
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;

// ########################################
// ##########################################

UseSelector = ()=> To Acccess the data's from the state

UseDispatch = ()=> To acccess the reducer funtion to modify the state of the application
  const dispatch = useDispatch();

