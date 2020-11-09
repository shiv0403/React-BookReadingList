import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Bookdetails from "./Bookdetails";
import "./Booklist.css";

function Booklist() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="bookList">
      <ul>
        {books.map((book) => {
          return <Bookdetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read :)</div>
  );
}

export default Booklist;
