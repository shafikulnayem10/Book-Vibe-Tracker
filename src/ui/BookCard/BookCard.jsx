import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
    >
      {/* IMAGE */}
      <div className="p-4 sm:p-6">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-3">

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

        {/* FOOTER */}
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
    </Link>
  );
};

export default BookCard;

