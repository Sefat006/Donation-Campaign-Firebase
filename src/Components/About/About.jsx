import React from 'react';
import Card from './Card';

const About = () => {
    return (
        <div className=' bg-gray-100 p-2 '>
            <h2 className="text-4xl text-black font-bold mt-4">About</h2>

            <div className='space-x-2 md:flex text-center justify-center items-center'>

            <div className='md:w-4/12 md:h-[400px]'>
                <Card></Card>
            </div>

            <div className='p-3 bg-sky-900 mt-28 min-h-96 rounded-xl'>
                <h1 className='mb-2 text-3xl md:text-6xl text-start font-mono font-bold text-green-400'>Our Mission & How You Can Help</h1>
                <p className='text-start'>
                At <span>Donation Campaign Website</span>, our mission is to bring hope and support to those in need by connecting generous donors with impactful causes. Whether it's providing food for the hungry, education for underprivileged children, medical aid for the sick, or shelter for the homeless, we strive to make a difference in every way possible.
                <br />
                <br />
                    How can you contribute? It’s simple! You can donate funds, volunteer your time, or spread the word about our campaigns. Every contribution, big or small, helps create a positive impact on countless lives. Join us in making the world a better place—one donation at a time. 💙
                </p>
            </div>
            
        </div>
        </div>
    );
};

export default About;