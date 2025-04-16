import React, { useState } from "react";
import { FaUserPlus, FaTrashAlt } from "react-icons/fa";
import "./Employees.scss";

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Software Engineer", department: "IT", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", position: "HR Manager", department: "HR", email: "jane.smith@example.com" },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
  });

  const isFormFilled = Object.values(newEmployee).every((val) => val.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
      setNewEmployee({ name: "", position: "", department: "", email: "" });
    }
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="employees-wrapper">
      <div className="employee-card">
        <h2 className="title">Manage Employees</h2>

        <div className="employee-grid">
          {/* Employee List */}
          <div className="employee-list">
            <h5 className="section-title">Employee Records</h5>
            <div className="table-container">
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.position}</td>
                      <td>{emp.department}</td>
                      <td>{emp.email}</td>
                      <td className="text-center">
                        <button className="btn-delete" onClick={() => handleDelete(emp.id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Employee */}
          <div className="employee-form">
            <h5 className="section-title">Add New Employee</h5>
            <form onSubmit={handleSubmit} className="form">
              <input type="text" name="name" placeholder="Full Name" value={newEmployee.name} onChange={handleChange} />
              <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleChange} />
              <input type="text" name="department" placeholder="Department" value={newEmployee.department} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleChange} />
              <button type="submit" className={`btn-submit ${isFormFilled ? "active" : "disabled"}`} disabled={!isFormFilled}>
                <FaUserPlus className="icon" />
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
