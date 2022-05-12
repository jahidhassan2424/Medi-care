import React from "react";
import quote from "../../assets/icons/quote.svg";
import TestimonialSingle from "./TestimonialSingle";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Testimonial = () => {
  return (
    <section className="mt-20 m-16">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-primary">Testimonial</h3>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img width={"60%"} src={quote} alt="" />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex justify-between mt-20">
        <TestimonialSingle img={people1} name="Winson Herry">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </TestimonialSingle>

        <TestimonialSingle img={people2} name="Winson Herry">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </TestimonialSingle>

        <TestimonialSingle img={people3} name="Winson Herry">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </TestimonialSingle>

      </div>
    </section>
  );
};

export default Testimonial;
