import React from "react";

const ProgressBar = (props) => {
  // console.log('test ici', props.skills);

  return (
    <div className={props.name}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'Expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>
      <div>
        {props.skills.map((item) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";
          return (
            <div key={item.id} classNames="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProgressBar;
