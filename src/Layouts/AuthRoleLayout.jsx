// src/Layouts/AuthRoleLayout.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoleLayout = ({ children, allowedRoles, user }) => {
  if (!user) {
    return <Navigate to="/EMS/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AuthRoleLayout;
