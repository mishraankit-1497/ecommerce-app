import React from "react";
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up";
import "./authentication-container.scss";

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
