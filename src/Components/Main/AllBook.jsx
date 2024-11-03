import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DetailsBook from './DetailsBook';

const AllBook = ({ Book }) => {
  // console.log(Book);

  const {
    bookId,
    author,
    bookName,
    image,
    category,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
  } = Book;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div
        // onClick={() => handelSelectBook(Book)}
        className="card bg-base-100  shadow-xl"
      >
        <figure className="bg-gray-100 py-10">
          <img className="w-48 h-64" src={image} alt="Shoes" />
        </figure>
        <div className="card-body space-y-1">
          <div className="grid grid-cols-2 text-center text-green-500 gap-6">
            <p className="px-3 py-1 bg-green-100 rounded-xl">Young Adult</p>
            <p className="px-3 py-1 bg-green-100 rounded-xl">Identity</p>
          </div>
          <p className="text-xl font-bold">{bookName}</p>
          <p>By : {author}</p>

          <p className="border-t border-dashed py-2"></p>

          <div className=" flex justify-between text-gray-400">
            <p>{category}</p>
            <div className=" text-xl  flex items-center gap-2">
              <p className="">{rating}</p>
              <p className="">
                {' '}
                <FaRegStar />{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllBook;
