import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function RecoverAccountPrompt({ recover, error }) {
    const [details, setDetails] = useState({
    });
    return(

        <div className="sheep-body">
            <h1 className="welcome-text">SheepFinder</h1>
        <h1 className="welcome-text">Recover Password</h1>
        <div className="middle-sheep-body">
        <div className="promptbackground">
          <div>
            <p>An email has been sent to your email account. Please go to your email to recover your password.</p>
            
          </div>
          <div className="recover_button">
          <Link className="button_recover" to="/LoginForm">Return to Login</Link>
          </div>
          </div>
        </div>
        <footer>&copy;Copyright 2021</footer>
        </div>
    );
}
export default RecoverAccountPrompt;