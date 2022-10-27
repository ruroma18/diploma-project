import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import validationSchema from 'validation/validationSchema';
import styles from './FileForm.module.scss';

const MaterialForm = ({setOpenModal, sectionId}) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    file: ""
  };

  const handleFile = ({name, file}) => {
    const data = new FormData();
    data.append('name', name);
    data.append('file', file);
    dispatch(data)
    setOpenModal(false);
  }

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleFile}
    encType="multipart/form-data"
    validationSchema={validationSchema.FileSchema}
  >
    {({ errors, touched }) => (
      <Form className={styles.container}>
        <div className={styles.fieldContainer}>
          <p className={styles.fieldName}>Назва файлу</p>
          <Field
            name="name"
            type="name"
            placeholder="Назва файлу"
            className={styles.field}
          ></Field>
          {errors.name && touched.name ? (
            <div className={styles.validationError}>{errors.name}</div>
          ) : null}
        </div>
        <div className={styles.fieldContainer}>
          <p className={styles.fieldName}>Оберіть файл</p>
          <Field
            name='file'
            type='file'
            className={styles.field}
          ></Field>
          <div className={styles.validationError}>{errors.name}</div>
        </div>
        <button type='submit' className={styles.createBtn}>Створити курс</button>
      </Form>
    )}
  </Formik>
  );
}

export default MaterialForm;
