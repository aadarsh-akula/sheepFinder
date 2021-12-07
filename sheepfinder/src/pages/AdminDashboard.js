
import NavBar from "./AdminNavBar";

import "./style.css";
import "./nav.css";
import DashboardComponent from "./DashboardComponent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, doc, arrayUnion, testingAdding } from "../firebase";
import { Link, useHistory, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

function AdminDashboard() {

  const [admin, loading1, error] = useAuthState(auth);
  const [jobName, setJobName] = useState("");
  const [jobdescription, setJobDescription] = useState("");

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

const jobList = [
    { description: jobName, key: 0 },
    
  ];

  const applicants = [
    { description: "Yor Her", key: 0 },
    { description: "Mike Mumm", key: 1 },
    { description: "Adarsh Akula", key: 2 },
    { description: "Derik Beardshear", key: 3 },
    { description: "Bailey LaBerge", key: 4 },
  ];



  return (
    <>
        <NavBar history={history} active="dashboard" />
          <div className="dashboard_component">
              <div className="test_box2">
                  <div className="admin_joblist">

                      {<ol><h3 className="profile_h3">Jobs you administrate</h3>
                          {jobList.map((joblist) => (
                              <li key={joblist.key}>{joblist.description}</li>
                          ))}
                      </ol>}
                      <h4>Job Description:</h4> {jobdescription}
                  </div>
              </div>
              <div className="test_box2">
                      <div className="admin_joblist">
                          <ol>
                              <h3 className="Profile_h3">Current Applicants</h3>
                              {applicants.map((applicants) => (
                                  <li key={applicants.key}>{applicants.description}</li>
                              ))}
                          </ol>
                  </div>
              </div>
          </div>
    </>
  );
}

export default withRouter(AdminDashboard);
