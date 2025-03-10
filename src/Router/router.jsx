import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Components/Home';
import DonationCampaign from '../Components/DonationCampaign';

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
                element: <DonationCampaign></DonationCampaign>
            }
        ]
    },
    
])

export default router;