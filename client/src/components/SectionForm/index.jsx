import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { createSection } from "redux/features/section/sectionThunk";
import validationSchema from "validation/validationSchema";
import styles from "./SectionForm.module.scss";

const SectionForm = ({ setOpenModal, courseId }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
  };

  const handleSection = ({ name }) => {
    dispatch(createSection({ courseId, name }));
    setOpenModal(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSection}
      validationSchema={validationSchema.SectionSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.container}>
          <div className={styles.fieldContainer}>
            <p className={styles.fieldName}> Назва розділу</p>
            <Field
              name="name"
              type="name"
              placeholder="Назва розділу"
              className={styles.field}
            />
            {errors.name && touched.name ? (
              <div className={styles.validationError}>{errors.name}</div>
            ) : null}
          </div>
          <button type='submit' className={styles.createBtn}>Створити розділ</button>
        </Form>
      )}
    </Formik>
  );
};

export default SectionForm;
