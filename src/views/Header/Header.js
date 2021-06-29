import React from "react";
import styles from "./Header.module.css";
import avatar from "../../images/myPhoto.png";
import MyContacts from "../MyContacts";
function Header() {
  const { container, image_container, text_container, name, job, text } =
    styles;
  return (
    <>
      <div className={container}>
        <div className={image_container}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={text_container}>
          <div className={name}>Michael Sychenko </div>
          <div className={job}>Front-end Developer</div>
          <div className={text}>Dnipro, Ukraine. Open for remote work!</div>
          <MyContacts />
        </div>
      </div>
    </>
  );
}

export default Header;
