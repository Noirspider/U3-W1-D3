import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div className="row g-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
