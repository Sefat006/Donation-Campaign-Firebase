import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (

        // 1st page to start with; then complete Home.jsx to fill the Homepage Layout

        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='justify-center text-center flex-grow items-center w-11/12 mx-auto '>
                <Outlet></Outlet>
            </div>
            <div  className="w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;