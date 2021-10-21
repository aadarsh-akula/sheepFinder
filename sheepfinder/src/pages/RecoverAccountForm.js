import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function RecoverAccountForm({ recover, error }) {
    const [details, setDetails] = useState({
        email: "",
    });
    return (
        <form>
            <div className="sheep-body">
            <h1 className="welcome-text">SheepFinder</h1>
        <h1 className="welcome-text">Recover Password</h1>
        
        <div className="middle-sheep-body">
            <div className="recover_form_background">
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
          <div className="recovering">
          <Link className="button_recov" to="/RecoverAccountPrompt">Recover</Link>
          <Link className="button_return" to="/LoginForm">Return</Link>
          </div>
        </div>
        </div>
        <footer>&copy;Copyright 2021</footer>
        </div>
        </form>
    );
}
export default RecoverAccountForm;