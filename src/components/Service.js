import React from "react";

const Service = ({ title, animationDelay }) => {
  return (
    <div className="service-container" style={{ animationDelay }}>
      <h5>{title}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim
        laudantium voluptate. Facere nobis ea in tempore aliquam sed animi.
      </p>
    </div>
  );
};

export default Service;
