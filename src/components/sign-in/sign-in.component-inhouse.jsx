import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button";
import Input from "../form-input/form-input";
import "./sign-in.scss";
import axios from "axios";
const SignInComponentInHouse = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:3000/signin", {
        email,
        password,
      });
      if (resp.data) {
        alert("Sign in successfull!");
      } else {
        alert("User not found!");
      }
    } catch (err) {
      alert("Sign In failed", err);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account!</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <CustomButton className="custom-button" type="submit">
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignInComponentInHouse;
