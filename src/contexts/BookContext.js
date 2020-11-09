import React, { useState, createContext, useReducer, useEffect } from "react";
import { v4 as uuid, stringify } from "uuid";
import { bookReducer } from "../reducers/bookreducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
