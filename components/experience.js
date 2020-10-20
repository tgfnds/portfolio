import React from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experience__title}>Experience so far</div>
      <p>
        <span className={styles.experience__date}>2018-present</span> - ITSector
        as Full-Stack Web Developer
      </p>
      <p>
        <span className={styles.experience__date}>2012-2017</span> - Degree in
        Software Engineering
      </p>
    </div>
  );
};

export default Experience;
