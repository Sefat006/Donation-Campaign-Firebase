import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDonation from './CardDonation';

const Donation = () => {

    const donationCards = useLoaderData();
    console.log(donationCards);

    return (
        <div className='grid grid-cols-2 gap-5'>
            { // we'll pass the props to new component
                donationCards.map( donationCard => <CardDonation props={donationCard}></CardDonation>)
            }
        </div>
    );
};

export default Donation;