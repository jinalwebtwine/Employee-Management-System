// src/Layouts/EmployeeSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const EmployeeSidebar = () => {
  return (
    <div className="sidebar-custom">
      
      <ul className="list-group list-group-flush">
        <li className="list-group-item-custom">
          <Link to="/EMS/employeedashboard" className="nav-link-custom">
            Dashboard
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/employee/leave" className="nav-link-custom">
            Leave
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/employee/performance" className="nav-link-custom">
            Performance
          </Link>
        </li>
        <li className="list-group-item-custom">
          <Link to="/EMS/employee/profile" className="nav-link-custom">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EmployeeSidebar;
