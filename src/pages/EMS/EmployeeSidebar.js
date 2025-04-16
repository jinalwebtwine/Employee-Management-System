import React from "react";
import { Link } from "react-router-dom";
import "../scss/custom/_sidebar.scss"; // Velzon-style import

const EmployeeSidebar = () => {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/employee/dashboard" className="waves-effect">
              <i className="ri-dashboard-line"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/employee/leave" className="waves-effect">
              <i className="ri-calendar-check-line"></i>
              <span>Leave Request</span>
            </Link>
          </li>
          <li>
            <Link to="/employee/performance" className="waves-effect">
              <i className="ri-bar-chart-line"></i>
              <span>Performance</span>
            </Link>
          </li>
          <li>
            <Link to="/employee/profile" className="waves-effect">
              <i className="ri-user-3-line"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
