import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCollegePage = () => {

    const college = useLoaderData();
    // console.log(college);

    return (
        <div className="bg-white shadow-lg mx-auto m-20 rounded-lg overflow-hidden flex flex-col h-full w-10/12">
            <img src={college.collegeImage} alt={college.collegeName} className="w-full h-full object-cover" />
            <div className="px-4 py-5 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-4xl font-bold text-[#5F264A] font-semibold mb-2">{college.collegeName}</h2>
                    <p className="text-sm text-gray-600 mb-2">Admission Dates: {college.admissionDates}</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='border p-3 rounded-sm shadow-md'>
                            <p className="text-sm text-black font-bold mb-2">Events:</p>
                            <ul className="text-sm text-gray-600 mb-2">
                                {college.events.map((event, index) => (
                                    <li key={index}>{index + 1}. {event.name} - {event.date}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='border p-3 rounded-sm shadow-md'>
                            <p className="text-sm text-black font-bold mb-2">Sports:</p>
                            <ul className="text-sm text-gray-600 mb-2">
                                {college.sports.map((sport, index) => (
                                    <li key={index}>{index + 1}. {sport.name} - {sport.category} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-black my-4"><span className='text-black font-bold'>Research History:</span> {college.researchHistory}</p>
                </div>
                <Link className="btn rounded-none text-white bg-[#5F264A]">Visit College Website</Link>
            </div>
        </div>
    );
};

export default SingleCollegePage;