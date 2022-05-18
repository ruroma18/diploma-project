import { Formik, Form, Field } from "formik";
import React from "react";
import styles from "./LogInForm.module.scss";

const LogInForm = () => {
  const initialValues = {
    login: "",
    password: "",
  };

  const logIn = (values) => {
    console.log(values)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={logIn}>
        {(formikProps) => {
          return (
            <Form className={styles.container}>
              <h2 className={styles.heading}>Увійти</h2>
              <Field name="login" className={styles.field} type="text" placeholder="Логін" />
              <Field
              name="password"
                className={styles.field}
                type="password"
                placeholder="Пароль"
              />
              <button className={styles.btn} type="submit">
                Вхід
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LogInForm;
