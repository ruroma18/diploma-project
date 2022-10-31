import { Field, Form } from "formik";
import React from "react";
import Draggable from "react-draggable";
import styles from "./BlockForAnswer.module.scss";

const BlockForAnswer = ({
  inputHeight,
  inputWidth,
  setInputHeight,
  setInputWidth,
  setPosition,
}) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "height") {
      setInputHeight(value);
    }

    if (name === "width") {
      setInputWidth(value);
    }
  };

  const handleDrag = (e, ui) => {
    const block = document.getElementById('dragBlock');
    const blockPosition = block.getBoundingClientRect();   
    setPosition({ posX: blockPosition.top, posY: blockPosition.left });
  };


  return (
    <div className={styles.container}>
        <Form onChange={handleChange}>
          <p className={styles.fieldName}>
            Введіть ширину та висоту блоку у px та перетягніть на місце вставки
            відповіді на картинці
          </p>
          <div>
            <Field
              className={styles.field}
              type="number"
              placeholder="Висота"
              name="height"
              value={inputHeight}
            />
          </div>
          <div>
            <Field
              className={styles.field}
              type="number"
              placeholder="Ширина"
              name="width"
              value={inputWidth}
            />
          </div>
        </Form>
      <Draggable onDrag={handleDrag}>
        <div
          className={styles.answerBlock}
          style={{
            height: `${inputHeight}px`,
            width: `${inputWidth}px`,
          }}
          id="dragBlock"
        ></div>
      </Draggable>
    </div>
  );
};

export default BlockForAnswer;
