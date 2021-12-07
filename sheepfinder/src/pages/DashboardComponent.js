import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, doc, arrayUnion, testingAdding } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function DashboardComponent() {
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

  const fetchjobname1 = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("providerId", "==", admin?.providerId)
        .get();
      const data = await query.docs[1].data();
      setJobName1(data.jobname);

      console.log();
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const fetchjobname2 = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("providerId", "==", admin?.providerId)
        .get();
      const data = await query.docs[2].data();
      setJobName2(data.jobname);

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
    fetchjobname1();
    fetchjobname2();
  }, [admin, loading1]);

  const testing = () => {
    doc.update({
      jobName: arrayUnion(jobName),
    });
    testingAdding(jobName);
  };

  return (
    <div className="dashboard_component">
      <div className="dashboard_jobbox">
        <h1 className="test_admin_title">Job List</h1>
        <div className="joblist_user">
          <div>
            <li className="jobs">
              <span
                class="hovertext"
                data-hover="Student responsibility of transporting the
                  world's most precious cargo seriously."
              >
                {jobName}
              </span>

              <div className="serouesly">
                <Link className="button_apply" to="/job" value="Login">
                  Apply
                </Link>
              </div>
            </li>
            <li className="jobs">
              <span
                class="hovertext"
                data-hover="Student responsibility of transporting the
                  world's most precious cargo seriously."
              >
                {jobName1}
              </span>

              <div className="serouesly">
                <Link className="button_apply" to="/job1" value="Login">
                  Apply
                </Link>
              </div>
            </li>
            <li className="jobs">
              <span
                class="hovertext"
                data-hover="Student responsibility of transporting the
                  world's most precious cargo seriously."
              >
                {jobName2}
              </span>

              <div className="serouesly">
                <Link className="button_apply" to="/job2" value="Login">
                  Apply
                </Link>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
