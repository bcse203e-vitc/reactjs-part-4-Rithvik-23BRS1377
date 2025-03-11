import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", age: 12, grade: "7th", email: "aarav@gmail.com", phone: "1234567890", address: "Chennai" },
    { id: 2, name: "Iniya", age: 13, grade: "8th", email: "iniya@gmail.com", phone: "9876543210", address: "Mumbai" },
  ]);

  return (
    <div>
      <h1>Student Management System</h1>
      <Routes>
        <Route path="/" element={<StudentList students={students} setStudents={setStudents} />} />
        <Route path="/add" element={<StudentForm setStudents={setStudents} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>
    </div>
  );
};

export default App;