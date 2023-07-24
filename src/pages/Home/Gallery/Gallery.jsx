import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'aos/dist/aos.css';
// import fashion from '../../../assets/fashion-fun.jpg';
import gallery1 from '../../../assets/gallery 1.jpg';
import gallery2 from '../../../assets/gallery 2.jpg';
import gallery3 from '../../../assets/gallery 3.jpg';
import gallery4 from '../../../assets/gallery 4.jpg';
import gallery5 from '../../../assets/gallery 5.jpg';
import gallery6 from '../../../assets/gallery 6.jpg';
import gallery7 from '../../../assets/college 1.jpg';
import gallery8 from '../../../assets/college 2.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Gallery = () => {
    return (
        <div className='md:px-12 my-16'>
            <SectionTitle></SectionTitle>
            <div data-aos="zoom-in" className='grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 rounded border-8'>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery1} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery3} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery5} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery4} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery6} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery7} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery2} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:scale-110 duration-100 h-60 w-72' src={gallery8} alt="dolls" /></figure>
                </div>

            </div>
        </div>
    );
};

export default Gallery;