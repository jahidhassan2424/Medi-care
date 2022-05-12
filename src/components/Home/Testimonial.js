import React from "react";
import quote from "../../assets/icons/quote.svg";

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
      <div>

      </div>
    </section>
  );
};

export default Testimonial;
