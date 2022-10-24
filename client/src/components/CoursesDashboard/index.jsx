import AddNewCourse from "components/AddNewCourse ";
import CourseCard from "components/CourseCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "redux/features/course/courseThunk";
import styles from "./CoursesDashboard.module.scss";

const CoursesDashboard = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Курси</h2>
      <div className={styles.courseContainer}>
        <CourseCard />
        {userData.role === "teacher" ? <AddNewCourse /> : null}
      </div>
    </article>
  );
};

export default CoursesDashboard;
