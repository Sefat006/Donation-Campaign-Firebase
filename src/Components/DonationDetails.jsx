import React from 'react';
import { useLoaderData} from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import DonationForm from './DonationForm';

const DonationDetails = () => {

    // show single donation details
    // path is from cardDonation <btn>Donate</btn>
    
    const donation = useLoaderData(); // Get donation data from loader

    if (!donation) {
        return <h1 className="text-center text-red-500">Donation not found</h1>;
    }

    const { title, description, image, status, contactInfo, division } = donation;

    return (
        <div>
            {/* single donation details card*/}

            <h1 className='text-2xl'>Donation Details of : <span className='text-blue-700 font-bold'> {title}</span></h1>

            <div className="mx-auto p-4 md:p-8 bg-gray-100 shadow-lg rounded-xl">
                {/* title */}
                <h1 className="text-6xl text-start mb-10 font-bold">{title}</h1>
                {/* image */}
                <div className="flex justify-center">
                    <img src={image} alt={title} 
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-86 object-cover rounded-xl"/>
                </div>

                <div className="p-6">
                    <span className={`px-4 py-1 text-sm font-semibold rounded-full ${status === "Ongoing" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                        {status}
                    </span>
                    <p className="text-gray-700 mt-4">{description}</p>
                    <p className="text-lg text-gray-600">📩 <strong>{contactInfo}</strong></p>
                    <p className="flex items-center justify-center text-lg text-gray-600">
                        <FaLocationDot className="text-red-500 mr-2" /> {division}
                    </p>
                    <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                        Donate Now
                    </button>
                </div>
            </div>

            <div className='mt-10'>
                <DonationForm></DonationForm>
            </div>


        </div>
    );
};

export default DonationDetails;