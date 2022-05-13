import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Service from './Service/Service';
import MakeAppoinment from './MakeAppoinment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from './../Shared/Footer';


const Home = () => {
    return (
        <div>
            <div className='container p-0 lg:pb-12 '>
                <Banner></Banner>
                <Info></Info>
                <Service></Service>
                <MakeAppoinment></MakeAppoinment>
                <Testimonial></Testimonial>
                <ContactUs></ContactUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;