import NavBar from "./NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, atributeAnswer } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function AtributeTest() {
  const [user, loading1, error] = useAuthState(auth);
  const [Apta1, setAptA1] = useState("");
  const [Apta2, setAptA2] = useState("");
  const [Apta3, setAptA3] = useState("");
  const [Apta4, setAptA4] = useState("");
  const [Apta5, setAptA5] = useState("");
  const [Aptq1, setAptQ1] = useState("");
  const [Aptq2, setAptQ2] = useState("");
  const [Aptq3, setAptQ3] = useState("");
  const [Aptq4, setAptQ4] = useState("");
  const [Aptq5, setAptQ5] = useState("");
  const [Aptq1c1, setAptQ1C1] = useState("");
  const [Aptq1c2, setAptQ1C2] = useState("");
  const [Aptq1c3, setAptQ1C3] = useState("");
  const [Aptq1c4, setAptQ1C4] = useState("");
  const [Aptq2c1, setAptQ2C1] = useState("");
  const [Aptq2c2, setAptQ2C2] = useState("");
  const [Aptq2c3, setAptQ2C3] = useState("");
  const [Aptq2c4, setAptQ2C4] = useState("");
  const [Aptq3c1, setAptQ3C1] = useState("");
  const [Aptq3c2, setAptQ3C2] = useState("");
  const [Aptq3c3, setAptQ3C3] = useState("");
  const [Aptq3c4, setAptQ3C4] = useState("");
  const [Aptq4c1, setAptQ4C1] = useState("");
  const [Aptq4c2, setAptQ4C2] = useState("");
  const [Aptq4c3, setAptQ4C3] = useState("");
  const [Aptq4c4, setAptQ4C4] = useState("");
  const [Aptq5c1, setAptQ5C1] = useState("");
  const [Aptq5c2, setAptQ5C2] = useState("");
  const [Aptq5c3, setAptQ5C3] = useState("");
  const [Aptq5c4, setAptQ5C4] = useState("");

  const history = useHistory();
  const attributeTest = () => {
    if (!Apta1) alert("Please enter your last name");
    if (!Apta2) alert("Please enter your last name");
    if (!Apta3) alert("Please enter your last name");
    if (!Apta4) alert("Please enter your last name");
    if (!Apta5) alert("Please enter your last name");


    atributeAnswer(
      Apta1,
      Apta2,
      Apta3,
      Apta4,
      Apta5
    );
  };
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setAptQ1(data.Aptq1);
      setAptQ2(data.aptq2);
      setAptQ3(data.Aptq3);
      setAptQ4(data.Aptq4);
      setAptQ5(data.Aptq5);
      setAptQ1C1(data.Aptq1c1);
      setAptQ1C2(data.Aptq1c2);
      setAptQ1C3(data.Aptq1c3);
      setAptQ1C4(data.Aptq1c4);
      setAptQ2C1(data.Aptq2c1);
      setAptQ2C2(data.Aptq2c2);
      setAptQ2C3(data.Aptq2c3);
      setAptQ2C4(data.Aptq2c4);
      setAptQ3C1(data.Aptq3c1);
      setAptQ3C2(data.Aptq3c2);
      setAptQ3C3(data.Aptq3c3);
      setAptQ3C4(data.Aptq3c4);
      setAptQ4C1(data.Aptq4c1);
      setAptQ4C2(data.Aptq4c2);
      setAptQ4C3(data.Aptq4c3);
      setAptQ4C4(data.Aptq4c4);
      setAptQ5C1(data.Aptq5c1);
      setAptQ5C2(data.Aptq5c2);
      setAptQ5C3(data.Aptq5c3);
      setAptQ5C4(data.Aptq5c4);
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
        <h1 className="welcome-text">Atribute Job</h1>
        <div className="dashboard_component">
        <div className="attribute_background">
            <div className="aq1">
            <div>
              <p className="asterik">1. {Aptq1}</p>
              <p className="example_account">a. {Aptq1c1}</p>
              <p className="example_account">b. {Aptq1c2}</p>
              <p className="example_account">c. {Aptq1c3}</p>
              <p className="example_account">d. {Aptq1c4}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setAptA1(e.target.value)}
                value={Apta1}
              />
            </div>
            </div>
            <div className="aq2">
            <div>
              <p className="asterik">2. {Aptq2}</p>
              <p className="example_account">a. {Aptq2c1}</p>
              <p className="example_account">b. {Aptq2c2}</p>
              <p className="example_account">c. {Aptq2c3}</p>
              <p className="example_account">d. {Aptq2c4}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setAptA2(e.target.value)}
                value={Apta2}
              />
            </div>
            </div>
            <div className="aq3">
            <div>
              <p className="asterik">3. {Aptq3}</p>
              <p className="example_account">a. {Aptq3c1}</p>
              <p className="example_account">b. {Aptq3c2}</p>
              <p className="example_account">c. {Aptq3c3}</p>
              <p className="example_account">d. {Aptq3c4}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setAptA3(e.target.value)}
                value={Apta3}
              />
            </div>
            </div>
            <div className="aq4">
            <div>
              <p className="asterik">4. {Aptq4}</p>
              <p className="asterik">a. {Aptq4c1}</p>
              <p className="asterik">b. {Aptq4c2}</p>
              <p className="asterik">c. {Aptq4c3}</p>
              <p className="asterik">d. {Aptq4c4}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setAptA4(e.target.value)}
                value={Apta4}
              />
            </div>
            </div>
            <div className="aq5">
            <div>
              <p className="asterik">5. {Aptq5}</p>
              <p className="asterik">a. {Aptq5c1}</p>
              <p className="asterik">b. {Aptq5c2}</p>
              <p className="asterik">c. {Aptq5c3}</p>
              <p className="asterik">d. {Aptq5c4}</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter answer"
                onChange={(e) => setAptA5(e.target.value)}
                value={Apta5}
              />
            </div>
            </div>
            <div className="fourteen">
              <Link
                className="button_login1"
                to="/personalitytest"
                value="Register"
                onClick={attributeTest}
              >
                Submit
              </Link>
              </div>
              <div className="fifteen">
              <Link className="button_login2" to="/adminloginform" value="Login">
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

export default AtributeTest;