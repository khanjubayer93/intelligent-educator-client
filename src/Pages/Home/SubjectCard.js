import React from 'react';
import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
    const {_id, image, title, price, description } = subject;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 my-5">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">Subject: {title}</h2>
                    <p className="text-gray-800">Price: ${price}</p>

                    {
                        description.length > 100 ? <p>{description.slice(0, 100) + '...'}<Link to={`/details/${_id}`} className='text-blue-500'>See more</Link></p> : <p>{description.length}</p>
                    }

                </div>
                <Link to={`/details/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Details Tuition</button>
                </Link>
            </div>
        </div>
    );
};

export default SubjectCard;