import React from "react";
import Navigation from "../components/Navigation";
import ProjectList from "../components/portfolio/ProjectList";
import '../components/portfolio/portfolio.scss'

const Portfolio = () => {
  return (
    <div className="global-container">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Portfolio;
