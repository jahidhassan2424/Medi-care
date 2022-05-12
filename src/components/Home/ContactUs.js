import React from 'react';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${background})` }} className="mt-32 pb-10">
            <h2 className='text-2xl text-center text-primary font-bold pt-5'>Contact Us</h2>
            <h1 className='text-4xl text-center mt-3 text-white'>Stay Connected With Us</h1>
            <div className='text-center mt-10'>

                <input type="text" placeholder="Email Addrerss" class=" input input-bordered input-info w-full max-w-xs mb-5" /><br />
                <input type="text" placeholder="Email Addrerss" class=" input input-bordered input-info w-full max-w-xs mb-5" />
                <br />

                <textarea class="textarea textarea-secondary input input-bordered input-info w-full max-w-xs  mb-10" placeholder="Bio"></textarea>

                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section >
    );
};

export default ContactUs;