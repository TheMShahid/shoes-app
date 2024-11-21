import React from "react";
import Header from "../components/Header/header";
import SkillsList from "../components/skills-list/skills-list";
import About from "../components/about/about";
import Product from "../components/products/products";
import ServicesList from "../components/services-list/services-list";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

import "../global.css";

const HomePage = () => (
  <div>
    <Navbar />
    <Header />
    <SkillsList />
    <About />
    <Product />
    <ServicesList />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;
