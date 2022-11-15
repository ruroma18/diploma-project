import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskIcon from "@mui/icons-material/Task";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../constants";
import styles from "./TaskLink.module.scss";
import { deleteTask } from "redux/features/task/taskThunk";

const TaskLink = ({ id, userRole }) => {
  const { taskList } = useSelector((state) => state.task);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const currentSectionTask = taskList.filter((task) => task.sectionId === id);

  const goToTask = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      {currentSectionTask.map((task) => (
        <div className={styles.materialWrapper} key={`${task.id}-${task.name}`}>
          <TaskIcon />
          <p className={styles.materialLink} onClick={() => goToTask(task.id)}>
            {task.name}
          </p>
          {userRole === CONSTANTS.TEACHER ? (
            <DeleteIcon
              className={styles.deleteIcon}
              onClick={() => handleDeleteTask(task.id)}
            />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default TaskLink;
