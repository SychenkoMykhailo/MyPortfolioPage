import React from "react";
import Contact from "./Contact";
import gmailLogo from "../../logos/gmail-logo.png";
import telegramLogo from "../../logos/telegram-logo.png";
import viberLogo from "../../logos/viber-logo.png";
import whatsappLogo from "../../logos/whatsapp-logo.png";
import linkedinLogo from "../../logos/linkedin-logo.png";
import styles from "./MyContacts.module.css";

const contactList = [
  {
    name: "telegram",
    image: telegramLogo,
    src: "https://t-do.ru/michael_sychenko",
  },
  {
    name: "gmail",
    image: gmailLogo,
    src: "mailto:michael.sychenko@gmail.com",
  },
  {
    name: "viber",
    image: viberLogo,
    src: "viber://chat?number=%2B380967757866",
  },
  { name: "whatsapp", image: whatsappLogo, src: "https://wa.me/380967757866" },
  {
    name: "linkedin",
    image: linkedinLogo,
    src: "https://www.linkedin.com/in/michael-sychenko-53790220a/",
  },
];
function MyContacts() {
  return (
    <div className={styles.container}>
      {contactList.map(({ name, image, src }) => (
        <Contact name={name} image={image} link={src} key={name} />
      ))}
    </div>
  );
}

export default MyContacts;
