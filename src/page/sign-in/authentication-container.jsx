import React from "react";
import SignInComponent from "../../components/sign-in/sign-in";
import "./authentication-container.scss";
import SignUp from "../sign-up/sign-up";

const AuthenticationContainer = () => {
  return (
    <>
      <div className="authentication-container">
        <div style={{'margin': '30px'}}>
          <SignInComponent />
        </div>
        <SignUp />
      </div>
    </>
  );
};

export default AuthenticationContainer;
