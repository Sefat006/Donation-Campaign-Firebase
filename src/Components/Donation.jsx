import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDonation from './CardDonation';

const Donation = () => {

    const donationCards = useLoaderData();
    console.log(donationCards);

    return (
        <div>
            <h1 className='font-serif text-rose-900 bg-gray-00 mb-5 mt-5 font-bold rounded-lg py-2 text-4xl md:text-7xl'>Donation Campaigns</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            { // we'll pass the props to new component
                donationCards.map( donationCard => <CardDonation key={donationCard.id} props={donationCard}></CardDonation>)
            }
        </div>
        </div>
    );
};

export default Donation;