import NavBar from "./NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, personalityAnswer } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PersonalityTest() {
  const [user, loading1, error] = useAuthState(auth);
  const [Persona1, setPersonA1] = useState("");
  const [Persona2, setPersonA2] = useState("");
  const [Persona3, setPersonA3] = useState("");
  const [Persona4, setPersonA4] = useState("");
  const [Persona5, setPersonA5] = useState("");
  const [Personq1, setPersonQ1] = useState("");
  const [Personq2, setPersonQ2] = useState("");
  const [Personq3, setPersonQ3] = useState("");
  const [Personq4, setPersonQ4] = useState("");
  const [Personq5, setPersonQ5] = useState("");

  const history = useHistory();
  const personalityTeststore = () => {
    if (!Persona1) alert("Please enter your last name");
    if (!Persona2) alert("Please enter your last name");
    if (!Persona3) alert("Please enter your last name");
    if (!Persona4) alert("Please enter your last name");
    if (!Persona5) alert("Please enter your last name");


    personalityAnswer(
      Persona1,
      Persona2,
      Persona3,
      Persona4,
      Persona5
    );
  };
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setPersonQ1(data.Persona1);
      setPersonQ2(data.Persona2);
      setPersonQ3(data.Persona3);
      setPersonQ4(data.Persona4);
      setPersonQ5(data.Persona5);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading1) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading1]);
  return (
      <>
        <NavBar />
        <form>
      <div className="sheep-body">
        <h1 className="welcome-text">Personality Test</h1>
        <div className="dashboard_component">
        <div className="attribute_background">
            <div className="aq1">
            <div>
              <p className="asterik">1. {Personq1}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setPersonA1(e.target.value)}
                value={Persona1}
              />
            </div>
            </div>
            <div className="aq2">
            <div>
              <p className="asterik">2. {Personq2}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setPersonA2(e.target.value)}
                value={Persona2}
              />
            </div>
            </div>
            <div className="aq3">
            <div>
              <p className="asterik">3. {Personq3}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setPersonA3(e.target.value)}
                value={Persona3}
              />
            </div>
            </div>
            <div className="aq4">
            <div>
              <p className="asterik">4. {Personq4}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setPersonA4(e.target.value)}
                value={Persona4}
              />
            </div>
            </div>
            <div className="aq5">
            <div>
              <p className="asterik">5. {Personq5}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setPersonA5(e.target.value)}
                value={Persona5}
              />
            </div>
            </div>
            <div className="fourteen">
              <Link
                className="button_login1"
                to="/dashboard"
                value="Register"
                onClick={personalityTeststore}
              >
                Finish
              </Link>
              </div>
              <div className="fifteen">
              <Link className="button_login2" to="/dashboard" value="Login">
                Return
              </Link>
              </div>
            </div>
          </div>
        <footer className="footer_register">&copy;Copyright 2021</footer>
      </div>
    </form>
        </>
  );
}

export default PersonalityTest;