import React from "react";
import { useSelector } from "react-redux";
import TaskIcon from '@mui/icons-material/Task';
import styles from './TaskLink.module.scss';
import { useNavigate } from "react-router-dom";

const TaskLink = ({id}) => {
  const { taskData } = useSelector((state) => state.task);
  console.log(taskData)
  const navigate = useNavigate()

  const currentSectionTask = taskData.filter(
    (task) => task.sectionId === id
  );

  const goToTask = (taskId) => {
    navigate(`/task/${taskId}`)
  }

  return (
    <>
      {currentSectionTask.map((task) => (
        <div
          className={styles.materialWrapper}
          key={`${task.id}-${task.name}`}
        >
          <TaskIcon />
          <p className={styles.materialLink} onClick={() => goToTask(task.id)} >
            {task.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default TaskLink;
