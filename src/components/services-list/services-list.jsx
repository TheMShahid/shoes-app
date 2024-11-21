import React from "react";
import SingleService from "../single-service/single-service";
import ServicesData from "./services-data";

import "./services-list.css";
import "../../global.css";

const ServicesList = () => (
  <section className="section">
    {/* section title */}
    <div className="section-title services-title">
      <h3>explore</h3>
      <h2>our services</h2>
    </div>
    <div className="section-center clearfix">
      {ServicesData.map((serviceData) => (
        <SingleService key={serviceData.id} data={serviceData} />
      ))}
    </div>
  </section>
);

export default ServicesList;
