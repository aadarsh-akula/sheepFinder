import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import React from "react";

function Test(props) {
  const jobList = [{ description: "Bus Driver", key: 0 }];

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

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
                <div>(715)-828-****</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button">
                <Link
                  className="button_manage"
                  to="/manageuserprofile"
                  value="Login"
                >
                  Manage
                </Link>
              </div>
              <div className="user_profile_button1">
                <Link
                  className="button_manage"
                  to="/profile"
                  value="Login"
                  onClick={handleClick}
                >
                  Upload Resume
                </Link>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
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
