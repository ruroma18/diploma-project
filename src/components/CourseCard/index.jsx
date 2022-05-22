import React from 'react';
import styles from './CourseCard.module.scss'

const CourseCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}></div>
        <h2 className={styles.heading}>Кібербезпека у середній школі</h2>
      </div>
      
    </div>
  );
}

export default CourseCard;
