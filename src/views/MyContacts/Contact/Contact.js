import React from "react";
import styles from "./Contact.module.css";
function Contact({ name, image, link }) {
  const { container } = styles;
  return (
    <div className={container}>
      <a href={link} target="blank">
        <img src={image} alt={name} />
      </a>
    </div>
  );
}

export default Contact;
