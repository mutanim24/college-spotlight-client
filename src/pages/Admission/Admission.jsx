import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className='my-10 px-12'>
            <SectionTitle title="College Booking Made Easy" subtitle="Discover, Compare, and Reserve Your Dream College Hassle-Free"></SectionTitle>
            <div className='grid grid-cols-3 gap-8'>
                {
                    colleges.map(college => <Link to='/admissionform' key={college._id} className='flex items-center gap-4 bordered p-4 rounded-xl border-2 border-[#5F264A] hover:bg-gray-100 shadow-lg'>
                        <img className='rounded-full h-20 w-20 shadow-xl' src={college.collegeImage} alt="" />
                        <div>
                            <h4 className='font-bold text-  xl'>{college.collegeName}</h4>
                            <p className='text-sm text-gray-600'>{college.admissionDates}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Admission;