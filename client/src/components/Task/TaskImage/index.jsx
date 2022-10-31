import React from "react";
import CONSTANTS from "../../../constants";
import cx from "classnames";
import styles from "./TaskImage.module.scss";

const TaskImage = ({
  taskInfo,
  inputBlock,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("id");
    const text = e.dataTransfer.getData("text");
    setSelectedAnswer({ id, text });
  };

  const inputBlockClass = cx({
    [styles.answerItem]: selectedAnswer,
    [styles.inputContainer]: !selectedAnswer,
  });

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={`${CONSTANTS.PUBLIC_IMAGE_URL}${taskInfo.image}`}
          alt={taskInfo.name}
        />
        <div
          className={inputBlockClass}
          style={{
            height: `${inputBlock.height}px`,
            width: `${inputBlock.width}px`,
            top: `${inputBlock.posX}px`,
            left: `${inputBlock.posY}px`,
          }}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
        >
          {selectedAnswer ? selectedAnswer.text : null}
        </div>
      </div>
    </div>
  );
};

export default TaskImage;
