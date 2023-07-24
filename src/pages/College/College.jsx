import React, { useEffect, useState } from 'react';
import CollegeCards from '../Home/CollegeCards/CollegeCards';
import Card from '../Home/CollegeCards/Card';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const College = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className='my-14 px-12'>
            <SectionTitle></SectionTitle>
            <div className='grid grid-cols-3 gap-6'>
                {
                    colleges.map((college, index) => <Card
                        key={index}
                        college={college}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default College;