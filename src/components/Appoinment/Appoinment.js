import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div >
            <div className='mx-auto lg:container'>
                <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
                <div className='p-5'>
                    <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
                </div>
            </div>
            <div>
                {/* <!-- The button to open modal --> */}
                <label for="my-modal" class="btn modal-button">open modal</label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                            <label for="my-modal" class="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div >
    );
};

export default Appoinment;