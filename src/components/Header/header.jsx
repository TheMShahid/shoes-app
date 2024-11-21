import React from "react";

import "./header.css";
import "../../global.css";

const Header = () => (
  <>
    <header className="header">
      <div className="banner">
        <h2>over one hundred samples</h2>
        <h1>
          Specially <br /> Sneakers for Mens
        </h1>
        <a href="skills.html" className="btn banner-btn">
          explore
        </a>
      </div>
    </header>
    <div className="divider"></div>
  </>
);

export default Header;
