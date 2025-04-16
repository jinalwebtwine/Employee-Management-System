import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("employee"); // Default to employee login

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo
    const credentials = {
      "admin@example.com": { password: "admin123", role: "admin" },
      "employee@example.com": { password: "employee123", role: "employee" },
    };

    if (credentials[email] && credentials[email].password === password) {
      const userRole = credentials[email].role;

      // Save role & email to localStorage
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("userEmail", email);

      // Optional: update state
      if (setUser) setUser({ role: userRole });

      // Navigate to role-specific dashboard
      if (userRole === "admin") {
        navigate("/EMS/admindashboard");
      } else if (userRole === "employee") {
        navigate("/EMS/employeedashboard");
      }
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <div className="overlay"></div>
      <div className="login-box" style={styles.loginBox}>
        <h2 style={styles.header}>Welcome to Employee Management System (EMS)</h2>
        <p style={styles.roleText}>{role === "admin" ? "Admin Login" : "Employee Login"}</p>

        {error && <p className="error" style={styles.errorText}>{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            style={styles.submitButton}
          >
            Login
          </button>
        </form>

        <button
          onClick={() => setRole(role === "admin" ? "employee" : "admin")}
          style={styles.switchButton}
        >
          {role === "admin" ? "Switch to Employee Login" : "Switch to Admin Login"}
        </button>

        {role === "admin" && (
          <button
            onClick={() => navigate("/EMS/createuser")}
            style={styles.createUserButton}
          >
            Create New User
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(src/images/galaxy/img-1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to enhance text visibility
    zIndex: -1, // Ensures the overlay stays behind the content
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  },
  header: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
  },
  roleText: {
    fontSize: '1rem',
    color: '#888',
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    margin: '0.8rem 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border 0.3s',
  },
  submitButton: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  },
  switchButton: {
    marginTop: '1rem',
    padding: '0.8rem',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
  createUserButton: {
    marginTop: '1rem',
    padding: '0.8rem',
    backgroundColor: '#FFC107',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
  errorText: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
};

export default Login;
