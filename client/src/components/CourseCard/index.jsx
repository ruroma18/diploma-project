import React from "react";
import CONSTANTS from "../../constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./CourseCard.module.scss";

const CourseCard = ({ userRole }) => {
  const navigate = useNavigate();
  const { courseData } = useSelector((state) => state.course);

  const getCourse = (id) => {
    navigate(`/course/${id}`);
  };

  const deleteCourse = (id) => {
    console.log(id)
  }

  return (
    <>
      {courseData.map((course) => (
        <div className={styles.cardWrapper}>
          <div
            className={styles.imgWrapper}
            key={course.id}
            onClick={() => getCourse(course.id)}
          >
            <img
              src={`${CONSTANTS.PUBLIC_IMAGE_URL}${course.imgPath}`}
              alt={course.name}
              className={styles.cardImg}
            />
          </div>
          <div className={styles.nameContainer}>
            <h2 className={styles.heading}>{course.name}</h2>
            {userRole === CONSTANTS.TEACHER ? (
              <DeleteIcon
                className={styles.deleteIcon}
                onClick={() => deleteCourse(course.id)}
              />
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
