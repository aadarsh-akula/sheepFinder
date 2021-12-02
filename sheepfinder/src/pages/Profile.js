import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, app } from "../firebase";

function Test(props) {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  const [user, loading, error] = useAuthState(auth);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [YOB, setYOB] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [jobList, setJobList] = useState("");
  const [jobId, setJobId] = useState("");

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
  /*
  const fetchJob = async () => {
    try {
      const query = await db
        .collection("userAppliedJobs")
        .where("email", "==", user?.email)
        .get();
      const data = await query.docs.map((doc) => {
        console.log(doc.data());
        return doc.data().jobId;

        /*
        setJobList((old) => ({
          jobList: [...old.jobList, doc.data().jobName],
        }));
      });
      
      setJobList(data);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };*/

  const fetchJob = async () => {
    try {
      const query = await db
        .collection("userAppliedJobs")
        .where("email", "==", user?.email)
        .get();
      const data = await query.docs[0].data();
      setJobList(data.jobId);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
    fetchJob();
  }, [user, loading]);

  const currentYear = new Date().getFullYear();

  const userYOB = YOB;

  const correctYear = currentYear - userYOB;

  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref("Resumes");
    const fileRef = storageRef.child(file.name);
    console.log(fileRef);
    fileRef.put(file);
  };
  var phoneNumber = phonenumber;

  phoneNumber = phonenumber.replace(/\D/g, "");

  phoneNumber =
    phoneNumber.slice(0, 3) +
    "-" +
    phoneNumber.slice(3, 6) +
    "-" +
    phoneNumber.slice(6, 15);

  var i = 0;
  var counter = 0;

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
                  {firstname + " "}
                  {lastname}
                </div>
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
                <div>{correctYear}</div>
              </div>
              <div className="example_account2">
                ___________________________________________________________________________
              </div>
              <div className="example_account">
                <div>Phone Number</div>
                <div>{phoneNumber}</div>
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
                <input
                  className="button_upload"
                  type="file"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="test_box2">
          <div className="profile_title">
            <h1 className="test_admin_title">Jobs Applied</h1>
          </div>

          <div className="joblist_user_profile2">{jobList}</div>
        </div>
      </div>
    </>
  );
}

export default Test;
