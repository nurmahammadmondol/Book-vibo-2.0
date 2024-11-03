import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Root.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
