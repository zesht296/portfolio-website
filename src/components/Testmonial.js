import React from "react";

const Testmonial = () => {
  return (
    <div className="testmonial-container">
      <div className="testmonial-img">
        <img src="images/author-2.jpg" alt="author-2" />
      </div>
      <div className="testmonial-info">
        <div className="testmonial-name-rate">
          <div className="testmonial-name">
            <h5>Rob Hope</h5>
            <h6>CEO, OnePageLove</h6>
          </div>
          <div className="testmonial-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
        <div className="testmonial-explain">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          inventore ad quibusdam sit! Modi debitis distinctio dolore vero
          numquam tenetur?
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
