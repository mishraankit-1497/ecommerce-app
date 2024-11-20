import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features/signup/signup-slice";
import signinReducer from "./features/signin/signinSlice";
import cartReducer from './features/cart/cartSlice'

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    cart: cartReducer
  },
});

export default store;
