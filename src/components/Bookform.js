import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import "./Bookform.css";

function Bookform() {
  const { dispatch } = useContext(BookContext);
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    settitle("");
    setauthor("");
  };

  return (
    <div className="bookForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="book title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="book author"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />
        <input type="submit" value="add book" />
      </form>
    </div>
  );
}

export default Bookform;
