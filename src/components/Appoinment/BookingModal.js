import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatement, date }) => {
    const { name, slots } = treatement;

    return (
        <div>


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg mb-10">{name}</h3>
                    <input type="text" placeholder="Type here" class="input  w-full max-w-xs bg-zinc-400" disabled value={"Date"} />
                    <input type="text" placeholder="Type here" class="input  w-full max-w-xs bg-zinc-400" disabled value={slots} />
                    <div class="modal-action flex justify-center">
                        <label for="booking-modal " class="btn">SUBMIT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;