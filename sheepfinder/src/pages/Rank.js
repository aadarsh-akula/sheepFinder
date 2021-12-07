import NavBar from "./AdminNavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Rank() {
  const [admin, loading, error] = useAuthState(auth);
  const [rank1, setRank1] = useState("");
  const [rank2, setRank2] = useState("");
  const [rank3, setRank3] = useState("");
  const [rank4, setRank4] = useState("");
  const [rank5, setRank5] = useState("");
  const [rank6, setRank6] = useState("");
  const [rank7, setRank7] = useState("");
  const [rank8, setRank8] = useState("");
  const [rank9, setRank9] = useState("");
  const [rank10, setRank10] = useState("");
  


  const history = useHistory();


  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", admin?.uid)
        .get();
      const data = await query.docs[0].data();
      setRank1(data.rank1);
      setRank2(data.rank2);
      setRank3(data.rank3);
      setRank4(data.rank4);
      setRank5(data.rank5);
      setRank6(data.rank6);
      setRank7(data.rank7);
      setRank8(data.rank8);
      setRank9(data.rank9);
      setRank10(data.rank10);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!admin) return history.replace("/");
    fetchUserName();
  }, [admin, loading]);
  return (
      <>
        <NavBar />
        <form >
      <div className="sheep-body2">
        <h1 className="welcome-text">Ranks</h1>
        <div className="create_job">
        <div className="addjob_background">
            
            <div className="one">
              <p className="asterik">1. {rank1}</p>
              <p className="asterik">2. {rank2}</p>
              <p className="asterik">3. {rank3}</p>
              <p className="asterik">4. {rank4}</p>
              <p className="asterik">5. {rank5}</p>
              <p className="asterik">6. {rank6}</p>
              <p className="asterik">7. {rank7}</p>
              <p className="asterik">8. {rank8}</p>
              <p className="asterik">9. {rank9}</p>
              <p className="asterik">10. {rank10}</p>
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

export default Rank;