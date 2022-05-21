import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1ZciEei3cvnsgH18KkXBrVikFBmpmiYfUBWq3HLfMeZf3q4G5h5v7uMFAftFPRu9S0nTcFK2LGlUksioo8y5xj00S78MY6rA');

const Payment = () => {

    const { id } = useParams();
    const [appoinment, setAppoinment] = useState([]);

    const { isLoading, refetch } = useQuery('bookingPayment', () => fetch(`https://secret-gorge-44931.herokuapp.com/booking/${id}`, {
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
    // console.log(appoinment);
    return (
        <div className='flex justify-center flex-col lg:flex-row gap-10'>
            <div class="card w-2/5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-4xl">Payment for: {appoinment?.treatementName}</h2>
                    <p className='text-lg mt-5'>We will see you on <b>{appoinment.formatedDate}</b> at <b>{appoinment.slot}</b></p>
                    <h2 className='text-2xl'>Amount to be Paid: <b>${appoinment.price}</b></h2>
                </div>

            </div>
            <div className="card mt-10 w-2/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-2xl font-bold'>Make Payment</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            appoinment={appoinment}
                        ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;