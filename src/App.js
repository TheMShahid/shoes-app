import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import SkillsPage from "./pages/skills";
import AboutPage from "./pages/about";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/skills" component={SkillsPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/products" component={ProductsPage} />
    </div>
  );
}

export default App;
