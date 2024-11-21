import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import "../../global.css";

const navLinks = ["home", "skills", "about", "products"];

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navClose = document.getElementById("nav-close");
    const navBtn = document.getElementById("nav-btn");

    if (navBtn && navClose && navbar) {
      navBtn.addEventListener("click", () => {
        navbar.classList.add("showNavbar");
      });

      navClose.addEventListener("click", () => {
        navbar.classList.remove("showNavbar");
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (navBtn && navClose && navbar) {
        navBtn.removeEventListener("click", () => {
          navbar.classList.add("showNavbar");
        });

        navClose.removeEventListener("click", () => {
          navbar.classList.remove("showNavbar");
        });
      }
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <span className="nav-btn" id="nav-btn">
        <i className="fas fa-bars"></i>
      </span>
      <nav className="navbar" id="navbar">
        <div className="navbar-header">
          <span className="nav-close" id="nav-close">
            <i className="fas fa-times"></i>
          </span>
        </div>
        <ul className="nav-items">
          {navLinks.map((link, index) => (
            <li className="link" key={index}>
              <Link to={link} className="nav-link">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
