import CourseCard from 'components/CourseCard';
import React from 'react';
import styles from './StudentCourses.module.scss'

const StudentCourses = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Курси</h2>
      <div className={styles.courseContainer}>
      <CourseCard />
      </div>
      
    </article>
  );
}

export default StudentCourses;