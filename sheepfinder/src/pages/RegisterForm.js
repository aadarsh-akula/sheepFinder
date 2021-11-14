import "./style.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

function RegisterForm() {   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  

  return (
    <form>
      <div className="sheep-body">
        <h1 className="welcome-text">Welcome to SheepFinder</h1>
        <h1 className="welcome-text">Register</h1>

        <div className="middle-sheep-body">
          <div className="register_background">
            <div>
              <p className="asterik">First Name</p>
              <input
                //value={firstname}
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <p className="asterik">Last Name</p>
              <input
                //value={lastname}
                type="name"
                name="name"
                id="name"
                //onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <p className="asterik">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="E-mail Address"
              />
            </div>

            <div>
              <p className="asterik">Password</p>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>
            <div>
              <p className="asterik">Confirm Password</p>
              <input
                type="password"
                name="password"
                id="cPassword"
                // onChange={(e) => setCPassword(e.target.value)}
                // value={cpassword}
              />
            </div>

            <div>
              <p className="recoverPassword">
                Want to register as an admin? Click
                <Link className="button_recover1" to="/adminregisterform">
                  here
                </Link>
              </p>
            </div>

            <div className="register_button">
              <Link
                className="button_login1"
                to="/dashboard"
                value="Register"
                onClick={register}
              >
                Register
              </Link>

              <Link className="button_login2" to="/loginform" value="Login">
                Return
              </Link>
              
            </div>
           
          </div>
        </div>
        <footer className="footer_register">&copy;Copyright 2021</footer>
      </div>
    </form>
  );
}

export default RegisterForm;
