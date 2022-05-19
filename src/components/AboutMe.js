import React from "react";
import "./AboutMe.css";
import AboutMeGraph from "./AboutMeGraph";
import "./Services.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-img">
        <img
          src="https://images.unsplash.com/photo-1652122079855-3d5a9d1989d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="about me"
        />
      </div>
      <div className="about-me-info">
        <h6>About</h6>
        <h3>Why You Hire me?</h3>
        <div className="h-line-services">
          <div className="first-part-line"></div>
          <div className="second-part-line"></div>
          <div className="third-part-line"></div>
        </div>
        <p className="about-me-explain">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          assumenda excepturi vero modi nulla aut qui recusandae! Culpa sunt
          praesentium perferendis voluptatem quia veniam soluta?
        </p>
        <AboutMeGraph title="UI/UX Design" barPercent="85%" />
        <AboutMeGraph title="Web Design" barPercent="85%" />
        <AboutMeGraph title="HTML/CSS" barPercent="85%" />
        <AboutMeGraph title="Sketch" barPercent="85%" />
      </div>
    </section>
  );
};

export default AboutMe;
