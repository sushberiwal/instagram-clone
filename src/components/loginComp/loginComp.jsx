import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginComp = () => {
  const [isLoginForm, setLoginForm] = useState(true);

  function handleForm() {
    setLoginForm(!isLoginForm);
  }

  return (
    <div className="login">
      <div className="login__img">
        <img
          src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
          alt=""
        />
        <div className="phone__pic">
          <img
            src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="login__section">
        <div className="login__details">
          <div className="login__logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
              alt=""
            />
          </div>
          {isLoginForm ? (
            <form className="login__form">
              <input type="text" placeholder="email"></input>
              <input type="password" placeholder="password"></input>
              <div className="button lgn">Login</div>
            </form>
          ) : (
            <form className="login__form">
              <input type="text" placeholder="username"></input>
              <input type="text" placeholder="email"></input>
              <input type="password" placeholder="password"></input>
              <div className="button lgn">Sign Up</div>
            </form>
          )}
        </div>
        <h3 className="or">or</h3>
        <div className="login__btn">
          {isLoginForm ? (
            <div className="button" onClick={handleForm}>
              Sign Up
            </div>
          ) : (
            <div className="button" onClick={handleForm}>
              Login
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
