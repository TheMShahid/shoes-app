import React from "react";

import "./footer.css";
import "../../global.css";

const socialIcons = [
  "fab fa-facebook",
  "fab fa-twitter",
  "fab fa-whatsapp",
  "fab fa-instagram",
  "fab fa-youtube",
];

const links = [
  "https://www.facebook.com",
  "https://www.twitter.com/TheMShahid",
  "https://www.whatsapp.com",
  "https://www.instagram.com",
  "https://www.youtube.com",
];

const Footer = () => (
  <footer className="footer">
    <div className="section-center">
      <div className="social-icons">
        {links.map((link) => (
          <a
            key={links.indexOf(link)}
            href={link + "/themshahid"}
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer">
            <i className={socialIcons[links.indexOf(link)]} />
          </a>
        ))}
      </div>
      <h4 className="footer-text">
        &copy; <span id="date">2024</span>
        <span className="company">shoes app</span>
        all rights reserved.
      </h4>
    </div>
  </footer>
);

export default Footer;
