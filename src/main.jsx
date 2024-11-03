import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ListedBook from './Components/Main/ListedBook';
import ReadPage from './Components/Main/ReadPage';
import DetailsBook from './Components/Main/DetailsBook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Home',
        element: <Home></Home>,
      },
      {
        path: '/ListedBook',
        loader: () => fetch('/books.json'),
        element: <ListedBook></ListedBook>,
      },
      {
        path: '/ReadPage',
        element: <ReadPage></ReadPage>,
      },
      {
        path: '/BookDetails/:bookId',
        loader: () => fetch('/books.json'),
        element: <DetailsBook></DetailsBook>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
