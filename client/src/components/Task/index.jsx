import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "redux/features/task/taskThunk";
import styles from "./Task.module.scss";
import TaskImage from "./TaskImage";
import TaskInfo from "./TaskInfo";

const Task = () => {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const [selectedAnswer, setSelectedAnser] = useState(null);
  const { taskData } = useSelector(state => state.task);

  useEffect(() => {
    dispatch(getTaskById(taskId));
  }, [dispatch, taskId]);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.taskInfo}>
        <TaskInfo
          taskInfo={taskData.task}
          taskAnswers={taskData.answers}
          inputBlock={taskData.inputBlock}
          selectedAnswer={selectedAnswer}
        />
      </div>
      <div className={styles.taskImage}>
        <TaskImage
          taskInfo={taskData.task}
          inputBlock={taskData.inputBlock}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnser}
        />
      </div>
    </section>
  );
};

export default Task;
