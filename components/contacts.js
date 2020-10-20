import React from "react";
import styles from "../styles/Contacts.module.css";
import SvgIcon from "./svg-icon";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href="" className={styles.contact}>
        <SvgIcon path="../images/linkedin.svg" height={22} name="linkedin" />
        <span className={styles.contact__description}>Connect with me</span>
      </a>
      <a href="https://github.com/vsctiago7" className={styles.contact}>
        <SvgIcon path="../images/github.svg" height={24} name="github" />
        <span className={styles.contact__description}>
          Check out my projects
        </span>
      </a>
      <a href="mailto:vsctiago7@gmail.com" className={styles.contact}>
        <SvgIcon path="../images/mail.svg" height={22} name="mail" />
        <span className={styles.contact__description}>Email me</span>
      </a>
    </div>
  );
};

export default Contacts;
