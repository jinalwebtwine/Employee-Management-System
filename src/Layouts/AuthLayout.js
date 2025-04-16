// src/Layouts/AuthLayout.js
import React from "react";
import AdminSidebar from "./AdminSidebar";
import EmployeeSidebar from "./EmployeeSidebar";

const AuthLayout = ({ children }) => {
  const role = localStorage.getItem("userRole"); // "admin" or "employee"

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar (Left Panel) */}
        <aside className="col-md-3 col-lg-2 p-0">
          {role === "admin" ? <AdminSidebar /> : <EmployeeSidebar />}
        </aside>

        {/* Main Content Area */}
        <main className="col-md-9 col-lg-10 p-4 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
