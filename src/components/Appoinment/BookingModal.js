import React from 'react';
import { format } from 'date-fns';
<<<<<<< HEAD
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
const axios = require('axios');

const BookingModal = ({ treatement, date, setTreatement, refetch }) => {
    const { name, slots } = treatement;
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
            phone: phone
        }

        // Axios method
        const body = bookingInfo;
        const result = await axios.post(`http://localhost:5000/service`, body)
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
        const result = await axios.delete(`http://localhost:5000/service`)
        console.log(result);
        toast.success("All Data Deleted")
    }


    const BookingModal = ({ treatement, date }) => {
        const { name, slots } = treatement;

        return (
            <div>


                {/* <!-- Put this part before </body> tag-- > */}

            </div>

        );
    };
}

export default BookingModal;