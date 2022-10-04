import React from "react";
import styles from "./CourseCard.module.scss";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const navigate = useNavigate();

  const toCourse = () => {
    navigate("/course");
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper} onClick={toCourse}>
        <div className={styles.cardImg}></div>
        <h2 className={styles.heading}>Кібербезпека у середній школі</h2>
      </div>
    </div>
  );
};

export default CourseCard;
