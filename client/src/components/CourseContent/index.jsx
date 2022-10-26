import React, { useEffect } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import TaskIcon from "@mui/icons-material/Task";
import styles from "./CourseContent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSections } from "redux/features/section/sectionThunk";

const CourseContent = () => {
  const dispatch = useDispatch();

  const { selectedCourse } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getSections(selectedCourse.id));
  }, [dispatch, selectedCourse.id]);

  const { sectionData } = useSelector((state) => state.section);

  return (
    <article className={styles.container}>
      <h2 className={styles.mainHeading}>{selectedCourse.name}</h2>
      <ul>
        {sectionData.map((section) => (
          <li key={`${section.id}`}>
            <h3 className={styles.itemHeading}>
              Розділ {section.id}. {section.name}
            </h3>
            <div className={styles.materialWrapper}>
              <ArticleIcon />
              <a className={styles.materialLink} href="#">
                Лекція
              </a>
            </div>
            <div className={styles.materialWrapper}>
              <TaskIcon />
              <p className={styles.materialLink}>Завдання до розділу</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CourseContent;
