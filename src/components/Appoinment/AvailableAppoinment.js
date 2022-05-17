import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppoinmentSingle from './AppoinmentSingle';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ date }) => {

    const [treatement, setTreatement] = useState(null);

    const formatedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



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
<<<<<<< HEAD
                treatement && <BookingModal
                    treatement={treatement}
                    setTreatement={setTreatement}
                    date={date}
                    refetch={refetch}

                ></BookingModal>
=======
                treatement && <BookingModal treatement={treatement} date={date}></BookingModal>
>>>>>>> 24305a429f798f02435779ea09cf71bebb9a8206
            }

        </div>

    );
};

export default AvailableAppoinment;