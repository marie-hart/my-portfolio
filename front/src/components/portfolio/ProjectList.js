import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Projects from './Project'

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "JavaScript", xp: 1 },
      { id: 2, value: "CSS", xp: 1.5 },
      { id: 3, value: "React", xp: 0.5 },
      { id: 4, value: "TypeScript", xp: 0.5 },
      { id: 5, value: "PostgreSQL", xp: 1 },
    ],
    selectedRadio: "javascript",
  };

  handleRadio = (event) => {
    console.log(event.target.value);
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id} className="test-un">
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          
          {projects.filter((item) => item.languages.includes(selectedRadio.toLowerCase()))
            .map((item) => {
              return <Projects key={item.id} item={item} />;
            })
          }
        </div>
      </div>
    );
  }
}
