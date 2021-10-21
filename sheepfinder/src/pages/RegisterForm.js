import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function RegisterForm({ Register, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  return (
    <form>
      <div className="sheep-body">
        <h1 className="welcome-text">Welcome to SheepFinder</h1>
        <h1 className="welcome-text">Register</h1>

        <div className="middle-sheep-body">
          <div className="register_background">
          <div>
            <p className="asterik">First and Last Name</p>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>

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
          <div>
            <p className="asterik">Confirm Password</p>
            <input
              type="password"
              name="password"
              id="cPassword"
              onChange={(e) =>
                setDetails({ ...details, cPassword: e.target.value })
              }
              value={details.cpassword}
            />
          </div>
        
        <div className="register_button">
          <Link className="button_login1" to="/dashboard" value="Register">
            Register
          </Link>

          <Link className="button_login2" to="/loginform" value="Login">
            Return
          </Link>
        </div>
        </div>
        </div>
        <footer>&copy;Copyright 2021</footer>
      </div>
    </form>
  );
}

export default RegisterForm;
