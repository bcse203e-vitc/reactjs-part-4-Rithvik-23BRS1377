import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
