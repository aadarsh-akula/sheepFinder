import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, adminRegisterWithEmailAndPassword } from "../firebase";

function AdminRegisterForm() {
  const [admin, loading1, error] = useAuthState(auth);
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [cpassword1, setCPassword1] = useState("");
  const [firstname1, setFirstName1] = useState("");
  const [lastname1, setLastName1] = useState("");
  const [phonenumber1, setPhoneNumber1] = useState("");
  const [companyname, setCompanyName] = useState("");

  const history = useHistory();
  const register1 = () => {
    if (!firstname1) alert("Please enter your first name");
    if (!lastname1) alert("Please enter your last name");
    if (!email1) alert("Please enter your first name");
    if (!password1) alert("Please enter your last name");
    if (!cpassword1) alert("Please enter your first name");
    if (!phonenumber1) alert("Please enter your last name");
    if (!companyname) alert("Please enter eyour Company's name");

    adminRegisterWithEmailAndPassword(
      firstname1,
      lastname1,
      email1,
      password1,
      cpassword1,
      phonenumber1,
      companyname
    );
  };
  useEffect(() => {
    if (loading1) return;
    if (admin) history.replace("/admindashboard");
  }, [admin, loading1]);

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
                name="name1"
                id="name"
                placeholder="First Name"
                onChange={(e) => setFirstName1(e.target.value)}
                value={firstname1}
              />
            </div>

            <div>
              <p className="asterik">Last Name</p>
              <input
                type="name"
                name="name1"
                id="name"
                placeholder="Last Name"
                onChange={(e) => setLastName1(e.target.value)}
                value={lastname1}
              />
            </div>
            <div>
              <p className="asterik">Email</p>
              <input
                type="email"
                name="email1"
                id="email"
                onChange={(e) => setEmail1(e.target.value)}
                value={email1}
                placeholder="E-mail Address"
              />
            </div>
            <div>
              <p className="asterik">Password</p>
              <input
                type="password"
                name="password1"
                id="password"
                onChange={(e) => setPassword1(e.target.value)}
                value={password1}
              />
            </div>
            <div>
              <p className="asterik">Confirm Password</p>
              <input
                type="password"
                name="password1"
                id="cPassword"
                onChange={(e) => setCPassword1(e.target.value)}
                value={cpassword1}
              />
            </div>

            <div>
              <p className="asterik">Company's Name</p>
              <input
                type="name"
                name="companyname1"
                id="companyname"
                placeholder="Company's name"
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyname}
              />
            </div>

            <div>
              <p className="asterik">Phone Number</p>
              <input
                type="phonenumber"
                name="phonenumber1"
                id="phonenumber1"
                placeholder="phone #"
                onChange={(e) => setPhoneNumber1(e.target.value)}
                value={phonenumber1}
              />
            </div>

            <div className="register_button">
              <Link
                className="button_login1"
                to="/admindashboard"
                value="RegisterAdmin"
                onClick={register1}
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
  );
}

export default AdminRegisterForm;
