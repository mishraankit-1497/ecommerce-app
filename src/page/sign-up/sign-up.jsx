import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  signUpUser,
  updateFormData,
} from "../../features/signup/signup-slice";
import Input from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import "./sign-up.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.signup.formData);
  const errors = useSelector((state) => state.signup.errors);
  const status = useSelector((state) => state.signup.status);
  const errorMessage = useSelector((state) => state.signup.errorMessage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.displayName.trim())
      errors.displayName = "Display name is required";
    if (!formData.email.trim()) errors.email = "Email address is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Password does not match!";
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(formData.email))
      errors.email = "Please enter a valid email address";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      dispatch(setError(validationErrors));
    } else {
      dispatch(signUpUser(formData));
      alert("Sign up successful");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
      <span className="block text-gray-600 text-center mb-6">
        Create an account with your email & password
      </span>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            label="Display name"
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            placeholder="Enter display name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.displayName && (
            <p className="text-sm text-red-500 mt-1">{errors.displayName}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <CustomButton
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
