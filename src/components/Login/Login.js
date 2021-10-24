import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

function Login({ state, login }) {
  let history = useHistory();

  const Push = () => {
    history.push("/profile");
  };

  const emailHandle = (e) => {
    login({ email: e.target.value, password: state.login.password });
  };

  const passwordHandle = (e) => {
    login({ email: state.login.email, password: e.target.value });
  };

  return (
    <div className="wrapper">
      <div className="homepage">
        <h1 className="title">Enter your login and password to login</h1>
        <input
          type="email"
          name="email"
          placeholder="Input your email"
          value={state.login.email}
          onChange={emailHandle}
        />
        <input
          type="password"
          name="password"
          placeholder="Input the password"
          value={state.login.password}
          onChange={passwordHandle}
        />
        {state.login.isAuth ? (
          <button onClick={Push}>login</button>
        ) : (
          <button disabled onClick={Push}>
            login
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
