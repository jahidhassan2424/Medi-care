import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { useState } from 'react';

const Payment = () => {
    const { id } = useParams();
    const [appoinment, setAppoinment] = useState([]);
    const { isLoading, refetch } = useQuery('bookingPayment', () => fetch(`http://localhost:5000/booking/${id}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => setAppoinment(data))
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(appoinment);
    return (
        <div className='flex justify-center'>
            <div class="card w-2/5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-4xl">Payment for: {appoinment?.treatementName}</h2>
                    <p className='text-lg mt-5'>We will see you on <b>{appoinment.formatedDate}</b> at <b>{appoinment.slot}</b></p>
                    <div class="card-actions justify-center mt-10">
                        <button class="btn btn-primary text-white font-bold">CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;