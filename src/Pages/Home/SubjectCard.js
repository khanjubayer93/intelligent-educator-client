import React from 'react';

const SubjectCard = ({ subject }) => {
    const { image, title, price } = subject;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 my-5">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">Subject: {title}</h2>
                    <p className="text-gray-800">Price: ${price}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Read more</button>
            </div>
        </div>
    );
};

export default SubjectCard;