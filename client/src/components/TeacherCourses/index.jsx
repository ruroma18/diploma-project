import AddNewCourse from 'components/AddNewCourse ';
import CourseCard from 'components/CourseCard';
import React from 'react';
import styles from './TeacherCourses.module.scss'

const TeacherCourses = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Курси</h2>
      <div className={styles.courseContainer}>
      <CourseCard />
      <AddNewCourse />
      </div>
      
    </article>
  );
}

export default TeacherCourses;
