import React from "react";

import "./single-service.css";
import "../../global.css";

const SingleService = ({ data }) => (
  <article className="service-card">
    <div className="service-img-container">
      <img alt="service-image" src={data.service_img} className="service-img" />
      <span className="new">new</span>
      <span className="service-icon">
        <i id="icon" className={data.service_icon}></i>
      </span>
    </div>
    <div className="service-info">
      <h4>{data.service_title}</h4>
      <p>{data.service_text}</p>
      <a className="btn service-btn" href="services.html">
        {data.service_btn}
      </a>
    </div>
  </article>
);

export default SingleService;
