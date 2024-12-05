import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { BASE_URL, MESSAGE } from "../../constants/constants";

export const signUpUser = createAsyncThunk(
  "signup/signUpUser",
  async (formData, { rejectWithValue }) => {
    try {
      const resp = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!resp.ok) {
        toast.error(MESSAGE.SIGNUP_FAILURE);
        throw new Error("SignUp failed!");
      }
      toast.success(MESSAGE.SIGNUP_SUCCESS);
      return await resp.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    formData: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
    status: "idle", // idle, loading, succeeded, failed
    errorMessage: null,
  },
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setError(state, action) {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.formData = {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
        state.errors = {};
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.payload;
      });
  },
});

export const { updateFormData, setError } = signUpSlice.actions;
export default signUpSlice.reducer;
