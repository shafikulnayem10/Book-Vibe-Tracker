import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFromLocalDB,
  addWishListToLocalDB,
  getAllWishListFromLocalDB,
  saveReadListToLocalDB,
  saveWishListToLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() =>
    getAllReadListFromLocalDB()
  );
  const [wishList, setWishList] = useState(() =>
    getAllWishListFromLocalDB()
  );

 
  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("Already in Read List");
      return;
    }

    
    const updatedWishList = wishList.filter(
      (book) => book.bookId !== currentBook.bookId
    );

    setWishList(updatedWishList);
    saveWishListToLocalDB(updatedWishList);

   
    const updatedReadList = [...readList, currentBook];
    setReadList(updatedReadList);
    addReadListToLocalDB(currentBook);

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
      toast.error("Already in Wishlist");
      return;
    }

    const updatedWishList = [...wishList, currentBook];
    setWishList(updatedWishList);
    addWishListToLocalDB(currentBook);

    toast.success(`${currentBook.bookName} added to Wishlist`);
  };

  
  const removeFromReadList = (id) => {
    const updated = readList.filter((book) => book.bookId !== id);
    setReadList(updated);
    saveReadListToLocalDB(updated);
    toast.info("Removed from Read List");
  };

  
  const removeFromWishList = (id) => {
    const updated = wishList.filter((book) => book.bookId !== id);
    setWishList(updated);
    saveWishListToLocalDB(updated);
    toast.info("Removed from Wishlist");
  };

  const data = {
    readList,
    wishList,
    handleMarkAsRead,
    handleWishList,
    removeFromReadList,
    removeFromWishList,
  };

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;