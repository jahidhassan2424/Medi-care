import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appoinment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { price, patientName, email, _id } = appoinment;

    useEffect(() => {
        fetch(`https://secret-gorge-44931.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '');
        setProcessing(true);

        // Confirm card payment 
        setSuccess('');
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false);
        }
        else {
            console.log(paymentIntent);
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Congratulations! Your Payment is Succesfull');

            // Set payment info to database
            const payment = {
                appoinmentID: _id,
                transactionId: paymentIntent.id,
            }
            console.log(payment);
            fetch(`https://secret-gorge-44931.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProcessing(false);
                })

        }

        //     const payment = {
        //         appointment: _id,
        //         transactionId: paymentIntent.id
        //     }
        //     fetch(`https://secret-gorge-44931.herokuapp.com/booking/${_id}`, {
        //         method: 'PATCH',
        //         headers: {
        //             'content-type': 'application/json',
        //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        //         },
        //         body: JSON.stringify(payment)
        //     }).then(res => res.json())
        //         .then(data => {
        //             setProcessing(false);
        //             console.log(data);
        //         })

        // }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center mt-10'>
                    <button className='btn btn-primary text-white font-bold text-lg ' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-red-500 font-bold'>{cardError}</p>
            }
            {
                success && <div className='text-green-500 font-bold text-center mt-5'>
                    <p>{success}</p>
                    <p>Your Transaction ID: <b>{transactionId}</b></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;