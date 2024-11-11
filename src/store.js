import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features/signup/signup-slice";
const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;
