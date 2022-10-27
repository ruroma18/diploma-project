import { Field, Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createMaterial } from 'redux/features/material/materialThunk';
import validationSchema from 'validation/validationSchema';
import styles from './MaterialForm.module.scss';

const MaterialForm = ({setOpenModal, sectionId}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      file: ""
    }
  })
  const dispatch = useDispatch(); 

  const handleFile = (e) => {
    e.preventDefault()
    formik.setFieldValue('file', e.target.files[0] ) 
  }

  const handleMaterial = ({name}) => {
    const data = new FormData();
    data.append('name', name);
    data.append('file', formik.values.file);
    dispatch(createMaterial({sectionId, data}))
    setOpenModal(false);
  }

  return (
    <Formik
    initialValues={formik.initialValues}
    onSubmit={handleMaterial}
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
          <input
            name='file'
            type='file'
            className={styles.field}
            onChange={handleFile}
          ></input>
          {errors.file && touched.file ? (
            <div className={styles.validationError}>{errors.file}</div>
          ) : null}
        </div>
        <button type='submit' className={styles.createBtn}>Створити курс</button>
      </Form>
    )}
  </Formik>
  );
}

export default MaterialForm;
