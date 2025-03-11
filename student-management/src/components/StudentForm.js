import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ setStudents }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !grade.trim()) return;
    
    setStudents(prev => [
      ...prev, 
      { id: Date.now(), name, age, grade, email: "N/A", phone: "N/A", address: "N/A" }
    ]);

    navigate("/");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input type="text" placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;