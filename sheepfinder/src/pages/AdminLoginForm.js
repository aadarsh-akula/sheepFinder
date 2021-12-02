import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  adminSignInWithEmailAndPassword,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";

function AdminLoginForm() {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [admin, loading1, error1] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading1) {
      return;
    }
    if (admin) history.replace("/admindashboard");
  }, [admin, loading1]);

  return (
    <form>
      <div className="sheep-body">
        <h1 className="welcome-text">Welcome to SheepFinder</h1>
        <h1 className="welcome-text">Login</h1>

        <div className="middle-sheep-body">
          <div className="login_background">
            <div>
              <p className="asterik">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
              />
            </div>
            <div>
              <p className="asterik">Password</p>
              <input
                type="password"
                name="password"
                id="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div>
              <p className="recoverPassword">
                Lost Password? Click
                <Link className="button_recover1" to="/recoveraccountform">
                  here
                </Link>
              </p>
            </div>
            <div className="register_button">
              <Link className="button_login2" to="/registerform">
                Register
              </Link>

              <Link
                className="button_login2"
                value="Login"
                onClick={() =>
                  adminSignInWithEmailAndPassword(email1, password1)
                }
              >
                Login
              </Link>
            </div>
            or
            <div className="google_div">
              <div className="google_icon_div">
                <IconContext.Provider value={{ style: { fontSize: "30px" } }}>
                  <FcGoogle className="google_icon" />
                </IconContext.Provider>
              </div>

              <Link
                className="button_login4"
                value="Login"
                onClick={signInWithGoogle}
              >
                Login with Google
              </Link>
            </div>
          </div>
        </div>
        <footer>&copy;Copyright 2021</footer>
      </div>
    </form>
  );
}

export default AdminLoginForm;
