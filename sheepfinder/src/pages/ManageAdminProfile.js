import NavBar from "./AdminNavBar";
import { Link } from "react-router-dom";

function ManageAdminProfile() {
  const jobList = [{ description: "Bus Driver", key: 0 }];
  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div className="test_box2">
          <div className="profile_title">
            <h1 className="test_admin_title">Account</h1>
          </div>
          <div className="joblist_user_profile1">
            <div>
              {" "}
              <div className="example_account">
                <div>Name</div>
                <div>
                  Admin{" "}
                  <Link className="button_edit" to="/dashboard" value="Login">
                    Edit
                  </Link>
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Email</div>
                <div>
                  Admin@uwec.edu{" "}
                  <Link className="button_edit" to="/dashboard" value="Login">
                    Edit
                  </Link>
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Company</div>
                <div>
                  Weed Dango{" "}
                  <Link className="button_edit" to="/dashboard" value="Login">
                    Edit
                  </Link>
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Primary Contact</div>
                <div>
                  (715)-828-****{" "}
                  <Link className="button_edit" to="/dashboard" value="Login">
                    Edit
                  </Link>
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button">
                <Link
                  className="button_manage"
                  to="/AdminProfile"
                  value="Login"
                >
                  Return
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageAdminProfile;
