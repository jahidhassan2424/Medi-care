import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyAppoinment = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [user])


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((b, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{b.patientName}</td>
                                <td>{b.formatedDate}</td>
                                <td>{b.slot}</td>
                                <td>{b.treatementName}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;