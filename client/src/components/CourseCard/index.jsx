import React from "react";
import CONSTANTS from "../../constants";
import styles from "./CourseCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCourseById } from "redux/features/course/courseThunk";

const CourseCard = () => {
  const navigate = useNavigate();
  const {courseData} = useSelector(state => state.course);
  const dispatch = useDispatch();
  

  const getCourse = (id) => {
    dispatch(getCourseById(id)); 
    navigate(`/course/${id}`);    
  }

  return (
    <>
      {courseData.map((course) => (
        <div className={styles.cardWrapper} key={course.id} onClick={() => getCourse(course.id)}>
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
