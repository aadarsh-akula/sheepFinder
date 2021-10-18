import NavBar from "./NavBar";

function Test() {
  const jobList = [
    { description: "Bus Driver", key: 0 },
    { description: "Weed Seller", key: 1 },
    { description: "Cocaine Dealer", key: 2 },
    { description: "..............................", key: 3 },
    { description: "..............................", key: 4 },
    { description: "..............................", key: 5 },
    { description: "..............................", key: 6 },
    { description: "..............................", key: 7 },
    { description: "..............................", key: 8 },
    { description: "..............................", key: 9 },
    { description: "..............................", key: 10 },
  ];
  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div className="test_box2">
          <div className="profile_title">
          <h1 className="title">Profile</h1>
          </div>
          <div className="joblist_user_profile">
            {
              <ol><h2>Jobs Applied</h2>
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
