import React from "react";
import { Field, Form, Formik } from "formik";
import InputBackgroundImage from "components/InputComponents/InputBackgroundImage";
import styles from "./TaskForm.module.scss";
import validationSchema from "validation/validationSchema";
import AnswersForm from "../AnswersForm";
import BlockForAnswer from "../BlockForAnswer";

const TaskForm = (props) => {
  const {
    handleTask,
    setFile,
    inputHeight,
    inputWidth,
    setInputHeight,
    setInputWidth,
    setPosition,
    formik,
  } = props;

  return (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={handleTask}
      validationSchema={validationSchema.TaskSchema}
      encType="multipart/form-data"
    >
      {({ errors, touched }) => (
        <Form>
          <button
            className={styles.btn}
            type="submit"
            onClick={() => handleTask()}
          >
            Зберігти завдання
          </button>
          <div>
            <p className={styles.fieldName}>Назва завдання</p>
            <Field
              className={styles.field}
              type="text"
              placeholder="Назва завдання"
              name="name"
            />
            {errors.name && touched.name ? (
              <div className={styles.validationError}>{errors.name}</div>
            ) : null}
          </div>
          <div>
            <p className={styles.fieldName}>Опис завдання</p>
            <Field
              name="description"
              className={styles.field}
              type="text"
              placeholder="Опис завдання"
              as="textarea"
            />
            {errors.description && touched.description ? (
              <div className={styles.validationError}>
                {errors.description}
              </div>
            ) : null}
          </div>
          <div>
            <p className={styles.fieldName}>Фонове зображення</p>
            <InputBackgroundImage formik={formik} setFile={setFile} />
          </div>

          <BlockForAnswer
            inputHeight={inputHeight}
            inputWidth={inputWidth}
            setInputHeight={setInputHeight}
            setInputWidth={setInputWidth}
            setPosition={setPosition}
          />

          <AnswersForm />
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
