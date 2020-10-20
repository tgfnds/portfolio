import React from "react";
import styles from "../styles/SvgIcon.module.css";

const SvgIcon = ({ path, height, name, borderColor, borderRadius }) => {
  return (
    <div
      className={styles.icon}
      style={
        borderColor
          ? { "background-color": borderColor, "border-radius": borderRadius }
          : {}
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
