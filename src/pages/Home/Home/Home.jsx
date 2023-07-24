import React from 'react';
import Slider from '../Slider/Slider';
import CollegeCards from '../CollegeCards/CollegeCards';
import Gallery from '../Gallery/Gallery';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CollegeCards></CollegeCards>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;