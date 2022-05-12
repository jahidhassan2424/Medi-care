import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ date }) => {
    return (
        <div className='mt-32'>
            <p className='text-2xl text-secondary font-bold text-center'>Available appoinment on  {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppoinment;