import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>
            <div  className="w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;