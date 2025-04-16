// src/pages/EMS/admindashboard.jsx
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Layouts/AdminSidebar"; // ✅ External sidebar
import "./Sidebar.css";

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState("");
  const [totalEmployees, setTotalEmployees] = useState(30);
  const [onlineEmployees, setOnlineEmployees] = useState(12);
  const [pendingLeaves, setPendingLeaves] = useState(5);
  const [departments, setDepartments] = useState(4);

  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    setAdminName(storedName || "Admin");
  }, []);

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* ✅ Sidebar only from the component now */}
        

        <main className="col-md-9 col-lg-10 p-5 bg-white">
          <div className="card shadow-sm border-0 mb-4 bg-primary text-white">
            <div className="card-body">
              <h2 className="card-title">Welcome to Admin Dashboard</h2>
              <p className="fs-5 mt-2">
                Hello, <strong>{adminName}</strong> 👋 – Manage everything from here.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-info shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Total Employees</h5>
                  <h3>{totalEmployees}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-success shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Online Employees</h5>
                  <h3>{onlineEmployees}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-warning shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Pending Leaves</h5>
                  <h3>{pendingLeaves}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-secondary shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Departments</h5>
                  <h3>{departments}</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
