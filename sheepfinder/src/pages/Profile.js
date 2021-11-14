import NavBar from "./NavBar";
import { Link, useHistory} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db} from "../firebase";

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


  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);
  
  

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
                <div>{name}</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">  
              <div>Email</div>
                <div>{email}</div>
              
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
