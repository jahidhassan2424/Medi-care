import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
        </div>
    );
};

export default Home;