import React from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "../../validation/validationSchema";
import InputImage from "components/InputComponents/InputImage/InputImage";
import styles from "./CourseForm.module.scss";

const CourseForm = () => {
  const handleCourse = {};

  const initialValues = {
    name: "",
    imgPath: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCourse}
      validationSchema={validationSchema.CourseSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.container}>
          <div className={styles.fieldContainer}>
            <p className={styles.fieldName}>Назва курсу</p>
            <Field
              name="name"
              type="name"
              placeholder="Назва курсу"
              className={styles.field}
            ></Field>
            {errors.name && touched.name ? (
              <div className={styles.validationError}>{errors.name}</div>
            ) : null}
          </div>
          <div className={styles.fieldContainer}>
            <p className={styles.fieldName}>Оберіть зображення курсу</p>
            <InputImage name={'imgPath'} styles={styles}/>
            {errors.imagePath && touched.name ? (
              <div className={styles.imageValidationError}>{errors.imagePath}</div>
            ) : null}
          </div>
          <button className={styles.createBtn}>Створити курс</button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseForm;
