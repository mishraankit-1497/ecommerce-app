import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: localStorage.getItem("userId") || null, 
  },
  reducers: {
    signIn: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    signOut: (state) => {
      state.userId = null; 
      localStorage.removeItem("userId");
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
