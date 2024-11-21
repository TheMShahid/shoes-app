import React from "react";

import "./about.css";
import "../../global.css";

const About = () => (
  <section className="about">
    <div className="section-center clearfix">
      <article className="about-img">
        <div className="about-picture-container">
          <img
            src={require("../../assets/about.jpg")}
            className="about-picture"
            alt="about-picture"
          />
        </div>
      </article>
      <article className="about-info">
        <div className="section-title">
          <h3>our about</h3>
          <h2>shoes center</h2>
        </div>
        <p className="about-text">
          We're a small, family-owned store specializing in handmade shoes. Our
          mission is to create comfortable and stylish shoes that cater to the
          needs of our customers. We believe in empowering our customers with
          the best possible shoes, so they can enjoy their lives to the fullest.
        </p>
        <a href="about.html" className="btn">
          learn more
        </a>
      </article>
    </div>
  </section>
);

export default About;
