// src/Layouts/AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar-custom">
      <h5 className="mb-4 fw-bold text-white">Admin Panel</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item-custom">
          <Link to="/EMS/dashboard" className="nav-link-custom">
            Dashboard
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/employees" className="nav-link-custom">
            Manage Employees
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/attendance" className="nav-link-custom">
            Attendance
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/leave" className="nav-link-custom">
            Leave Requests
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/performance" className="nav-link-custom">
            Performance
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
