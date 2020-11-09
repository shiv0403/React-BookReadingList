import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "./Bookdetails.css";

function Bookdetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      className="listItem"
    >
      <div className="bookdetails_title">{book.title}</div>
      <div className="bookdetails_author">{book.author}</div>
    </li>
  );
}

export default Bookdetails;
