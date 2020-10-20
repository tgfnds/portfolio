import React from "react";
import styles from "../styles/SvgIcon.module.css";

const SvgIcon = ({ path, height, name, bgColor, borderRadius, animated }) => {
  return (
    <div
      className={animated ? `${styles.icon} ${styles.animated}` : styles.icon}
      style={
        bgColor ? { backgroundColor: bgColor, borderRadius: borderRadius } : {}
      }
    >
      <object data={path} type="image/svg+xml" height={height}>
        {name}
      </object>
      <div className={styles.icon__tooltip}>{name.toUpperCase()}</div>
    </div>
  );
};

export default SvgIcon;
