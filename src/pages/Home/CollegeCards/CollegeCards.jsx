import React, { useEffect, useState } from 'react';
import Card from './Card';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const CollegeCards = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className='my-14 px-12'>
            <SectionTitle title="Discover Your Dream College" subtitle="Explore Top Colleges with Comprehensive Booking Facilities"></SectionTitle>
            <div className='grid grid-cols-3 gap-6'>
                {
                    colleges.slice(0, 3).map((college, index) => <Card
                        key={index}
                        college={college}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CollegeCards;