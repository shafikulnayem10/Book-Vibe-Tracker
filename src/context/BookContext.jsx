import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() =>
    getAllReadListFromLocalDB()
  );
  const [wishList, setWishList] = useState([]);

  
  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("Book already in Read List");
      return;
    }

    
    addReadListToLocalDB(currentBook);
    setReadList((prev) => [...prev, currentBook]);

    
    setWishList((prev) =>
      prev.filter((book) => book.bookId !== currentBook.bookId)
    );

    toast.success(`${currentBook.bookName} added to Read List`);
  };

  
  const handleWishList = (currentBook) => {
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId
    );

    if (isExistInReadList) {
      toast.error("Already in Read List");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("Book already in Wishlist");
      return;
    }

    setWishList((prev) => [...prev, currentBook]);

    toast.success(`${currentBook.bookName} added to Wishlist`);
  };

  const data = {
    readList,
    wishList,
    handleMarkAsRead,
    handleWishList,
  };

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;