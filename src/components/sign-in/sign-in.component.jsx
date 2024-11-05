import React from "react";
import CustomButton from "../custom-button/custom-button";
import Input from '../../components/form-input/form-input'
import './sign-in.scss'
const SignInComponent = () => {
  return (
    <div className="sign-in">
      <h2>I already have an account!</h2>
      <span>Sign in with your email & password</span>
      <form>
        <Input type="email" name="email" placeholder="Email address" />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <CustomButton className="custom-button" type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignInComponent;
