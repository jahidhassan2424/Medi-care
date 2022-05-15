import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div >
            <div className='mx-auto lg:container'>
                <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
                <div className='p-5'>
                    <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
                </div>
            </div>


            <Footer></Footer>
        </div >
    );
};

export default Appoinment;