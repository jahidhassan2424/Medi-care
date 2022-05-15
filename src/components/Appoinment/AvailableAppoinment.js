import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentSingle from './AppoinmentSingle';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ date }) => {
    const [services, setService] = useState([]);
    const [treatement, setTreatement] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
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
                        setTreatement={setTreatement}
                    ></AppoinmentSingle>)
                }
            </div>
            {
                treatement && <BookingModal
                    treatement={treatement}
                    date={date}

                ></BookingModal>
            }

        </div>

    );
};

export default AvailableAppoinment;