import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  signUpUser,
  updateFormData,
} from "../../features/signup/signup-slice";
import Input from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

const SignUp = () => {
  // dispatch data from the component through action
  const dispatch = useDispatch();
  // selecting data from the store
  const formData = useSelector((state) => state.signup.formData);
  const errors = useSelector((state) => state.signup.errors);
  const status = useSelector((state) => state.signup.status);
  const errorMessage = useSelector((state) => state.signup.errorMessage);

  // Event change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  //validating the input fields
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

  // submitting the validation errors and formData to redux store
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      dispatch(setError(validationErrors));
    } else {
      dispatch(signUpUser(formData));
      alert("Sign up successfull");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display name"
          type="text"
          required
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName}</p>
        )}
        <Input
          label="Email"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <Input
          label="Password"
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <Input
          label="Confirm password"
          type="password"
          required
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
