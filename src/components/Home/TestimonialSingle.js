import React from "react";

const TestimonialSingle = ({ img, name, children }) => {
  return (
    <div className="card w-full  shadow-xl p-5">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{children}</p>
      </div>
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
    </div>
  );
};

export default TestimonialSingle;
