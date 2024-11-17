import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features/signup/signup-slice";
import signinReducer from "./features/signin/signinSlice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
});

export default store;
