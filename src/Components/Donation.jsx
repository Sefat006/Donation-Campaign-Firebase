import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDonation from './CardDonation';

const Donation = () => {

    const donationCards = useLoaderData();
    console.log(donationCards);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            { // we'll pass the props to new component
                donationCards.map( donationCard => <CardDonation key={donationCard.id} props={donationCard}></CardDonation>)
            }
        </div>
    );
};

export default Donation;