import NavBar from "./NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  db,
  personalityAnswer,
  testingAddingPersonality,
  arrayUnion,
  doc,
} from "../firebase";
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
  const [jobName, setJobName] = useState("");
  const [answers1, setAnswers1] = useState("");
  const [answers2, setAnswers2] = useState("");
  const [answers3, setAnswers3] = useState("");
  const [answers4, setAnswers4] = useState("");
  const [answers5, setAnswers5] = useState("");

  const history = useHistory();
  const personalityTeststore = () => {
    personalityAnswer(Persona1, Persona2, Persona3, Persona4, Persona5);
  };

  const fetchpersonality = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("providerId", "==", user?.providerId)
        .get();
      const data = await query.docs[0].data();
      setJobName(data.jobname);
      setPersonQ1(data.Personq1);
      setPersonQ2(data.Personq2);
      setPersonQ3(data.Personq3);
      setPersonQ4(data.Personq4);
      setPersonQ5(data.Personq5);

      console.log(data);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading1) return;
    if (!user) return history.replace("/");

    fetchpersonality();
  }, [user, loading1]);

  const testing = () => {
    doc.update({
      autoId: arrayUnion(answers1, answers2, answers3, answers4, answers5),
    });
    testingAddingPersonality(answers1, answers2, answers3, answers4, answers5);
  };

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
                    onChange={
                      ((e) => setPersonA1(e.target.value),
                      (e) => setAnswers1(e.target.value))
                    }
                    value={answers1}
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
                    onChange={
                      ((e) => setPersonA2(e.target.value),
                      (e) => setAnswers2(e.target.value))
                    }
                    value={answers2}
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
                    onChange={
                      ((e) => setPersonA3(e.target.value),
                      (e) => setAnswers3(e.target.value))
                    }
                    value={answers3}
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
                    onChange={
                      ((e) => setPersonA4(e.target.value),
                      (e) => setAnswers4(e.target.value))
                    }
                    value={answers4}
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
                    onChange={
                      ((e) => setPersonA5(e.target.value),
                      (e) => setAnswers5(e.target.value))
                    }
                    value={answers5}
                  />
                </div>
              </div>
              <div className="fourteen">
                <Link
                  className="button_login1"
                  to="/dashboard"
                  value="Register"
                  onClick={() => {
                    personalityTeststore();
                    testing();
                  }}
                >
                  Finish
                </Link>
              </div>
              <div className="fifteen">
                <Link className="button_login2" to="/test" value="Login">
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
