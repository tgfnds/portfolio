import React from "react";
import styles from "../styles/Contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href="" className={styles.contact}>
        <FontAwesomeIcon icon={faLinkedin} height={22} color="#0077b5" />
        <span className={styles.contact__description}>Connect with me</span>
      </a>
      <a href="https://github.com/vsctiago7" className={styles.contact}>
        <FontAwesomeIcon icon={faGithub} height={22} color="#EEE" />
        <span className={styles.contact__description}>
          Check out my projects
        </span>
      </a>
      <a href="mailto:vsctiago7@gmail.com" className={styles.contact}>
        <FontAwesomeIcon icon={faEnvelope} height={22} color="#EEE" />
        <span className={styles.contact__description}>Email me</span>
      </a>
    </div>
  );
};

export default Contacts;
