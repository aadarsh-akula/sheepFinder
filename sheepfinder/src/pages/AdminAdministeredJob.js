import NavBar from "./AdminNavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, updatingJob } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
//import {getDocs} from "firebase.firestore.Firestore";

function AdminAdministeredJob() {


  /*
const data = {
  jobName: newTitle, jobDesc: newDesc
}

const res =  db.collection('applicationList').set(data);

*/
const [admin, loading1, error] = useAuthState(auth);
const [jobname, setJobName] = useState("");
const [keywords, setKeyWords] = useState("");
const [jobdescription, setJobDescription] = useState("");
const [Personq1, setPersonQ1] = useState("");
const [Personq2, setPersonQ2] = useState("");
const [Personq3, setPersonQ3] = useState("");
const [Personq4, setPersonQ4] = useState("");
const [Personq5, setPersonQ5] = useState("");
const [Aptq1, setAptQ1] = useState("");
const [Aptq2, setAptQ2] = useState("");
const [Aptq3, setAptQ3] = useState("");
const [Aptq4, setAptQ4] = useState("");
const [Aptq5, setAptQ5] = useState("");
const [Aptq1c1, setAptQ1C1] = useState("");
const [Aptq1c2, setAptQ1C2] = useState("");
const [Aptq1c3, setAptQ1C3] = useState("");
const [Aptq1c4, setAptQ1C4] = useState("");
const [Aptq2c1, setAptQ2C1] = useState("");
const [Aptq2c2, setAptQ2C2] = useState("");
const [Aptq2c3, setAptQ2C3] = useState("");
const [Aptq2c4, setAptQ2C4] = useState("");
const [Aptq3c1, setAptQ3C1] = useState("");
const [Aptq3c2, setAptQ3C2] = useState("");
const [Aptq3c3, setAptQ3C3] = useState("");
const [Aptq3c4, setAptQ3C4] = useState("");
const [Aptq4c1, setAptQ4C1] = useState("");
const [Aptq4c2, setAptQ4C2] = useState("");
const [Aptq4c3, setAptQ4C3] = useState("");
const [Aptq4c4, setAptQ4C4] = useState("");
const [Aptq5c1, setAptQ5C1] = useState("");
const [Aptq5c2, setAptQ5C2] = useState("");
const [Aptq5c3, setAptQ5C3] = useState("");
const [Aptq5c4, setAptQ5C4] = useState("");


const history = useHistory();


const fetchUserName = async () => {
  try {
    const query = await db
      .collection("joblist")
      .where("uid", "==", admin?.uid)
      .get();
    const data = await query.docs[0].data();
    setJobName(data.jobname);
    setJobDescription(data.jobdescription);
    setKeyWords(data.keywords);
    setPersonQ1(data.Personq1);
    setPersonQ2(data.Personq2);
    setPersonQ3(data.Personq3);
    setPersonQ4(data.Personq4);
    setPersonQ5(data.Personq5);
    setAptQ1(data.Aptq1);
    setAptQ2(data.Aptq2);
    setAptQ3(data.Aptq3);
    setAptQ4(data.Aptq4);
    setAptQ5(data.Aptq5);
    setAptQ1C1(data.Aptq1c1);
    setAptQ1C2(data.Aptq1c2);
    setAptQ1C3(data.Aptq1c3);
    setAptQ1C4(data.Aptq1c4);
    setAptQ2C1(data.Aptq2c1);
    setAptQ2C2(data.Aptq2c2);
    setAptQ2C3(data.Aptq2c3);
    setAptQ2C4(data.Aptq2c4);
    setAptQ3C1(data.Aptq3c1);
    setAptQ3C2(data.Aptq3c2);
    setAptQ3C3(data.Aptq3c3);
    setAptQ3C4(data.Aptq3c4);
    setAptQ4C1(data.Aptq4c1);
    setAptQ4C2(data.Aptq4c2);
    setAptQ4C3(data.Aptq4c3);
    setAptQ4C4(data.Aptq4c4);
    setAptQ5C1(data.Aptq5c1);
    setAptQ5C2(data.Aptq5c2);
    setAptQ5C3(data.Aptq5c3);
    setAptQ5C4(data.Aptq5c4);
    const data1 = query.docs[1].data().jobname;
 
    
  

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
            <h2 className="test_admin_title">Profile</h2>
          </div>
          <div className="joblist_admin_profile">
            {
              <ol className="first_ol">
                <h3>Jobs you administrate</h3>
                <li>
                  <Link className="active_job1" to="/busdriver" value="Login">
                    {jobname}
                  </Link>
                </li>
                <li>
                  <Link className="active_job2" to="/weedseller" value="Login">
                    Weed Seller
                  </Link>
                </li>
                <li>Cocaine Dealer</li>
                {/* <div className="adminster_job">
                  Create a new job
                  <input
                    placeholder="Type Job Title"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Paste Job Description"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  />
                  <button onClick={createJob}> Post! </button>
                </div> */}
              </ol>
            }
            {
              <ol className="seccond_ol">
                <h3>Job description</h3>
                <li>
                  {jobdescription}{" "}
                </li>
                <div className="adminster_job_description">
                  <Link className="adminster_job_button" to="/createjob" value="Login">
                  Add
                  </Link>
                  <Link className="adminster_job_button" to="/editjob" value="Login">
                    Edit
                  </Link>
                </div>
              </ol>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAdministeredJob;
