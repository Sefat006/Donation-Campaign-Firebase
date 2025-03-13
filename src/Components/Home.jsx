import React from 'react';
import Banner from './Banner';
import About from './About/About';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (

        // children of layout.JSX; will show on layout page <outlet></outlet>
        // after completing homepage; went to Donation.jsx to complete Donation page from Navbar
        <div className='m-6 bg-slate-50 '>
            <div className=''>
                <Banner></Banner>
            </div>
            <div className='mb-2'>
            <About></About>
            </div>
            <div className='mt-20'>
            <HowItWorks></HowItWorks>
            </div>
            
        </div>
    );
};

export default Home;