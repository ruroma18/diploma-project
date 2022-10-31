import { Field } from "formik";
import React from "react";
import styles from "./AnswersForm.module.scss";

const AnswersForm = ({ addAnswer }) => {
  return (
    <section className={styles.addAnswerContainer}>
      <div className={styles.answerItemContainer}>
        <div>
          <Field
            name="text1"
            type="text"
            className={styles.field}
            placeholder="Текст відповіді"
          />
        </div>
        <div className={styles.checkbox}>
          <Field type="checkbox" name="isRight1" />
          <label htmlFor="isRight">Вірна відповідь</label>
        </div>
      </div>
      <div className={styles.answerItemContainer}>
        <div>
          <Field
            name="text2"
            type="text"
            className={styles.field}
            placeholder="Текст відповіді"
          />
        </div>
        <div className={styles.checkbox}>
          <Field type="checkbox" name="isRight2" />
          <label htmlFor="isRight">Вірна відповідь</label>
        </div>
      </div>
      <div className={styles.answerItemContainer}>
        <div>
          <Field
            name="text3"
            type="text"
            className={styles.field}
            placeholder="Текст відповіді"
          />
        </div>
        <div className={styles.checkbox}>
          <Field type="checkbox" name="isRight3" />
          <label htmlFor="isRight">Вірна відповідь</label>
        </div>
      </div>
      <div className={styles.answerItemContainer}>
        <div>
          <Field
            name="text4"
            type="text"
            className={styles.field}
            placeholder="Текст відповіді"
          />
        </div>
        <div className={styles.checkbox}>
          <Field type="checkbox" name="isRight4" />
          <label htmlFor="isRight">Вірна відповідь</label>
        </div>
      </div>
    </section>
  );
};

export default AnswersForm;
