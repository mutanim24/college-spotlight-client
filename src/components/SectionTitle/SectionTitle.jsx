import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='mb-7 text-center'>
            <h1 className='text-4xl uppercase font-bold text-[#5F264A] mb-3'>{title}</h1>
            <div className='h-1 w-32 bg-[#5F264A] mx-auto'></div>
            <p className='mt-2'>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;