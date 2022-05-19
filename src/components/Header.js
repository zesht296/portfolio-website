import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="social-media-header">
        <ul>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-linkedin-in"></i>
          </li>
        </ul>
      </div>
      <div className="header-content">
        <h4>Hello I'm</h4>
        <h2>John Smith</h2>
        <h6>Professional Freelance Web Designer</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque
          neque doloremque, aspernatur atque assumenda. Et officiis nostrum
          veniam esse aliquam voluptate unde atque qui.
        </p>
        <div className="header-hire-me-link">
          <a href="https://sam-cafe.ir">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
