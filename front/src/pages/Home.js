import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <h1>Marie Hart de Keating</h1>
        <h2>Développeur Web Fullstack</h2>
        <div className="pdf">
          <a href="./media/cv.pdf" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
