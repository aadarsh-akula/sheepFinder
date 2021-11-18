import "./style.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";

function RegisterForm() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [YOB, setYOB] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const history = useHistory();
  const register = () => {
    if (!firstname) alert("Please enter your first name");
    if (!lastname) alert("Please enter your last name");
    if (!email) alert("Please enter your first name");
    if (!password) alert("Please enter your last name");
    if (!cpassword) alert("Please enter your first name");
    if (!phonenumber) alert("Please enter your last name");

    registerWithEmailAndPassword(
      firstname,
      lastname,
      email,
      password,
      cpassword,
      YOB,
      phonenumber
    );
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
                value={firstname}
                type="name"
                name="name"
                id="name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <p className="asterik">Last Name</p>
              <input
                value={lastname}
                type="name"
                name="name"
                id="name"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
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
                placeholder="Conform Password"
                onChange={(e) => setCPassword(e.target.value)}
                value={cpassword}
              />
            </div>
            <div>
              <p className="asterik">Year Of Birth</p>
              <input
                type="number"
                name="age"
                id="number"
                placeholder="Year of Birth"
                onChange={(e) => setYOB(e.target.value)}
                value={YOB}
              />
            </div>
            <div>
              <p className="asterik">Phone Number</p>
              <input
                type="phonenumber"
                name="phonenumber"
                id="phonenumber"
                placeholder="phone #"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phonenumber}
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
