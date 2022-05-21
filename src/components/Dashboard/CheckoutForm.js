import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
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
                    <button className='btn btn-primary text-white font-bold text-lg ' type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-red-500 font-bold'>{cardError}</p>
            }
        </div>
    );
};

export default CheckoutForm;