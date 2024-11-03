import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {
  addToLocalStoredWishlistBooks,
  addToStoredReadBook,
} from '../Script/LocalStoreg';
import { toast } from 'react-toastify';

const DetailsBook = () => {
  const { bookId } = useParams();
  const NumberBookId = parseInt(bookId);
  // console.log(bookId, NumberBookId);

  const books = useLoaderData();
  const Book = books.find(book => book.bookId === NumberBookId);
  console.log(Book);
  const {
    author,
    tags,
    bookName,
    image,
    category,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
  } = Book;

  // Add localStorage Read Book :
  const handelClickReadBook = ID => {
    addToStoredReadBook(ID);
  };

  const handelClickWishlistBooks = ID => {
    addToLocalStoredWishlistBooks(ID);
  };

  return (
    <div className=" w-11/12 mx-auto my-16 bg-gray-50 rounded-xl">
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 h-full  lg:h-[750px] items-center p-8">
        <div className=" w-full ">
          <img
            className="w-full h-[400px] lg:h-[640px] rounded-sm"
            src={image}
            alt=""
          />
        </div>

        <div className=" p-3 flex flex-col justify-between h-full">
          <h3 className="text-3xl lg:text-4xl font-bold">{bookName}</h3>
          <span className="text-gray-500">
            <span className="font-bold">By : </span> {author}
          </span>
          <hr />
          <p>{category}</p>
          <hr />
          <small>
            <span className="text-sm font-bold">Review :</span>
            <span className="text-gray-500"> {review}</span>
          </small>
          <h5 className="flex items-center gap-4">
            <span className="font-bold"> Tags :</span>
            {tags.map((tag, index) => (
              <small key={index}>#{tag}</small>
            ))}
          </h5>
          <hr />
          <p>
            <span className="font-semibold"> Number of page:</span> {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher: </span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Year of Publishing : </span>{' '}
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating: </span>
            {rating}
          </p>

          <div className="flex gap-5">
            <button
              onClick={() => handelClickReadBook(bookId)}
              className="btn btn-success btn-outline  px-7"
            >
              Read
            </button>
            <button
              onClick={() => handelClickWishlistBooks(bookId)}
              className="btn bg-[#59C6D2] text-white px-6"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
