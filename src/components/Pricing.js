import React from "react";
import Plans from "./Plans";
import "./Pricing.css";
import "./Services.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <img src="images/shape-3.png" alt="shape-3" />
      <h6>Pricing</h6>
      <h2>Pricing Plans</h2>
      <div className="h-line-services">
        <div className="first-part-line"></div>
        <div className="second-part-line"></div>
        <div className="third-part-line"></div>
      </div>
      <div className="plans-container">
        <Plans />
        <Plans />
        <Plans />
      </div>
    </section>
  );
};

export default Pricing;
