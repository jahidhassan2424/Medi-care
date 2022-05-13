import React from 'react';
import PrimaryButton from './../Shared/PrimaryButton';
import Footer from './../Shared/Footer';
import AppoinmentSlots from './AppoinmentSlots';

const AppoinmentSingle = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-full shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title justify-center text-secondary font-bold">{name}</h2>
                <div>
                    {
                        slots.length > 0
                            ?
                            < span > {slots[0]}</span>
                            :
                            <span className='text-red-500 font-bold'>No slots available</span>
                    }
                </div>
                <span>{slots.length} Space Available</span>
                <div class="card-actions justify-center">
                    <button className='btn btn-secondary text-white text-lg' disabled={slots.length === 0}>Book Appoinment</button>
                </div>

            </div>
        </div >
    );
};

export default AppoinmentSingle;