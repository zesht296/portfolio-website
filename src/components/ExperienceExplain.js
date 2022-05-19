import React from "react";

const ExperienceExplain = ({ left }) => {
  return (
    <>
      <div className="graphic-designer">
        {left && (
          <div className="experience-title">
            <h2>Graphic Designer</h2>
            <h5>PageBulb</h5>
            <h5>March 2019 - August 2024</h5>
          </div>
        )}
        {left && <div className="vertical-line-experience"></div>}
        <div className="explain">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officiis voluptate quos aliquid excepturi, deleniti fuga hic iusto
          assumenda debitis esse ratione aspernatur, at blanditiis perferendis
          architecto nemo modi dignissimos consequuntur tempora voluptatibus ad
          rem.
        </div>
        {!left && <div className="vertical-line-experience"></div>}
        {!left && (
          <div className="experience-title">
            <h2>Graphic Designer</h2>
            <h5>PageBulb</h5>
            <h5>March 2019 - August 2024</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default ExperienceExplain;
