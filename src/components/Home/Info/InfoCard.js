import React from 'react';



const InfoCard = ({ img, title, bgClass }) => {
    return (
        <div className={`card lg:card-side p-5 lg:pl-12   shadow-xl  ${bgClass}`} >
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body  text-white flex lg: justify-center ">
                <div className='text-center'><h2 className="card-title ">{title}</h2></div>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>

        </div >
    );
};

export default InfoCard;