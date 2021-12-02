import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

function DashboardComponent(props) {
  /*
  const fetchAdminJob = async () => {
    try {
      const query = await db
        .collection("userAppliedJobs")
        .where("email", "==", user?.email)
        .get();
      const data = await query.docs[0].data();
      setJobList(data.jobId);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchAdminJob();
  }, [user, loading]);*/

  return (
    <div className="dashboard_component">
      <div className="dashboard_jobbox">
        <h1 className="test_admin_title">Job List</h1>
        <div className="joblist_user">
          <div className="joblist_scroll">
            <li className="jobs">
              <span
                class="hovertext"
                data-hover="Student responsibility of transporting the
                  world's most precious cargo seriously."
              >
                QA Analysis
              </span>

              <div className="serouesly">
                <Link className="button_apply" to="/job" value="Login">
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
