import React from "react";
import CONSTANTS from "../../constants";
import styles from "./CourseCard.module.scss";
import { useSelector } from "react-redux";

const CourseCard = () => {
  const {courseData} = useSelector(state => state.course);

  return (
    <>
      {courseData.map((course) => (
        <div className={styles.cardWrapper} key={course.id}>
            <img
              src={`${CONSTANTS.PUBLIC_URL}${course.imgPath}`}
              alt={course.name}
              className={styles.cardImg}
            />
          <div className={styles.cardImg}></div>
          <h2 className={styles.heading}>{course.name}</h2>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
