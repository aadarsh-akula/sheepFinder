import NavBar from "./NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ManageUserProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [YOB, setYOB] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const history = useHistory();

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
                <div>Name</div>
                <div>
                  {firstname + " " + lastname}
             
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Email</div>
                <div>
                  {email}
              
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Age</div>
                <div>
                  {correctYear}
              
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Phone Number</div>
                <div>
                  {phonenumber}
               
                </div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button">
             
                <div className="edit_return">
                  <div><Link className="button_edit" to="/editprofile" value="Login">
                    Edit
                  </Link>
                    </div>
                    <div className="bigD">
                  <Link className="button_manage" to="/profile" value="Login">
                    Return
                  </Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageUserProfile;
