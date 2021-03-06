import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useToken from './../hooks/useToken';
import { Link } from 'react-router-dom';

const MyAppoinment = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    const [token] = useToken(user);

    useEffect(() => {
        if (user) {
            fetch(`https://secret-gorge-44931.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [user])


    return (
        <div>
            <div className="overflow-x-auto">
                {
                    bookings.length
                        ?
                        <div>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Treatement</th>
                                        <th>Payment</th>
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
                                            <td>{(b.price && !b.paid)
                                                ?
                                                <Link to={`/dashboard/payment/${b._id}`} className="btn btn-success text-white font-bold">Pay</Link>
                                                :
                                                <button className="btn btn-success text-white font-bold" disabled>Paid</button>

                                            }</td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <h1 className='text-5xl mt-20 text-center'>You have no appoinments yet!</h1>
                            <div className='text-center mt-10'><Link as={Link} to="/appoinment" className='btn btn-primary font-bold text-white text-xl  '> Book Appoinement</Link></div>
                        </div>

                }
            </div>
        </div>
    );
};

export default MyAppoinment;