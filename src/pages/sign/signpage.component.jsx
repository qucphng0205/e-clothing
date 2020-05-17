import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './signpage.style.css';

const SignPage = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignPage;
