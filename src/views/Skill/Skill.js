import React from "react";
import styles from "./Skill.module.css";
export default function Skill({ name, image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  );
}
