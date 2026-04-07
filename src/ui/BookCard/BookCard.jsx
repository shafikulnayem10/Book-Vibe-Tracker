import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">

      {/* IMAGE */}
      <div className="p-4 sm:p-6">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="px-4 sm:px-6 space-y-3 flex-1">

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag, ind) => (
            <span
              key={ind}
              className="text-green-600 bg-green-100 text-xs sm:text-sm font-semibold px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold line-clamp-2">
          {book.bookName}
        </h2>

        {/* AUTHOR */}
        <p className="text-sm sm:text-base font-medium text-gray-600">
          {book.author}
        </p>

        {/* RATING & CATEGORY */}
        <div className="flex items-center justify-between border-t border-dashed pt-3 text-sm sm:text-base">
          <span className="font-semibold text-gray-700">
            {book.category}
          </span>
          <div className="flex items-center gap-1 font-medium text-gray-700">
            {book.rating}
            <FaRegStar className="text-yellow-500" />
          </div>
        </div>

      </div>

      {/* BOOK DETAILS BUTTON */}
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-3">
        <Link
          to={`/bookDetails/${book.bookId}`}
          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition text-sm sm:text-base"
        >
          Book Details
        </Link>
      </div>

    </div>
  );
};

export default BookCard;

