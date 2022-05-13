import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentSingle from './AppoinmentSingle';
import Footer from './../Shared/Footer';

const AvailableAppoinment = ({ date }) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    return (
        <div className='mt-32'>
            <p className='text-2xl text-secondary font-bold text-center'>Available appoinment on  {format(date, 'PP')}</p>

            <div className='grid w-full justify-between mt-20 gap-16 grid-cols-1 lg:grid-cols-3 mb-32'>
                {
                    services.map(service => <AppoinmentSingle
                        key={service._id}
                        service={service}
                    ></AppoinmentSingle>)
                }
            </div>

        </div>

    );
};

export default AvailableAppoinment;