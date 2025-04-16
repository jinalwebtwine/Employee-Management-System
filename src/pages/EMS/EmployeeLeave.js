import React from "react";
import { Button, Form, Input, Label } from "reactstrap";

const EmployeeLeave = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Request Leave</h3>
      <Form>
        <div className="mb-3">
          <Label for="fromDate">From</Label>
          <Input type="date" id="fromDate" required />
        </div>
        <div className="mb-3">
          <Label for="toDate">To</Label>
          <Input type="date" id="toDate" required />
        </div>
        <div className="mb-3">
          <Label for="reason">Reason</Label>
          <Input type="textarea" id="reason" required />
        </div>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default EmployeeLeave;
