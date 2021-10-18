import React from "react";
import NavBar from "./AdminNavBar";
import { withRouter } from "react-router-dom";
import "./style.css";
import "./nav.css";
import DashboardComponent from "./DashboardComponent";

function AdminDashboard({ history }) {
  /* const authenticated = useSelector((state) => state.authenticated);

  useEffect(() => {
    if (!authenticated) {
      history.push("/");
    }
  });
*/
const jobList = [
    { description: "Bus Driver", key: 0 },
    { description: "Weed Seller", key: 1 },
    { description: "Cocaine Dealer", key: 2 },
    { description: "..............................", key: 3 },
    { description: "..............................", key: 4 },
    { description: "..............................", key: 5 },
    { description: "..............................", key: 6 },
    { description: "..............................", key: 7 },
    { description: "..............................", key: 8 },
    { description: "..............................", key: 9 },
    { description: "..............................", key: 10 },
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
