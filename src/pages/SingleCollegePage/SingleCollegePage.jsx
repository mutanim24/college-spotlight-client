import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCollegePage = () => {
    const college = useLoaderData();
    console.log(college)
    return (
        <div>
            {college.collegeName}
        </div>
    );
};

export default SingleCollegePage;