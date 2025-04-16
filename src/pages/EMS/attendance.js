import React, { useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaLaptop,
} from "react-icons/fa";
import { Card, Form, Button, Table, Badge, Row, Col } from "react-bootstrap";

const Attendance = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    name: "",
    date: "",
    checkIn: "",
    checkOut: "",
    status: "Present",
  });

  const handleChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecord.name && newRecord.date && newRecord.checkIn && newRecord.checkOut) {
      setRecords([...records, { id: records.length + 1, ...newRecord }]);
      setNewRecord({
        name: "",
        date: "",
        checkIn: "",
        checkOut: "",
        status: "Present",
      });
    }
  };

  const getStatusBadge = (status) => {
    if (status === "Present") return <Badge bg="success" className="d-flex align-items-center gap-1"><FaCheckCircle /> Present</Badge>;
    if (status === "Absent") return <Badge bg="danger" className="d-flex align-items-center gap-1"><FaTimesCircle /> Absent</Badge>;
    return <Badge bg="secondary" className="d-flex align-items-center gap-1"><FaLaptop /> Remote</Badge>;
  };

  return (
    <div className="container py-4">
      {/* Attendance Form Card */}
      <Card className="mb-4 shadow-sm border-0 rounded">
        <Card.Body>
          <Card.Title className="mb-3 text-primary">Mark Attendance</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Group controlId="formName">
                  <Form.Label><FaUser className="me-1" /> Employee Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={newRecord.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formDate">
                  <Form.Label><FaCalendarAlt className="me-1" /> Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={newRecord.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCheckIn">
                  <Form.Label><FaClock className="me-1" /> Check-In</Form.Label>
                  <Form.Control
                    type="time"
                    name="checkIn"
                    value={newRecord.checkIn}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCheckOut">
                  <Form.Label><FaClock className="me-1" /> Check-Out</Form.Label>
                  <Form.Control
                    type="time"
                    name="checkOut"
                    value={newRecord.checkOut}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={newRecord.status}
                    onChange={handleChange}
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Remote">Remote</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4} className="d-flex align-items-end">
                <Button type="submit" variant="primary" className="w-100 rounded-3">
                  Mark Attendance
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Attendance List Card */}
      <Card className="shadow-sm border-0 rounded">
        <Card.Body>
          <Card.Title className="mb-3 text-primary">Attendance List</Card.Title>
          <div className="table-responsive">
            <Table bordered hover className="table-striped">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center text-muted fst-italic">
                      No attendance records available
                    </td>
                  </tr>
                ) : (
                  records.map((record) => (
                    <tr key={record.id}>
                      <td>{record.name}</td>
                      <td>{record.date}</td>
                      <td>{record.checkIn}</td>
                      <td>{record.checkOut}</td>
                      <td>{getStatusBadge(record.status)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Attendance;
