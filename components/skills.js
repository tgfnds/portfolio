import React from "react";
import styles from "../styles/Skills.module.css";
import SvgIcon from "./svg-icon";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__title}>Skills</div>
      <p>Used Professionally</p>
      <div className={styles.skills__icons}>
        <SvgIcon
          borderColor="#1b0736"
          borderRadius="99999px"
          path="../images/dot-net.svg"
          height={32}
          name="dotnet"
        />
        <SvgIcon path="../images/html5.svg" height={36} name="html5" />
        <SvgIcon path="../images/css3.svg" height={36} name="css3" />
        <SvgIcon path="../images/sass.svg" height={36} name="sass" />
        <SvgIcon path="../images/c--4.svg" height={36} name="c#" />
        <SvgIcon
          path="../images/javascript.svg"
          height={36}
          name="javascript"
        />
        <SvgIcon
          path="../images/microsoftsqlserver.svg"
          height={36}
          name="sqlserver"
        />
      </div>
      <p>As a Hobby</p>
      <div className={styles.skills__icons}>
        <SvgIcon path="../images/react.svg" height={36} name="react" />
        <SvgIcon
          path="../images/typescript.svg"
          height={36}
          name="typescript"
        />
        <SvgIcon
          path="../images/tailwindcss.svg"
          height={36}
          name="tailwindcss"
        />
        <SvgIcon path="../images/mongodb.svg" height={36} name="mongodb" />
        <SvgIcon path="../images/git.svg" height={36} name="git" />
        <SvgIcon path="../images/npm.svg" height={36} name="npm" />
      </div>
      <p>Learning/Having fun</p>
      <div className={styles.skills__icons}>
        <SvgIcon path="../images/flutter.svg" height={36} name="flutter" />
        <SvgIcon path="../images/vue-dot-js.svg" height={36} name="vue" />
        <SvgIcon path="../images/django.svg" height={36} name="django" />
        <SvgIcon path="../images/python.svg" height={36} name="python" />
      </div>
      {/* <p>.NET, Django</p> */}
    </div>
  );
};

export default Skills;
