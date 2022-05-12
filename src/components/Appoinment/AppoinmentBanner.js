import React from 'react';
import './AppoinmentBanner.css';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div class="hero mt-20 ">
            <div class="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} class="max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}

                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;