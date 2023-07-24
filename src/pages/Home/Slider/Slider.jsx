import React from 'react';
import slide1 from '../../../assets/college 1.jpg'
import slide2 from '../../../assets/college 2.jpg'
import slide3 from '../../../assets/college 3.jpg'
import { Link } from 'react-router-dom';

const Slider = () => {

    return (
        <div className="carousel h-[350px] md:h-[600px] w-full relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full md:px-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold">Unveiling Exclusive Campus Experiences</h1>
                        <p className="text-lg">Discover Hidden Gems - Book Unforgettable College Events!</p>
                        
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full md:px-10">
                    <a href="#slide1" className="btn btn-circle ">❮</a>
                    <a href="#slide3" className="btn btn-circle ">❯</a>
                    <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold">College Spotlight: Illuminating Extraordinary Campus Ventures</h1>
                        <p className="text-lg">Embark on a Journey of Uniqueness - Reserve Your Uncommon Events!</p>
                        
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full md:px-10">
                    <a href="#slide2" className="btn btn-circle ">❮</a>
                    <a href="#slide1" className="btn btn-circle ">❯</a>
                    <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold">College Spotlight: Showcasing Distinctive Campus Attractions</h1>
                        <p className="text-lg">Where Campus Life Shines Bright - Reserve Uniqueness Today!</p>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Slider;