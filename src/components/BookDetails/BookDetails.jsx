import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookContext from "../BookContext";

const BookDetails = () => {
  const { bookId } = useParams();
  let convertedBookId = parseInt(bookId);
  const data = useLoaderData();
  
//   const { addToWishlist } = useContext(BookContext); // Get addToWishlist from context
    const {addToWishlist, addToRead} = useContext(BookContext)
  const currentBooks = data.find((book) => book.bookId === convertedBookId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = currentBooks;

  const handleAddToWishlist = () => {
    addToWishlist(currentBooks); // Add the current book to the wishlist
  };
  const handleAddToRead = () => {
    addToRead(currentBooks);
  }

  return (
    <div>
      
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row gap-10">
          <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">{bookName}</h1>
            <p>By: {author}</p>
            <p class="py-6">
              {review}
            </p>
            <div>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
            <div className="flex gap-5 mt-10"> 
                <button onClick={handleAddToRead} className="btn btn-accent">Read</button>
                <button onClick={handleAddToWishlist} className="btn btn-accent">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
