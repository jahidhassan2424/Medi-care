import React from 'react';
import appoinment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from './../Shared/PrimaryButton';

const MakeAppoinment = () => {
  return (
    <div className="hero w-full mt-10 lg:mt-64 " style={{ background: `url(${appoinment})` }}>
      <div className="hero-content flex-col lg:flex-row">
        <img src={doctor} className="lg:block hidden max-w-lg w-full rounded-lg  mt-[-130px] mb-0" />
        <section className='text-white w-full p-3 '>
          <h1 className="text-3xl font-bold text-primary mb-8">Appoinment</h1>
          <h1 className="text-5xl font-bold">Make an appointment Today</h1>
          <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </section>
      </div>
    </div>
  );
};

export default MakeAppoinment;