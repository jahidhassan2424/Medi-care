import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div class="w-full hero my-20 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img width={"100%"} src={chair} class="max-w-xl rounded-lg shadow-2xl" />
                <div className='text-3xl'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='text-center lg:text-left'><PrimaryButton>Get Started</PrimaryButton></div>
                </div>
            </div>
        </div>
    );
};



export default Banner;