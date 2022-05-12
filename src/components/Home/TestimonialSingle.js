import React from "react";

const TestimonialSingle = ({ img, name, children }) => {
  return (
    <div class="card w-96  shadow-xl p-5">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{children}</p>
      </div>
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
    </div>
  );
};

export default TestimonialSingle;
