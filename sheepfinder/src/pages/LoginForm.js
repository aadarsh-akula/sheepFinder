import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "Yor Her",
    email: "",
    password: "",
  });

  return (
    <form>
      <div className="sheep-body">
        <h1 className="welcome-text">Welcome to SheepFinder</h1>
        <h1 className="welcome-text">Login</h1>
        <div>
          <img src="https://cdn1.iconfinder.com/data/icons/follow-the-herd/512/blank_left-128.png" />
        </div>
        <div className="middle-sheep-body">
          <div>
            <p className="asterik">Email</p>
            <input
              type="email"
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
        </div>
        <div className="register_button">
          <Link className="button_login1" to="/dashboard" value="Login">
            Register
          </Link>

          <Link className="button_login2" to="/dashboard" value="Login">
            Login
          </Link>
        </div>
        <footer>&copy;Copyright 2021</footer>
      </div>
    </form>
  );
}

export default LoginForm;
