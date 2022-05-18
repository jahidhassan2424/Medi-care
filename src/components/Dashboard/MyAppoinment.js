import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyAppoinment = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div>
            <h1 className='text-3xl'>My Appoinment:{bookings.length}</h1>
        </div>
    );
};

export default MyAppoinment;