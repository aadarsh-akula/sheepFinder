import NavBar from "./NavBar";

function Profile() {
  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div>
          <h2 className="test_text">Test</h2>
          <div className="joblist">
            <h4>Cociane Dealer - Personality Test</h4>
            <div className="example">
              <button>start</button>
            </div>
            <h4>Cociane Dealer - Aptitude Test</h4>
            <div className="example">
              <button>start</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
