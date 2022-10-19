import React from "react";
import styles from "./Registration.module.scss";
import mainPic from "img/main.png";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "components/RegistrationForm";

const Registration = () => {
  const navigate = useNavigate();

  const login = () => navigate("/login");

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={mainPic} alt="study" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Вітаю на UniStudy</h1>
        <button
          className={styles.registrationBtn}
          onClick={() => login()}
        >
          Вхід
        </button>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Registration;