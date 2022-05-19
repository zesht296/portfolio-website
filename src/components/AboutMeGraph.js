import React from "react";

const AboutMeGraph = ({ title, barPercent }) => {
  return (
    <div className="about-me-bar-graph">
      <div className="bar-status">
        <h4>{title}</h4>
        <h4>{barPercent}</h4>
      </div>
      <div className="bar-line-inner">
        <div className="bar-line"></div>
      </div>
    </div>
  );
};

export default AboutMeGraph;
