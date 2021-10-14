import React, { useState } from "react";
import "./style.css";
import { Link, BrowserRouter, Router, Route } from "react-router-dom";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "Yor Her",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details); //pass in details
  };

  return (
    <BrowserRouter>
    <form onSubmit={submitHandler}>
      <div className="error-message">
        {error != "" ? <div className="error">{error}</div> : ""}
      </div>
      <div className="sheep-body">
        {" "}
        <h1 className="welcome-text">Welcome to SheepFinder</h1>
        <h1 className="welcome-text">Login</h1>
        <div>
          <img src="https://cdn1.iconfinder.com/data/icons/follow-the-herd/512/blank_left-128.png" />
        </div>
        <div className="middle-sheep-body">
          <div>
            <p className="asterik">Email</p>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>

          <div>
            <p className="asterik">Password</p>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input className="uploadRes" type="button" value="Upload Resume"/>
          <input className="button" type="submit" value="Login" />
          <div>
            <input className="button" type="button" value="Register as a user" />
            <input className="button" type="button" value="Register as an admin" />
          </div>
        </div>
        <footer>&copy;Copyright 2021</footer>
      </div>
    </form>
    </BrowserRouter>
  );
}

export default LoginForm;
