import React from "react";
import Form from "../components/Form";

export default function Login(props) {
  return (
    <>
      <Form
        formHeading="Sign into your account"
        buttonText="Login"
        secondOptionText="Forgot password"
        questionText="Don't have an account?"
        ctaText="Register here"
        buttonAction={props.toggleAlert}
      />
    </>
  );
}
