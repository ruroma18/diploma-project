import React, { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import TaskIcon from "@mui/icons-material/Task";
import styles from "./CourseFilling.module.scss";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

const CourseFilling = () => {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();


  const toggleOpenContent = (id) => {
    const newCourse = course.map((courseItem) => ({
      ...courseItem,
      hidden: courseItem.id === id ? !courseItem.hidden : courseItem.hidden,
    }));
    return setCourse(newCourse);
  };

  const startInteraativeTask = () => navigate("/task")

  return (
    <article className={styles.container}>
      <h2 className={styles.mainHeading}>Кібербезпека у середній школі</h2>
      <ul>
        {course.map((courseItem) => (
          <li key={`${courseItem.id}-${courseItem.name}`}>
            <h3
              className={styles.itemHeading}
              onClick={() => toggleOpenContent(courseItem.id)}
            >
              Розділ {courseItem.id}. {courseItem.name}
            </h3>
            { courseItem.text !== false &&
            <>
            <section
              className={cx({
                [styles.themeContentHidden]: !courseItem.hidden,
                [styles.themeContent]: courseItem.hidden,
              })}
            >
              <div className={styles.materialWrapper}>
                <ArticleIcon />
                <a className={styles.materialLink} href={courseItem.textLink}>
                  Лекція
                </a>
              </div>
              <div className={styles.materialWrapper}>
              <TaskIcon />
              <p className={styles.materialLink} onClick={startInteraativeTask}>Завдання до розділу</p>
              </div>
            </section></>}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CourseFilling;
