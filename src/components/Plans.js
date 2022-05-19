import React from "react";

const Plans = () => {
  return (
    <div className="plans">
      <h3>Basic</h3>
      <h2>$75</h2>
      <h6>Only PSD Service</h6>
      <hr />
      <ul className="items">
        <li>
          <i class="fa-solid fa-check"></i> Graphic Design
        </li>
        <li>
          <i class="fa-solid fa-check"></i> Web Design
        </li>
        <li>
          <i class="fa-solid fa-xmark"></i> UI/UX
        </li>
        <li>
          <i class="fa-solid fa-xmark"></i> HTML/CSS
        </li>
        <li>
          <i class="fa-solid fa-xmark"></i> SEO Marketing
        </li>
        <li>
          <i class="fa-solid fa-xmark"></i> Business Analysis
        </li>
      </ul>
      <div className="choose-plan-container">
        <a href="https://sam-cafe.ir" className="choose-plan">
          Choose plan
        </a>
      </div>
    </div>
  );
};

export default Plans;
