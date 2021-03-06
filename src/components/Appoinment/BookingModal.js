import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
const axios = require('axios');

const BookingModal = ({ treatement, date, setTreatement, refetch }) => {
    const { name, slots, price } = treatement;
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }
    const handleBookAppoinment = async (event) => {
        event.preventDefault();
        const slot = event.target.slot?.value;
        const phone = event.target.phone?.value;
        const bookingInfo = {
            treatementName: name,
            formatedDate: format(date, "PP"),
            slot: slot,
            patientName: user?.displayName,
            email: user?.email,
            phone: phone,
            price: price
        }

        // Axios method
        const body = bookingInfo;
        const result = await axios.post(`https://secret-gorge-44931.herokuapp.com/service`, body)
        console.log(result);
        if (result.data.success) {
            toast.success(`Appoinment set on ${bookingInfo.formatedDate} at ${bookingInfo.slot}`)
            setTreatement(null);
            refetch();
        }
        else {
            toast.error(`Already have an appoinment on ${bookingInfo.formatedDate} `)
        }

    }

    const deleteAll = async (event) => {
        event.preventDefault();
        const result = await axios.delete(`https://secret-gorge-44931.herokuapp.com/service`)
        console.log(result);
        toast.success("All Data Deleted")
    }


    return (
        <div>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleBookAppoinment}>
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
                            <div>
                                <button className='btn btn-secondary text-white text-xl mt-3 font-bold' type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >

    );

}

export default BookingModal;