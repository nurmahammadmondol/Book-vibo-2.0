import { toast } from 'react-toastify';

// Read Book Section Start:
const getCheckThisBook = () => {
  const checkItem = localStorage.getItem('read-book');
  if (checkItem) {
    const checkItemPars = JSON.parse(checkItem);
    return checkItemPars;
  } else {
    return [];
  }
};

const addToStoredReadBook = id => {
  const checkBook = getCheckThisBook();
  if (checkBook.includes(id)) {
    toast.warn('You have already read this book');
  } else {
    checkBook.push(id);
    const storedBook = JSON.stringify(checkBook);
    localStorage.setItem('read-book', storedBook);
    toast.success('You have now finished reading this book');
  }
};

// Read Book Section End :

const getWishlistBooksCheck = () => {
  const checkWishlistBooks = localStorage.getItem('Wishlist-Books');
  if (checkWishlistBooks) {
    const CheckItemsParse = JSON.parse(checkWishlistBooks);
    return CheckItemsParse;
  } else {
    return [];
  }
};

const addToLocalStoredWishlistBooks = ID => {
  const checkWishlistBooks = getWishlistBooksCheck();
  if (checkWishlistBooks.includes(ID)) {
    toast.warn('You have already save this book wishlist');
  } else {
    checkWishlistBooks.push(ID);
    const setWishlistString = JSON.stringify(checkWishlistBooks);
    localStorage.setItem('Wishlist-Books', setWishlistString);
    toast.success('The book has been saved');
  }
};

export {
  addToStoredReadBook,
  getCheckThisBook,
  addToLocalStoredWishlistBooks,
  getWishlistBooksCheck,
};
