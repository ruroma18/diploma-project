import React, { useEffect } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import TaskIcon from "@mui/icons-material/Task";
import { useDispatch, useSelector } from "react-redux";
import { getSections } from "redux/features/section/sectionThunk";
import styles from "./Section.module.scss";
import AddNewMaterial from "components/AddNewMaterial";

const Section = ({ courseId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSections(courseId));
  }, [dispatch, courseId]);

  const { sectionData } = useSelector((state) => state.section);
  const { userData } = useSelector(state => state.auth);

  return (
    <ul>
      {sectionData.map((section) => (
        <li key={`${section.id}`}>
          <h3 className={styles.itemHeading}>
            Розділ {section.id}. {section.name}
          </h3>
          {userData.role === 'teacher' ? <AddNewMaterial sectionId={section.id} /> : null}
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
  );
};

export default Section;
