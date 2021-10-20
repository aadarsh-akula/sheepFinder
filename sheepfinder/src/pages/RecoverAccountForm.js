import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function recoverAccountForm({ recover, error }) {
    const [details, setDetails] = useState({
        email: "",
    });
    return (
        <form>
            <div className="sheep-body">
            <h1 className="welcome-text">Welcome to SheepFinder</h1>
        <h1 className="welcome-text">Login</h1>
        
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
        </div>
        <footer>&copy;Copyright 2021</footer>
        </div>
        </form>
    );
}