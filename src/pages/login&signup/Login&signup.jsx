import React, { useState } from "react";
import "./Login&signup.css";
import LoginForm from "../../components/loginForm/LoginForm";
import SignupForm from "../../components/signupForm/SignupForm";

export default function LoginSignup() {
  let [toggle, setToggle] = useState(false);

  const change = () => {
    setToggle(!toggle);
  };

  return (
    <div className="body">
      <div
        className={toggle ? "container right-panel-active" : "container"}
        id="container"
      >
        <SignupForm />
        <LoginForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={change}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={change}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
