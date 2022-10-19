import React from "react";
import styles from "./Welcome.module.scss";
import mainPic from "img/main.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const navigate = useNavigate();

  const logIn = () => navigate('/login');
  const registration = () => navigate('/registration');

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={mainPic} alt="study" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Вітаю на UniStudy</h1>
        <p className={styles.text}>Перший український сайт інтерактивних модулей для навчання</p>
        <p className={styles.text}>Зареєструйтесь як вчитель та створюйте курси та додавайте до них завдання</p>
        <p className={styles.text}>Зареєструйтесь як учень та вивчайте цікаві курси та виконуйте завдання</p>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => logIn()}>Вхід</button>
        <button className={styles.btn} onClick={() => registration()}>Реєстрація</button>
      </div>
    </div>
  );
};

export default Welcome;
