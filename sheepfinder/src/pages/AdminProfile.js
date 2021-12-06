import NavBar from "./AdminNavBar";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "../firebase";

function AdminProfile(props) {
  const [admin, loading1, error1] = useAuthState(auth);
  const [firstname1, setFirstName1] = useState("");
  const [lastname1, setLastName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phonenumber1, setPhoneNumber1] = useState("");
  const [companyname, setCompanyName] = useState("");
  const history = useHistory();

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

  var phonenumber = phonenumber1;

  phonenumber = phonenumber.replace(/\D/g, "");

  console.log(phonenumber.length);
  
  if(phonenumber.length == 11){
  phonenumber =
    phonenumber.slice(0, 1) +
    "-" +
    phonenumber.slice(1, 4) +
    "-" +
    phonenumber.slice(4, 7) +
    "-" +
    phonenumber.slice(7, 11);
}else if(phonenumber.length == 10){
  phonenumber =
    phonenumber.slice(0, 3) +
    "-" +
    phonenumber.slice(3, 6) +
    "-" +
    phonenumber.slice(6, 10);
 
}
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
                <div>{firstname1 + " " + lastname1}</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Email</div>
                <div>{email1}</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Company</div>
                <div>{companyname}</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Primary Contact</div>
                <div>{phonenumber}</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="user_profile_button2">
                <div>
                  <Link
                    className="button_manage1"
                    to="/manageadminprofile"
                    value="Login"
                  >
                    Manage
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

export default AdminProfile;
