// BookContext.js
import React, { createContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]); // Store wishlist items here
  const [read, setRead] = useState([]);

  const addToWishlist = (book) => {
    const exist = wishlist.find(wishItem => wishItem.bookId === book.bookId)
    if(!exist){
        setWishlist((wishlist) => [...wishlist, book]);
    }
  };


  const addToRead = (book) =>{
    const exist = read.find(readItem => readItem.bookId === book.bookId)
    if(!exist){
        const NewRead =[...read, book]
    setRead(NewRead);
    }
  }

  return (
    <BookContext.Provider value={{ wishlist, addToWishlist, read, addToRead }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
