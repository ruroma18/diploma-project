import React from "react";
import styles from "./LogIn.module.scss";
import mainPic from "./img/main.png";
import LogInForm from "../LogInForm";

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={mainPic} alt="study" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Вітаю на UniStudy</h1>
      </div>
      <LogInForm />
    </div>
  );
};

export default LogIn;
