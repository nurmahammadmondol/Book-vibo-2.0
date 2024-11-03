import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Root.css';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
