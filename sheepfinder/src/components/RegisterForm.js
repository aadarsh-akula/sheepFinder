import React, { useState } from "react";
import "./style.css";


function RegisterForm({ Register, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      Register(details); //pass in details
    };
  
    return (
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
            <div>
              <p className="asterik">Confirm Password</p>
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
            <input className="login" type="submit" value="Login" />
            <p></p>
            <input className="login" type="submit" value="Login" />
            <input className="login" type="submit" value="Login" />
          </div>
          <footer>&copy;Copyright 2021</footer>
        </div>
      </form>
    );
  }