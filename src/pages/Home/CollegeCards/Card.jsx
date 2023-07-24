import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ college }) => {
    console.log(college.collegeName)
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <img src={college.collegeImage} alt={college.collegeName} className="w-full h-48 object-cover" />
            <div className="px-4 py-5 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-2xl font-bold text-[#5F264A] font-semibold mb-2">{college.collegeName}</h2>
                    <p className="text-sm text-gray-600 mb-2">Admission Dates: {college.admissionDates}</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='border p-3 rounded-sm shadow-md'>
                            <p className="text-sm text-black font-bold mb-2">Events:</p>
                            <ul className="text-sm text-gray-600 mb-2">
                                {college.events.map((event, index) => (
                                    <li key={index}>{index + 1}. {event.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='border p-3 rounded-sm shadow-md'>
                            <p className="text-sm text-black font-bold mb-2">Sports:</p>
                            <ul className="text-sm text-gray-600 mb-2">
                                {college.sports.map((sport, index) => (
                                    <li key={index}>{index + 1}. {sport.name} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-black my-4"><span className='text-black font-bold'>Research History:</span> {college.researchHistory}</p>
                </div>
                <Link to={`/college/${college.id}`} className="btn rounded-none text-white bg-[#5F264A]">Details</Link>
            </div>
        </div>
    );
};

export default Card;