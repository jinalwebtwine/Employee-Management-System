import React, { useState } from "react";
import styled from "styled-components";

const Leave = () => {
  const [leaveRecords, setLeaveRecords] = useState([
    { id: 1, name: "John Doe", date: "2025-02-15", type: "Sick Leave", status: "Pending" },
    { id: 2, name: "Jane Smith", date: "2025-02-20", type: "Casual Leave", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setLeaveRecords(leaveRecords.map((leave) =>
      leave.id === id ? { ...leave, status: "Approved" } : leave
    ));
  };

  const handleReject = (id) => {
    setLeaveRecords(leaveRecords.map((leave) =>
      leave.id === id ? { ...leave, status: "Rejected" } : leave
    ));
  };

  return (
    <LeaveWrapper>
      <Card>
        <Title>Leave Requests - Admin Panel</Title>
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRecords.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{leave.name}</td>
                  <td>{leave.date}</td>
                  <td>{leave.type}</td>
                  <td className={`status ${leave.status.toLowerCase()}`}>{leave.status}</td>
                  <td>
                    {leave.status === "Pending" && (
                      <>
                        <ButtonSuccess onClick={() => handleApprove(leave.id)}>
                          Approve
                        </ButtonSuccess>
                        <ButtonDanger onClick={() => handleReject(leave.id)}>
                          Reject
                        </ButtonDanger>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      </Card>
    </LeaveWrapper>
  );
};

export default Leave;

// Styled Components

const LeaveWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px;
    text-align: left;
    font-size: 14px;
  }

  th {
    background-color: #f1f3f5;
    color: #495057;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  .status {
    font-weight: 500;
    &.approved { color: #28a745; }
    &.rejected { color: #dc3545; }
    &.pending { color: #ffc107; }
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 12px;
      padding: 8px;
    }
  }
`;

const ButtonBase = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  color: white;
  transition: background-color 0.3s;
`;

const ButtonSuccess = styled(ButtonBase)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const ButtonDanger = styled(ButtonBase)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;
