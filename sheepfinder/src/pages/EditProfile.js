import NavBar from "./NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { changeProfileParts } from "../firebase";

function EditProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [YOB, setYOB] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [oldemail, setOldemail] = useState("");
  const history = useHistory();
  const updateProfile = () => {
    if (!firstname) alert("Please enter your first name");
    if (!lastname) alert("Please enter your last name");
    if (!email) alert("Please enter your first name");
    if (!phonenumber) alert("Please enter your last name");

    changeProfileParts(firstname, lastname, email, YOB, phonenumber, oldemail);
  };
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setEmail(data.email);
      setYOB(data.YOB);
      setPhoneNumber(data.phonenumber);
      setOldemail(data.oldemail);
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

  const currentYear = new Date().getFullYear();

  const userYOB = YOB;

  const correctYear = currentYear - userYOB;

  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div className="test_box2">
          <div className="profile_title">
            <h1 className="test_admin_title">User's Account</h1>
          </div>
          <div className="joblist_user_profile1">
            <div>
              {" "}
              <div className="example_account">
                <div>Last Name</div>
                <div>
                  <p className="asterik">First Name</p>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstname}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Last Name</div>
                <div>
                  <p className="asterik">Last Name</p>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Email</div>
                <div>
                  <p className="asterik">Email</p>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Age</div>
                <div>
                  <p className="asterik">Age</p>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={correctYear}
                    onChange={(e) => setYOB(e.target.value)}
                    value={YOB}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Phone Number</div>
                <div>
                  <p className="asterik">Phone Number</p>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phonenumber}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button">
                <div>
                <Link
                  className="button_login9"
                  to="/profile"
                  value="Change"
                  onClick={updateProfile}
                >
                  Change
                </Link></div> 
                <div>
                <Link className="button_manage" to="/profile" value="Login">
                  Return
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
