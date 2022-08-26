import React from "react";
import RegisterForm from "../components/RegisterForm";

export default function Signup(props) {
  return (
    <>
      <RegisterForm
        formHeading="Register your account"
        buttonText="SignUp"
        secondOptionText="Forgot password"
        questionText="Already have an account?"
        ctaText="Sign in here"
        buttonAction={props.toggleSignUpAlert}
      />
    </>
  );
}
