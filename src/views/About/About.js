import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      Junior Web Developer. <br />
      Very good knowledge of
      {" Javascript (ES5, ES6+), React, Node, CSS, HTML. "}
      <br />
      Intrested to grow in web development and improve my skills. <br />
      Open to learn new technologies and frameworks. <br />
      Skilled in communication and teamwork.
      <br />
      Finished Javascript Developer course in{" "}
      <a href="https://skillup.ua/" target="blank">
        SkillUp
      </a>
      .<br />
      If you are seeking developers for your project, I would be glad to work
      with you on it!
    </div>
  );
}
