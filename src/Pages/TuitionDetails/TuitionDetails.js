import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Review from '../Review/Review';

const TuitionDetails = () => {
    const { title, image, price, description, rating } = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="w-2/6 h-4/5 rounded-md shadow-md bg-gray-50 text-gray-800 my-5">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide">Subject: {title}</h2>
                        <div className='flex justify-between'>
                            <p className="text-gray-800">Price: ${price}</p>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <FontAwesomeIcon icon={faStar} />
                                <span className="text-xl font-bold">{rating}</span>
                            </div>
                        </div>
                        <p>{description}</p>

                    </div>

                </div>

            </div>
            <Review></Review>
        </div>
    );
};

export default TuitionDetails;