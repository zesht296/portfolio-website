import React from "react";
import "./Testmonials.css";
import "./Services.css";
import Testmonial from "./Testmonial";

const Testmonials = () => {
  return (
    <section className="testmonials-container">
      <h5>Testmonials</h5>
      <h2>What Clients Says</h2>
      <div className="h-line-services">
        <div className="first-part-line"></div>
        <div className="second-part-line"></div>
        <div className="third-part-line"></div>
      </div>
      <div className="testmonials">
        <Testmonial />
        <Testmonial />
      </div>
    </section>
  );
};

export default Testmonials;
