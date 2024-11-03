import React from 'react';

const ReadBooks = ({ SerialBook }) => {
  const {
    bookId,
    author,
    bookName,
    image,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = SerialBook;
  return (
    <div className="md:h-[280px] border p-5 my-10 rounded-lg md:flex md:gap-10">
      <div className="h-[235px] md:w-[330px] flex items-center justify-center bg-gray-100 rounded-lg mb-5 md:mb-0">
        <img className="h-[150px] w-[100px]" src={image} alt="" />
      </div>

      <div className="w-full flex flex-col justify-around gap-3 md:gap-0">
        <div>
          <p className="text-3xl font-bold">{bookName}</p>
          <p>By : {author}</p>
        </div>

        <div className="md:flex gap-6">
          <h5 className="flex items-center gap-4">
            <span className="font-bold"> Tags :</span>
            {tags.map((tag, index) => (
              <small
                key={index}
                className="bg-green-100 text-green-600 py-1 px-4 rounded-xl"
              >
                #{tag}
              </small>
            ))}
          </h5>
          <p>
            <span className="font-semibold">
              <i class="fa-regular fa-clock"></i> Year of Publishing :
            </span>
            {yearOfPublishing}
          </p>
        </div>

        <div className="md:flex gap-6 text-gray-400">
          <p>
            <span className="font-medium">
              <i class="fa-solid fa-user mr-1"></i> Publisher :
            </span>
            {publisher}
          </p>
          <p>
            <span className="font-semibold">
              <i class="fa-regular fa-file-lines mr-1"></i> Number of page:
            </span>
            {totalPages}
          </p>
        </div>
        <hr />
        <div className="md:flex md:gap-5">
          <p className="bg-[#eaf3ff] text-[#6fafff] py-1 px-4 rounded-2xl">
            <span className="font-medium">Category :</span> {category}
          </p>
          <p className="bg-[#fef8e5] text-[#fcd44c] my-3 md:my-0 py-1 px-4 rounded-2xl">
            <span className="font-medium">Rating : </span>
            {rating}
          </p>
          {/* <button className="btn bg-green-500 btn-sm rounded-xl text-white ">
            View Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
