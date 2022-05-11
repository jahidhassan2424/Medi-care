import React from 'react';
import InfoCard from '../Info/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
            <InfoCard title="Opening Hours" bgClass="bg-primary bg-gradient-to-r from-secondary to-primary" img={clock} ></InfoCard>
            <InfoCard title="Visit Our Locations" bgClass="bg-accent" img={marker} ></InfoCard>
            <InfoCard title="Contact Us Now" bgClass="bg-primary bg-gradient-to-r from-secondary to-primary" img={phone} ></InfoCard>
        </div>
    );
};
export default Info;