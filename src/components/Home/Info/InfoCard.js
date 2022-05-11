import React from 'react';


const InfoCard = ({ img, title, bgClass }) => {
    return (
        <div class={`card lg:card-side p-5 lg:pl-12   shadow-xl  ${bgClass}`} >
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body  text-white flex lg: justify-center ">
                <div className='text-center'><h2 class="card-title ">{title}</h2></div>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>

        </div >
    );
};

export default InfoCard;