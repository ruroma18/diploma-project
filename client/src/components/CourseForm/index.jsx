import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import validationSchema from "../../validation/validationSchema";
import InputImage from "../InputComponents/InputImage/InputImage";
import styles from "./CourseForm.module.scss";
import { useDispatch } from "react-redux";
import { createCourse } from "redux/features/course/courseThunk";

const CourseForm = ({setOpenModal}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    }
  })

  const handleCourse = ({name}) => {
    const data = new FormData();
    data.append('name', name);
    data.append('image', formik.values.image);
    dispatch(createCourse(data))
    setOpenModal(false);
  }
    

  return (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={handleCourse}
      encType="multipart/form-data"
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
            <InputImage name={'image'} formik={formik}/>
            {errors.imgPath && touched.imgPath ? (
              <div className={styles.imageValidationError}>{errors.imgPath}</div>
            ) : null}
          </div>
          <button type='submit' className={styles.createBtn}>Створити курс</button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseForm;
