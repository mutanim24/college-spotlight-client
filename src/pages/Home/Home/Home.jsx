import React from 'react';
import Slider from '../Slider/Slider';
import CollegeCards from '../CollegeCards/CollegeCards';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CollegeCards></CollegeCards>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;