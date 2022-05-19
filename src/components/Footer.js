import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <img src="images/logo.svg" alt="logo" />
      <div className="social-media-footer">
        <div className="social-media-icon">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className="social-media-icon">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="social-media-icon">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="social-media-icon">
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div className="email-intro">
        <h2>someone@example.com</h2>
      </div>
      <div className="navbar-footer">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="copyright">
        <h6>
          Template Designed and Developed by <span>UIdeck</span>
        </h6>
      </div>
    </section>
  );
};

export default Footer;
