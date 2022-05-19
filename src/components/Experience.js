import React from "react";
import "./Experience.css";
import "./Services.css";
import ExperienceExplain from "./ExperienceExplain";
import HireMe from "./HireMe";

const Experience = () => {
  return (
    <section className="work-experience">
      <h5>Experience</h5>
      <h2>Work Experience</h2>
      <div className="h-line-services">
        <div className="first-part-line"></div>
        <div className="second-part-line"></div>
        <div className="third-part-line"></div>
      </div>
      <div className="experiences">
        <ExperienceExplain />
        <ExperienceExplain left={true} />
        <ExperienceExplain />
      </div>
      <HireMe />
    </section>
  );
};

export default Experience;
