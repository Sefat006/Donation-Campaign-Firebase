import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Components/Home';
import Donation from '../Components/Donation';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: ()=> fetch("../../public/donation.json")
            },
            {
                path: '/campaign',
                element: <h2>hey i am campaign page</h2>,
            },
            {
                path: '/how-to-help',
                element: <h1><span className='text-3xl'>OOPS!!</span> <br />This page is Under Development For now</h1>,
            },
            {
                path: '/dashboard',
                element: <h1><span className='text-3xl'>OOPS!!</span> <br />This page is Under Development For now</h1>,
            },
        ]
    },
    
])

export default router;