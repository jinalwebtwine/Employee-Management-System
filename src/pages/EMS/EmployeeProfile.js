import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeProfile = () => {
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage to log out the user
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h3>My Profile</h3>
      <p><strong>Email:</strong> {email}</p>
      {/* Add more profile fields like name, role, etc. */}
      
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="btn btn-danger mt-3"
        style={{ padding: "0.5rem 1rem", backgroundColor: "#dc3545", borderColor: "#dc3545" }}
      >
        Logout
      </button>
    </div>
  );
};

export default EmployeeProfile;
