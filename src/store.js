import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features/signup/signup-slice";
import signinReducer from "./features/signin/signinSlice";
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/order/orderSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
  },
});

export default store;
