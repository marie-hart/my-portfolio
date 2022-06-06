import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img src="./media/moi.png" alt="profil-pic" />
            <h3>Marie Hart de Keating</h3>
          </div>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/" activeclassname="navActive">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/competences" activeclassname="navActive">
                <i className="fas fa-mountain"></i>
                <span>compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeclassname="navActive">
                <i className="fas fa-images"></i>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="navActive">
                <i className="fas fa-address-book"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>

          <div className="signature">
            <p>Copyright 2022</p>
          </div>
        </div>
      </div>
  );
};

export default Navigation;
