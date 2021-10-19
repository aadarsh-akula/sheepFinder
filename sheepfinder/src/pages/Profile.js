import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Test() {
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
                <div>Yor Her</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Email</div>
                <div>HERY2507@uwec.edu</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Age</div>
                <div>25</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Phone Number</div>
                <div>(715)-828-2627</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button">
                <Link className="button_manage" to="/dashboard" value="Login">
                  Manage
                </Link>
              </div>
              <div className="user_profile_button">
                <Link className="button_manage" to="/dashboard" value="Login">
                  Upload Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="test_box2">
          <div className="profile_title">
            <h1 className="test_admin_title">Jobs Applied</h1>
          </div>
          <div className="joblist_user_profile2">
            {
              <ol>
                {jobList.map((joblist) => (
                  <li key={joblist.key}>{joblist.description}</li>
                ))}
              </ol>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
