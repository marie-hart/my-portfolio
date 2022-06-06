import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1 },
      { id: 2, value: "Css", xp: 1.5 },
      { id: 3, value: "Typescript", xp: 0.5 },
      { id: 5, value: "SQL", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "Docker", xp: 0.5 },
      { id: 2, value: "Bootstrap", xp: 0.5 },
      { id: 3, value: "Express", xp: 1 },
      { id: 4, value: "NestJS", xp: 0.5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          skills={languages}
          name="languaguesDisplay"
          title="Languages"
        />
        <ProgressBar
          skills={frameworks}
          name="frameworksDisplay"
          title="Frameworks"
        />
      </div>
    );
  }
}
