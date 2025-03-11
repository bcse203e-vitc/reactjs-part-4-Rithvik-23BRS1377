import React from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find(s => s.id === parseInt(id));

  if (!student) return <h2>Student Not Found</h2>;

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default StudentDetails;