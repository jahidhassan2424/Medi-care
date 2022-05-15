import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from '../Shared/Loading';

const BookingModal = ({ treatement, date }) => {
    const { name, slots } = treatement;
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }
    const handleBookAppoinment = async (event) => {
        const slot = event.target.slot.value;
        const bookingInfo = {
            treatementName: name,
            formatedDate: format(date, "PP"),
            slot,
            patientName: user?.displayName,
            email: user?.email,
            phone: event.target.phone.value


        }
    }
    return (
        <div>


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action absolute right-[4%] top-0">
                        <label htmlFor="booking-modal" className="btn rounded-full text-2xl">X</label>
                    </div>
                    <h3 className="font-bold text-2xl mb-10">{name}</h3>
                    <div className='flex flex-col justify-center items-center'>
                        <input type="text" value={format(date, 'PP')} className="input  w-full max-w-xs bg-zinc-400 text-xl mb-5" disabled />

                        {/* Select an Option */}
                        <select name="slot" className="select select-bordered w-full max-w-xs text-lg">
                            {/* <option disabled selected>Who shot first?</option> */}
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        {/* <input type="text"  className="input  w-full max-w-xs bg-zinc-400 text-xl mb-5" disabled /> */}
                        <input type="text" name="name" placeholder='Full Name' value={user?.displayName || ''} disabled className="input  w-full input-bordered max-w-xs  text-xl mb-5 mt-5" />
                        <input type="email" name="email" placeholder='Email' value={user?.email || ''} disabled className="input  w-full input-bordered max-w-xs  text-xl mb-5" />
                        <input type="number" name="phone" placeholder='Phone Number ' className="input  w-full input-bordered max-w-xs  text-xl mb-5" />
                        <button className='btn btn-secondary text-white text-xl mt-3 font-bold' type="submit">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;