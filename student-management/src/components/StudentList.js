import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students, setStudents }) => {
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/add"><button>Add Student</button></Link>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} years - {student.grade} 
            <Link to={`/student/${student.id}`}><button>View Details</button></Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;