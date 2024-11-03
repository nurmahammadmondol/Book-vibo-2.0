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
    alert('You have already read this book   ');
  } else {
    checkBook.push(id);
    const storedBook = JSON.stringify(checkBook);
    localStorage.setItem('read-book', storedBook);
  }
};

export { addToStoredReadBook, getCheckThisBook };
