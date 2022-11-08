import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewSection from "components/AddNewSection";
import { useParams } from "react-router-dom";
import { getCourseById } from "redux/features/course/courseThunk";
import CourseSection from "components/Section";
import CONSTANTS from "../../constants";
import styles from "./CourseContent.module.scss";

const CourseContent = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const {
    course: { selectedCourse },
    auth: { userData },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCourseById(courseId));
  }, [dispatch, courseId]);

  return (
    <article className={styles.container}>
      <h2 className={styles.mainHeading}>{selectedCourse.name}</h2>
      {userData.role === CONSTANTS.TEACHER ? (
        <AddNewSection courseId={courseId} />
      ) : null}
      <CourseSection courseId={courseId}/>
    </article>
  );
};

export default CourseContent;
