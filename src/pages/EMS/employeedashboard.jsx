// src/pages/EMS/employeedashboard.jsx
import React from "react";
import "./Sidebar.css"; // Keeping the styling for the sidebar but no sidebar here

const EmployeeDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Main Content Area */}
        <main className="col-md-12 col-lg-10 offset-lg-2 p-5 bg-white"> {/* No sidebar here */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="card-title text-primary">Welcome, Employee</h2>
              <p className="card-text fs-5 mt-3">
                Check your records using the sidebar options.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
