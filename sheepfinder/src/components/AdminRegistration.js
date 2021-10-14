import React, { useState } from "react";
import "./style.css";

function AdminRegisterForm({ AdminRegister, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "", company: "" });
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      AdminRegister(details); //pass in details
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
                type="text"
                name="company"
                id="company"
                onChange={(e) =>
                  setDetails({ ...details, company: e.target.value })
                }
                value={details.company}
              />
            </div>
            <div>
              <p className="asterik">Company you work for</p>
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
            <input className="button" type="submit" value="Register" />
            <div>
              <input className="button" type="submit" value="Already a user?" />
              <input className="button" type="submit" value="Register as a user" />
            </div>
          </div>
          <footer>&copy;Copyright 2021</footer>
        </div>
      </form>
    );
  }