import React, { useEffect } from "react";
import "./sign-in.scss";
import Input from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  updateSigninForm,
  signInUser,
} from "../../features/signin/signinSlice";

const SignInComponent = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.signin.formData);
  const errors = useSelector((state) => state.signin.errors);
  const status = useSelector((state) => state.signin.status);
  const errorMessage = useSelector((state) => state.signin.errorMessage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSigninForm({ [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.email.trim()) errors.email = "Email address is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      dispatch(setError(validationErrors));
    } else {
      dispatch(signInUser(formData))
        .then((resp) => {
          if (typeof resp.payload !== "string") {
            alert("Sign-in successful!");
          } else {
            alert("Invalid credentials");
          }
        })
        .catch((error) => {
          alert(`Sign-in failed: ${error.message}`);
        });
    }
  };

  return (
    <>
      {errorMessage && (
        <div
          className="error-notification"
          style={{ color: "red", padding: "10px", marginBottom: "10px" }}
        >
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="sign-in">
        <h2>I already have an account!</h2>
        <span>Sign in with your email & password</span>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <CustomButton
            className="custom-button"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Signing In..." : "Sign In"}
          </CustomButton>
        </form>
      </div>
    </>
  );
};

export default SignInComponent;
