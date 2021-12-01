import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p className="asterik">Password</p>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={() => signInWithEmailAndPassword(email, password)}
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

export default LoginForm;
