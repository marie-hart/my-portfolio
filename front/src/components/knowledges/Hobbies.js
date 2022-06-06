import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-dumbbell"></i>
          <span>CrossFit</span>
        </li>
        <li className="hobby">
          <i className="fas fa-horse"></i>
          <span>Equitation</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Randonnées</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Espace</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book"></i>
          <span>Lecture</span>
        </li>
      </ul>
    </div>
  );
};
export default Hobbies;
