import NavBar from "./AdminNavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { changeAdminProfileParts } from "../firebase";

function EditAdminProfile() {
  const [admin, loading1, error1] = useAuthState(auth);
  const [firstname1, setFirstName1] = useState("");
  const [lastname1, setLastName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phonenumber1, setPhoneNumber1] = useState("");
  const [companyname, setCompanyName] = useState("");
  const history = useHistory();
  const updateAdminProfile = () => {
    if (!firstname1) alert("Please enter your first name");
    if (!lastname1) alert("Please enter your last name");
    if (!email1) alert("Please enter your first name");
    if (!companyname) alert("Please enter your last name");
    if (!phonenumber1) alert("Please enter your last name");

    changeAdminProfileParts(
      firstname1,
      lastname1,
      email1,
      companyname,
      phonenumber1
    );
  };
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("admins")
        .where("uid", "==", admin?.uid)
        .get();
      const data = await query.docs[0].data();
      setFirstName1(data.firstname1);
      setLastName1(data.lastname1);
      setEmail1(data.email1);
      setPhoneNumber1(data.phonenumber1);
      setCompanyName(data.companyname);
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

  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div className="test_box2">
          <div className="profile_title">
            <h1 className="test_admin_title">Admin's Account</h1>
          </div>
          <div className="joblist_user_profile1">
            <div>
              {" "}
              <div className="example_account">
                <div className="asterik">First Name</div>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={firstname1}
                    onChange={(e) => setFirstName1(e.target.value)}
                    value={firstname1}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div className="asterik">Last Name</div>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={lastname1}
                    onChange={(e) => setLastName1(e.target.value)}
                    value={lastname1}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div className="asterik">Email</div>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    value={email1}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div className="asterik">Company</div>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={companyname}
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyname}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div className="asterik">Phone Number</div>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={phonenumber1}
                    onChange={(e) => setPhoneNumber1(e.target.value)}
                    value={phonenumber1}
                  />
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button">
                <div>
                  <Link
                    className="button_manage"
                    to="/adminprofile"
                    value="Change"
                    onClick={updateAdminProfile}
                  >
                    Change
                  </Link>
                </div>
                <div>
                  <Link
                    className="button_manage1"
                    to="/adminprofile"
                    value="Login"
                  >
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

export default EditAdminProfile;
