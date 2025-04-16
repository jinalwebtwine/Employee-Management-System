import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";
import { useProfile } from "../Components/Hooks/UserHooks";
import { logoutUser } from "../slices/auth/login/thunk";

const AuthProtected = ({ children }) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  const location = useLocation();

  // Determine user role from userProfile or from localStorage (fallback)
  const role = userProfile?.role || localStorage.getItem("userRole");

  useEffect(() => {
    if (userProfile && token) {
      setAuthorization(token);
      if (userProfile.role) {
        localStorage.setItem("userRole", userProfile.role);
      }
    } else if (!userProfile && !loading && !token) {
      dispatch(logoutUser());
    }
  }, [token, userProfile, loading, dispatch]);

  // If no token and not loading, redirect to login
  if (!token && !loading) {
    return <Navigate to="/login" replace />;
  }

  // If role is invalid, redirect to login
  if (!["admin", "employee"].includes(role)) {
    return <Navigate to="/login" replace />;
  }

  // Define arrays of paths for admin and employee routes.
  // (Adjust this list if you add more routes later.)
  const adminPaths = [
    "/EMS/dashboard",
    "/EMS/employees",
    "/EMS/attendance",
    "/EMS/leave",
    "/EMS/performance",
  ];
  const employeePaths = [
    "/EMS/employeedashboard",
    "/EMS/employee/leave",
    "/EMS/employee/performance",
    "/EMS/employee/profile",
  ];

  // Get the current path
  const currentPath = location.pathname;

  // For an employee, if they try to access an admin route, redirect them.
  if (role === "employee" && adminPaths.includes(currentPath)) {
    return <Navigate to="/EMS/employeedashboard" replace />;
  }

  // Optionally, for an admin, if they try to access an employee route, redirect them.
  if (role === "admin" && employeePaths.includes(currentPath)) {
    return <Navigate to="/EMS/dashboard" replace />;
  }

  return <>{children}</>;
};

export { AuthProtected };
