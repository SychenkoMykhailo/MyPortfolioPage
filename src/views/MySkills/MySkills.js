import React from "react";
import styles from "./MySkills.module.css";
import Skill from "../Skill";
import SkillImages from "../SkillImages/SkillImages.js";
function MySkills() {
  return (
    <div className={styles.container}>
      {SkillImages.map(({ name, id, image }) => (
        <div key={id}>
          <Skill name={name} image={image} />
        </div>
      ))}
    </div>
  );
}
export default MySkills;
