import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db  } from "../firebase";

function DashboardComponent(props) {
  
  /*const [job, loading, error] = useAuthState(auth);
  const [jobName, setJobName] = useState("");

  const fetchJobName = async () => {

    try {

      const query = await db.collection("joblist").get();
      const data = await query.docs[0].data();
      setJobName(data.jobnName);

    } catch (err) {

      console.error(err);
      alert("error");

    }

  };

  useEffect(() => {
    if (loading) return;
    fetchJobName();
  }, [job, loading]);*/

  
  return (
    <div className="dashboard_component">
      <div className="dashboard_jobbox">
        <h1 className="test_admin_title">Job List</h1>
        <div className="joblist_user">
          <div className="joblist_scroll">
            <ol>
              <li className="test_li">
                job
                <div>
                  <Link className="button_apply" to="/job" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                2. QA Analysis
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                3. Coordinator
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                4. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                5. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                6. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                7. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                8. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                9. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                10. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                11. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
