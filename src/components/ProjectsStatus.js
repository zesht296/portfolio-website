import React from "react";
import "./ProjectsStatus.css";

const ProjectsStatus = () => {
  return (
    <section className="status-container">
      <div className="status">
        <div className="icon">
          <i class="fa-solid fa-check"></i>
        </div>
        <div className="status-info">
          <h3>123+</h3>
          <h6>Projects Done</h6>
        </div>
      </div>
      <div className="status">
        <div className="icon">
          <i class="fa-solid fa-face-smile"></i>
        </div>
        <div className="status-info">
          <h3>70</h3>
          <h6>Satisfied Clients</h6>
        </div>
      </div>
      <div className="status">
        <div className="icon">
          <i class="fa-solid fa-bolt-lightning"></i>
        </div>
        <div className="status-info">
          <h3>15</h3>
          <h6>Active Projects</h6>
        </div>
      </div>
      <div className="status">
        <div className="icon">
          <i class="fa-solid fa-mountain-sun"></i>
        </div>
        <div className="status-info">
          <h3>5</h3>
          <h6>Years Experience</h6>
        </div>
      </div>
    </section>
  );
};

export default ProjectsStatus;
