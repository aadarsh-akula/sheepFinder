function DashboardComponent(props) {
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
    <div className="dashboard_component">
      <div>
        <h2>Job List</h2>
        <div className="joblist">
    
          {
            <ol>
              {jobList.map((joblist) => (
                <li key={joblist.key}>{joblist.description}</li>
              ))}
            </ol>
          }
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
