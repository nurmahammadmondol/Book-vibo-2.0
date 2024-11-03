import React, { useEffect, useState } from 'react';
import Banner from '../Header/Banner';
import AllBook from '../Main/AllBook';

const Home = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch('./books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-20">
        {Books.map(book => (
          <AllBook key={book.bookId} Book={book}></AllBook>
        ))}
      </div>
    </div>
  );
};

export default Home;
