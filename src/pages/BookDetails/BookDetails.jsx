import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId: bookParamsId } = useParams();

  const expectedBook = books.find(
    (book) => String(book.bookId) === String(bookParamsId)
  );

  if (!expectedBook) {
    return <h2 className="text-center mt-10 text-2xl">Book not found</h2>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-sm rounded-xl p-4 sm:p-6">

        {/* IMAGE */}
        <div className="w-full flex items-center justify-center bg-gray-100 rounded-xl p-4">
          <img
            src={image}
            alt={bookName}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-4">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {bookName}
          </h2>

          <p className="text-sm sm:text-base font-medium text-gray-600">
            By: {author}
          </p>

          <p className="py-2 border-y text-sm sm:text-base">
            {category}
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">Review:</span> {review}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="text-green-600 bg-green-100 text-xs sm:text-sm font-semibold px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* INFO */}
          <div className="border-t pt-4 space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span className="text-gray-600">Pages:</span>
              <span className="font-semibold">{totalPages}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Publisher:</span>
              <span className="font-semibold">{publisher}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Year:</span>
              <span className="font-semibold">{yearOfPublishing}</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              className="w-full sm:w-auto px-4 py-2 border rounded-md hover:bg-gray-100 transition"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>

            <button
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;
