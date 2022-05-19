import React from "react";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-container">
      <h6>Services</h6>
      <h3>Service I Provide</h3>
      <div className="h-line-services">
        <div className="first-part-line"></div>
        <div className="second-part-line"></div>
        <div className="third-part-line"></div>
      </div>
      <div className="service-provided">
        <Service title="Graphic Design" animationDelay="0.3s" />
        <Service title="Web Design" animationDelay="0.5s" />
        <Service title="UI/UX Design" animationDelay="0.7s" />
        <Service title="Frontend Development" animationDelay="0.3s" />
        <Service title="Business Analysis" animationDelay="0.5s" />
        <Service title="Digital Marketing" animationDelay="0.7s" />
      </div>
    </section>
  );
};

export default Services;
