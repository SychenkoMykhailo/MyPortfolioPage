import React from "react";
import styles from "./MyPortfolio.module.css";
export default function MyPortfolio() {
  const myworks = [
    { name: "", link: "" },
    { name: "", link: "" },
    { name: "", link: "" },
    { name: "", link: "" },
    { name: "", link: "" },
  ];
  const { container, links } = styles;
  return (
    <div className={container}>
      <div className={links}>
        {/* <a href="#">Work 1</a>
        <a href="#">Work 2</a>
        <a href="#">Work 3</a>
        <a href="#">Work 4</a>
        <a href="#">Work 5</a>
        <a href="#">Work 6</a> */}
      </div>
    </div>
  );
}
