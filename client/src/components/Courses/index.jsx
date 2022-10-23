import AddNewCourse from "components/AddNewCourse ";
import CourseCard from "components/CourseCard";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Courses.module.scss";

const Courses = () => {

  const {userData} = useSelector((state) => state.auth);

  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Курси</h2>
      <div className={styles.courseContainer}>
        {/* <CourseCard /> */}
        {userData.role === 'teacher' ? <AddNewCourse /> : null}
      </div>
    </article>
  );
};

export default Courses;
