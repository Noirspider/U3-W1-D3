import React from "react";
import Welcome from "./Welcome";
import BookList from "./BookList";
import dataBooks from "../books/fantasy.json";

function MyMain() {
  return (
    <>
      <Welcome />
      <BookList books={dataBooks} />
    </>
  );
}

export default MyMain;
