import React from "react";
import ProjectView from "./ProjectView";
import "./Services.css";
import "./LatestProjects.css";

const LatestProjects = () => {
  return (
    <section className="latest-projects">
      <header>
        <div className="latest-projects-titles">
          <h5>Portfolio</h5>
          <h2>Latest Projects</h2>
          <div className="h-line-services">
            <div className="first-part-line"></div>
            <div className="second-part-line"></div>
            <div className="third-part-line"></div>
          </div>
        </div>
        <a href="https://sam-cafe.ir">All Works</a>
      </header>
      <div className="project-view-container">
        <ProjectView />
        <ProjectView />
        <ProjectView />
      </div>
    </section>
  );
};

export default LatestProjects;
