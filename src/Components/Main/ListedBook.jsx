import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getCheckThisBook, getWishlistBooksCheck } from '../Script/LocalStoreg';
import ReadBooks from './ReadBooks';
import WishlistBook from './WishlistBook';

const ListedBook = () => {
  const Data = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const readBooks = getCheckThisBook();
    const readBooksIdParseIn = readBooks.map(Id => parseInt(Id));

    const Wishlist = getWishlistBooksCheck();
    const WishlistIdParseIn = Wishlist.map(bookID => parseInt(bookID));

    const ReadBookItems = Data.filter(book =>
      readBooksIdParseIn.includes(book.bookId)
    );

    const WishlistItem = Data.filter(book =>
      WishlistIdParseIn.includes(book.bookId)
    );

    setReadBooks(ReadBookItems);
    setWishlistBooks(WishlistItem);
  }, []);

  return (
    <div>
      <div className="my-10 py-7 bg-gray-50 text-center text-3xl font-bold rounded-lg">
        <h2>Books</h2>
      </div>

      <div className="w-10/12 mx-auto">
        <Tabs>
          <TabList>
            <Tab>Read Books ({readBooks.length})</Tab>
            <Tab>Wishlist Books ({wishlistBooks.length})</Tab>
          </TabList>

          <TabPanel>
            {readBooks.map(Book => (
              <ReadBooks key={Book.bookId} SerialBook={Book}></ReadBooks>
            ))}
          </TabPanel>
          <TabPanel>
            {wishlistBooks.map(wishlist => (
              <WishlistBook
                key={wishlist.bookId}
                wishlist={wishlist}
              ></WishlistBook>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
