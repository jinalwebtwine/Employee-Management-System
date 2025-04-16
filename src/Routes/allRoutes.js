import React from "react";
import { Navigate } from "react-router-dom";

// Common Pages
import Login from "../pages/EMS/login";
import Attendance from "../pages/EMS/attendance";
import Employees from "../pages/EMS/Employees";
import Leave from "../pages/EMS/leave";
import Performance from "../pages/EMS/performance";
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";

// Admin Dashboard
import AdminDashboard from "../pages/EMS/admindashboard";

// Employee Dashboard + Specific Pages
import EmployeeDashboard from "../pages/EMS/employeedashboard";
import EmployeeLeave from "../pages/EMS/EmployeeLeave";
import EmployeePerformance from "../pages/EMS/EmployeePerformance";
import EmployeeProfile from "../pages/EMS/EmployeeProfile";

// ========================= AUTH-PROTECTED ROUTES =========================

const authProtectedRoutes = [
  { path: "/EMS/dashboard", element: <AdminDashboard /> },
  { path: "/EMS/employees", element: <Employees /> },
  { path: "/EMS/attendance", element: <Attendance /> },
  { path: "/EMS/leave", element: <Leave /> },
  { path: "/EMS/performance", element: <Performance /> },

  // Employee routes
  { path: "/EMS/employeedashboard", element: <EmployeeDashboard /> },
  { path: "/EMS/employee/leave", element: <EmployeeLeave /> },
  { path: "/EMS/employee/performance", element: <EmployeePerformance /> },
  { path: "/EMS/employee/profile", element: <EmployeeProfile /> },

  // 404 fallback
  { path: "*", element: <Basic404 /> },
];

// ========================= PUBLIC ROUTES =========================

const publicRoutes = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
