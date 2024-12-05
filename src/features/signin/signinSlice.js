import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, MESSAGE } from "../../constants/constants";
import { toast } from "react-toastify";

export const signInUser = createAsyncThunk(
  "signin/signInUser",
  async (formData, { rejectWithValue }) => {
    try {
      const resp = await fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!resp.ok) {
        toast.error(MESSAGE.SIGNIN_FAILURE);
        throw new Error("SignIn failed");
      }
      toast.success(MESSAGE.SIGNIN_SUCCESS);
      return await resp.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signInSlice = createSlice({
  name: "signin",
  initialState: {
    formData: {
      email: "",
      password: "",
    },
    errors: {},
    status: "idle",
    errorMessage: null,
  },
  reducers: {
    updateSigninForm(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setError(state, action) {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.formData = {
          email: "",
          password: "",
        };
        state.errors = {};
        state.errorMessage = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.payload;
      });
  },
});

export const { updateSigninForm, setError } = signInSlice.actions;
export default signInSlice.reducer;
