import NavBar from "./AdminNavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, updatingJob } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function EditJob() {
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
  const editJob = () => {
    if (!jobname) alert("Please enter your job name");
    if (!jobdescription) alert("Please enter your job decription");
    if(!keywords) alert("Please enter keywords");
    if (!Personq1) alert("Please enter your first name");
    if (!Personq2) alert("Please enter your last name");
    if (!Personq3) alert("Please enter your first name");
    if (!Personq4) alert("Please enter your last name");
    if (!Personq5) alert("Please enter your last name");
    if (!Aptq1) alert("Please enter your last name");
    if (!Aptq2) alert("Please enter your last name");
    if (!Aptq3) alert("Please enter your last name");
    if (!Aptq4) alert("Please enter your last name");
    if (!Aptq5) alert("Please enter your last name");
    if (!Aptq1c1) alert("Please enter your last name");
    if (!Aptq1c2) alert("Please enter your last name");
    if (!Aptq1c3) alert("Please enter your last name");
    if (!Aptq1c4) alert("Please enter your last name");
    if (!Aptq2c1) alert("Please enter your last name");
    if (!Aptq2c2) alert("Please enter your last name");
    if (!Aptq2c3) alert("Please enter your last name");
    if (!Aptq2c4) alert("Please enter your last name");
    if (!Aptq3c1) alert("Please enter your last name");
    if (!Aptq3c2) alert("Please enter your last name");
    if (!Aptq3c3) alert("Please enter your last name");
    if (!Aptq3c4) alert("Please enter your last name");
    if (!Aptq4c1) alert("Please enter your last name");
    if (!Aptq4c2) alert("Please enter your last name");
    if (!Aptq4c3) alert("Please enter your last name");
    if (!Aptq4c4) alert("Please enter your last name");
    if (!Aptq5c1) alert("Please enter your last name");
    if (!Aptq5c2) alert("Please enter your last name");
    if (!Aptq5c3) alert("Please enter your last name");
    if (!Aptq5c4) alert("Please enter your last name");


    updatingJob(
      jobname,
      jobdescription,
      keywords,
      Personq1,
      Personq2,
      Personq3,
      Personq4,
      Personq5,
      Aptq1,
      Aptq2,
      Aptq3,
      Aptq4,
      Aptq5,
      Aptq1c1,
      Aptq1c2,
      Aptq1c3,
      Aptq1c4,
      Aptq2c1,
      Aptq2c2,
      Aptq2c3,
      Aptq2c4,
      Aptq3c1,
      Aptq3c2,
      Aptq3c3,
      Aptq3c4,
      Aptq4c1,
      Aptq4c2,
      Aptq4c3,
      Aptq4c4,
      Aptq5c1,
      Aptq5c2,
      Aptq5c3,
      Aptq5c4
    );
  };
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
        <form >
      <div className="sheep-body2">
        <h1 className="welcome-text">Edit Job</h1>
        <div className="create_job">
        <div className="addjob_background">
            
            <div className="one">
              <p className="asterik">Job Name</p>
              <input
                value={jobname}
                type="name"
                name="name"
                id="name"
                placeholder="job name"
                onChange={(e) => setJobName(e.target.value)}
              />
            </div>

            <div className="two">
              <p className="asterik">Job Description</p>
              <input
                value={jobdescription}
                type="name"
                name="name"
                id="name"
                placeholder="Job Description"
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div className="three">
              <p className="asterik">Key Words</p>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(e) => setKeyWords(e.target.value)}
                value={keywords}
                placeholder="Key Words"
              />
            
            </div>
            <div className="four">
              <p className="asterik">Personality Question 1</p>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(e) => setPersonQ1(e.target.value)}
                value={Personq1}
                placeholder="Question 1"
              />
            </div>
            <div className="five">
              <p className="asterik">Personality Question 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 2"
                onChange={(e) => setPersonQ2(e.target.value)}
                value={Personq2}
              />
            </div>
            <div className="six">
              <p className="asterik">Personality Question 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 3"
                onChange={(e) => setPersonQ3(e.target.value)}
                value={Personq3}
              />
            </div>
            <div className="seven">
              <p className="asterik">Personality Question 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 4"
                onChange={(e) => setPersonQ4(e.target.value)}
                value={Personq4}
              />
            </div>
            <div className="eight">
              <p className="asterik">Personality Question 5</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 5"
                onChange={(e) => setPersonQ5(e.target.value)}
                value={Personq5}
              />
            </div>
            <div className="nine">
            <div>
              <p className="asterik">Aptitude Question 1</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 1"
                onChange={(e) => setAptQ1(e.target.value)}
                value={Aptq1}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 1 Choice 1</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 1"
                onChange={(e) => setAptQ1C1(e.target.value)}
                value={Aptq1c1}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 1 Choice 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 2"
                onChange={(e) => setAptQ1C2(e.target.value)}
                value={Aptq1c2}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 1 Choice 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 3"
                onChange={(e) => setAptQ1C3(e.target.value)}
                value={Aptq1c3}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 1 Choice 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 4"
                onChange={(e) => setAptQ1C4(e.target.value)}
                value={Aptq1c4}
              />
            </div>
            </div>
            <div className="ten">
            <div>
              <p className="asterik">Aptitude Question 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 2"
                onChange={(e) => setAptQ2(e.target.value)}
                value={Aptq2}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 2 Choice 1</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 1"
                onChange={(e) => setAptQ2C1(e.target.value)}
                value={Aptq2c1}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 2 Choice 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 2"
                onChange={(e) => setAptQ2C2(e.target.value)}
                value={Aptq2c2}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 2 Choice 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 3"
                onChange={(e) => setAptQ2C3(e.target.value)}
                value={Aptq2c3}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 2 Choice 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 4"
                onChange={(e) => setAptQ2C4(e.target.value)}
                value={Aptq2c4}
              />
            </div>
            </div>
            <div className="eleven">
            <div>
              <p className="asterik">Aptitude Question 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 3"
                onChange={(e) => setAptQ3(e.target.value)}
                value={Aptq3}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 3 Choice 1</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 1"
                onChange={(e) => setAptQ3C1(e.target.value)}
                value={Aptq3c1}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 3 Choice 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 2"
                onChange={(e) => setAptQ3C2(e.target.value)}
                value={Aptq3c2}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 3 Choice 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 3"
                onChange={(e) => setAptQ3C3(e.target.value)}
                value={Aptq3c3}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 3 Choice 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 4"
                onChange={(e) => setAptQ3C4(e.target.value)}
                value={Aptq3c4}
              />
            </div>
            </div>
            <div className="twelve">
            <div>
              <p className="asterik">Aptitude Question 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 4"
                onChange={(e) => setAptQ4(e.target.value)}
                value={Aptq4}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 4 Choice 1</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 1"
                onChange={(e) => setAptQ4C1(e.target.value)}
                value={Aptq4c1}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 4 Choice 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 2"
                onChange={(e) => setAptQ4C2(e.target.value)}
                value={Aptq4c2}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 4 Choice 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 3"
                onChange={(e) => setAptQ4C3(e.target.value)}
                value={Aptq4c3}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 4 Choice 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 4"
                onChange={(e) => setAptQ4C4(e.target.value)}
                value={Aptq4c3}
              />
            </div>
            </div>
            <div className="thirteen">
            <div>
              <p className="asterik">Aptitude Question 5</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Question 5"
                onChange={(e) => setAptQ5(e.target.value)}
                value={Aptq5}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 5 Choice 1</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 1"
                onChange={(e) => setAptQ5C1(e.target.value)}
                value={Aptq5c1}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 5 Choice 2</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 2"
                onChange={(e) => setAptQ5C2(e.target.value)}
                value={Aptq5c2}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 5 Choice 3</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 3"
                onChange={(e) => setAptQ5C3(e.target.value)}
                value={Aptq5c3}
              />
            </div>
            <div>
              <p className="asterik">Aptitude Question 2 Choice 4</p>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Choice 4"
                onChange={(e) => setAptQ5C4(e.target.value)}
                value={Aptq5c4}
              />
            </div>
            </div>
            <div className="fourteen">
              <Link
                className="button_login1"
                to="/adminadministeredjob"
                value="Register"
                onClick={EditJob}
              >
                Update Job
              </Link>
              </div>
              <div className="fifteen">
              <Link className="button_login2" to="/adminadministeredjob" value="Login">
                Return
              </Link>
              </div>
            </div>
          </div>
        
      </div>
    </form>
        </>
  );
}

export default EditJob;