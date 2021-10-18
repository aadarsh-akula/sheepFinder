import NavBar from "./AdminNavBar";

function AdminProfile() {
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
            <h2 className="profile_h3">Profile</h2>
          </div>
          <div className="joblist">
            
            {
              <ol><h3 className="profile_h3">Jobs you administrate</h3>
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

export default AdminProfile;
