import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
//import { auth, adminRegisterWithEmailAndPassword } from "../firebase";

function AdminRegisterForm() {
  /*
  const [user, loading, error] = useAuthState(auth);
  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const history = useHistory();
  const register = () => {
    if (!firstname) alert("Please enter your first name");
    if (!lastname) alert("Please enter your last name");
    if (!email1) alert("Please enter your first name");
    if (!password1) alert("Please enter your last name");
    if (!cpassword) alert("Please enter your first name");
    if (!phonenumber) alert("Please enter your last name");

    adminRegisterWithEmailAndPassword(
      firstname,
      lastname,
      email1,
      password1,
      cpassword,
      phonenumber
    );
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/admindashboard");
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
                type="name"
                name="name"
                id="name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
              />
            </div>

            <div>
              <p className="asterik">Last Name</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
              />
            </div>
            <div>
              <p className="asterik">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email1}
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
                value={password1}
              />
            </div>
            <div>
              <p className="asterik">Confirm Password</p>
              <input
                type="password"
                name="password"
                id="cPassword"
                onChange={(e) => setCPassword(e.target.value)}
                value={cpassword}
              />
            </div>

            <div>
              <p className="asterik">Phone Number</p>
              <input
                type="phonenumber"
                name="phonenumber1"
                id="phonenumber1"
                placeholder="phone #"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phonenumber}
              />
            </div>

            <div className="register_button">
              <Link
                className="button_login1"
                to="/admindashboard"
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
        <footer>&copy;Copyright 2021</footer>
      </div>
    </form>
  );*/
}

export default AdminRegisterForm;
