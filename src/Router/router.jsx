import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Components/Home';
import Donation from '../Components/Donation';
import DonationDetails from '../Components/DonationDetails';


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
                loader: ()=> fetch('/donation.json')
            },
            {
                path: '/donation/:id',
                element: <DonationDetails></DonationDetails>,
                loader: async ({ params }) => {
                    const response = await fetch("/donation.json"); // Load full JSON file
                    const data = await response.json();
                    
                    return data.find(item => item.id === parseInt(params.id)) || null; // Find donation by ID
                }
                
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