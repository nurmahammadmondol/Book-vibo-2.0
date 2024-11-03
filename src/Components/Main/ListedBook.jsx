import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getCheckThisBook } from '../Script/LocalStoreg';
import ReadBooks from './ReadBooks';

const ListedBook = () => {
  const Data = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readBooks = getCheckThisBook();
    const readBooksIdParseIn = readBooks.map(Id => parseInt(Id));

    const ReadBookItems = Data.filter(book =>
      readBooksIdParseIn.includes(book.bookId)
    );

    setReadBooks(ReadBookItems);
  }, []);

  return (
    <div>
      <div className="my-10 py-7 bg-gray-50 text-center text-3xl font-bold rounded-lg">
        <h2>Books</h2>
      </div>

      <div className="w-10/12 mx-auto">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {readBooks.map(Book => (
              <ReadBooks key={Book.bookId} SerialBook={Book}></ReadBooks>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
