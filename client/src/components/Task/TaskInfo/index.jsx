import { Alert } from "@mui/material";
import React from "react";
import styles from "./TaskInfo.module.scss";

const TaskInfo = ({ taskInfo, taskAnswers, inputBlock, selectedAnswer }) => {

  const hanldeDragStart = (e, id, text) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("text", text);
  };

  const checkAnswer = () => {
    if(!selectedAnswer) {
      return null
    }

    const getAnswer = taskAnswers.find(({id}) => id === parseInt(selectedAnswer.id))

    if (getAnswer.isRight) {
      return <Alert severity="success">Вітаю! Відповідь правильна</Alert>;
    }
    return <Alert severity="error">Неправильна відповідь! Спробуйте ще</Alert>;
  };

  return (
    <div>
      <h2 className={styles.heading}>{taskInfo.name}</h2>
      <div>
        <h3 className={styles.subHeading}>Опис завдання:</h3>
        <p>{taskInfo.description}</p>
      </div>
      <h3 className={styles.subHeading}>
        Перетягніть обрану відповідь у пусте місце на картинці
      </h3>
      <div className={styles.answersContainer}>
        {taskAnswers.map((answer) => (
          <div
            draggable
            onDragStart={(e) => hanldeDragStart(e, answer.id, answer.text)}
            key={answer.id}
            className={styles.answerItem}
            style={{
              height: `${inputBlock.height}px`,
              width: `${inputBlock.width}px`,
            }}
          >
            {answer.text}
          </div>
        ))}
      </div>
      {checkAnswer()}
    </div>
  );
};

export default TaskInfo;
