import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem("books")) || [
      { id: 1, title: "1984", author: "George Orwell", price: 299, description: "Dystopian novel", available: true },
      { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 199, description: "Inspirational novel", available: true }
    ];
  });

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, { id: Date.now(), ...newBook }]);
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));
  };

  return (
    <div>
      <h1>📚 Online Bookstore</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<BookList books={books} searchQuery={searchQuery} />} />
        <Route path="/books/:id" element={<BookDetails books={books} addToCart={addToCart} />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
};

export default App;
