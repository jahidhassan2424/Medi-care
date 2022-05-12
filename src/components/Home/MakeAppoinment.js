import React from 'react';
import appoinment from '../../assets/images/appointment.png';  
import doctor from '../../assets/images/doctor-small.png';  
import PrimaryButton from './../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <div class="hero  " style={{background:`url(${appoinment})`}}>
  <div class="hero-content flex-col lg:flex-row">
    <img src={doctor} class="max-w-lg rounded-lg shadow-2xl mt-[-130px] mb-0" />
    <section className='text-white'>
      <h1 class="text-3xl font-bold text-primary mb-8">Appoinment</h1>
      <h1 class="text-5xl font-bold">Make an appointment Today</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </section>
  </div>
</div>
    );
};

export default MakeAppoinment;