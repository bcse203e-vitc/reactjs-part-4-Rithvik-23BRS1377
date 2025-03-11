import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books, searchQuery }) => {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - ₹{book.price}
            <Link to={`/books/${book.id}`}><button>View Details</button></Link>
          </li>
        ))}
      </ul>
      <Link to="/add-book"><button>Add New Book</button></Link>
      <Link to="/cart"><button>🛒 View Cart</button></Link>
    </div>
  );
};

export default BookList;
