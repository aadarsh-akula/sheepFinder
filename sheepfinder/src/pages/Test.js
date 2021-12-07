import NavBar from "./NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, doc, arrayUnion, testingAdding } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Profile() {
  const [admin, loading1, error] = useAuthState(auth);
  const [jobName, setJobName] = useState("");
  const [jobName1, setJobName1] = useState("");
  const [jobName2, setJobName2] = useState("");
  const [keywords, setKeyWords] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [Personq1, setPersonQ1] = useState("");
  const [Personq2, setPersonQ2] = useState("");
  const [Personq3, setPersonQ3] = useState("");
  const [Personq4, setPersonQ4] = useState("");
  const [Personq5, setPersonQ5] = useState("");
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

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("providerId", "==", admin?.providerId)
        .get();
      const data = await query.docs[0].data();
      setJobName(data.jobname);
      setJobDescription(data.jobdescription);

      console.log();
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading1) return;
    if (!admin) return history.replace("/");
    fetchUserName();
  }, [admin, loading1]);

  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div className="dashboard_jobbox">
          <h1 className="test_admin_title">Test</h1>
          <div className="joblist_user">
            <div>
              <ol>
                <li>{jobName} - Personality Test</li>
                <li>{jobName} - Aptitude Test</li>
              </ol>
            </div>

            <div>
              <ol className="apply_button_ol">
                <li>
                  <Link
                    className="button_apply"
                    to="/personalitytest"
                    value="Login"
                  >
                    Start
                  </Link>
                </li>
                <li>
                  <Link
                    className="button_apply"
                    to="/atributetest"
                    value="Login"
                  >
                    Start
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
/*
<div className="dashboard_component">
        <div>
          <h2 className="test_text">Test</h2>
          <div className="job_test">
            <h4>Cociane Dealer - Personality Test</h4>
            <div className="example">
            <Link className="button_login2" to="/dashboard" value="Login">
            Start
          </Link>
            </div>
            <h4>Cociane Dealer - Aptitude Test</h4>
            <div className="example">
            <Link className="button_login2" to="/dashboard" value="Login">
            Start
          </Link>
            </div>
          </div>
        </div>
      </div> */
export default Profile;
