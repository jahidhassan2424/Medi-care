import React from 'react';
import ServiceCard from './ServiceCard';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceHero from './ServiceHero';
const Service = () => {

    return (
        <div className='mt-32'>
            <h1 className='text-2xl text-center text-secondary font-bold'>Our Service</h1>
            <h1 className='text-4xl text-center mt-5'>Service We Provide</h1>

            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center mt-20 items-center text-center'>
                <ServiceCard title="Fluride Treatement" img={fluoride}></ServiceCard>
                <ServiceCard title="Cavity Filling" img={cavity}></ServiceCard>
                <ServiceCard title="mm" img={whitening}></ServiceCard>
            </div>
            <div>
                <ServiceHero></ServiceHero>
            </div>

        </div>
    );
};

export default Service;