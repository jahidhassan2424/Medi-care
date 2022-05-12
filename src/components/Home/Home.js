import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Service from './Service/Service';
import MakeAppoinment from './MakeAppoinment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;