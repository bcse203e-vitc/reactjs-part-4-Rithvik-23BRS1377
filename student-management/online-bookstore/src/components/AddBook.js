import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ({ addBook }) => {
  const [form, setForm] = useState({ title: "", author: "", price: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    addBook(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
