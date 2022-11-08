import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSections } from "redux/features/section/sectionThunk";
import styles from "./Section.module.scss";
import AddNewMaterial from "components/AddNewMaterial";
import Material from "components/Material";
import { getMaterials } from "redux/features/material/materialThunk";
import AddNewTask from "components/AddNewTask";
import TaskLink from "components/TaskLink";
import { getTask } from "redux/features/task/taskThunk";
import CONSTANTS from "../../constants";

const Section = ({ courseId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSections(courseId));
    dispatch(getMaterials(courseId));
    dispatch(getTask(courseId));
  }, [dispatch, courseId]);

  const { sectionData } = useSelector((state) => state.section);
  const { userData } = useSelector((state) => state.auth);

  return (
    <ul>
      {sectionData.map((section, id) => (
        <li key={`${section.id}`}>
          <h3 className={styles.itemHeading}>
            Розділ {id + 1}. {section.name}
          </h3>
          {userData.role === CONSTANTS.TEACHER ? (
            <div>
              <AddNewMaterial sectionId={section.id} />
              <AddNewTask sectionId={section.id} />
            </div>
          ) : null}
          <Material id={section.id} userRole={userData.role}/>
          <TaskLink id={section.id} userRole={userData.role}/>
        </li>
      ))}
    </ul>
  );
};

export default Section;
