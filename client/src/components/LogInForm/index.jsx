import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./LogInForm.module.scss";
import { useDispatch} from "react-redux";
import { login } from "redux/features/auth/authThunk";
import validationSchema from "../../validation/validationSchema";

const LogInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema.LoginSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <h2 className={styles.heading}>Увійдіть щоб продовжити</h2>
            <div className={styles.fieldContainer}>
              <p className={styles.fieldName}>Email</p>
              <Field
                name="email"
                className={styles.field}
                type="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className={styles.validationError}>{errors.email}</div>
              ) : null}
            </div>
            <div className={styles.fieldContainer}>
              <p className={styles.fieldName}>Пароль</p>
              <Field
                name="password"
                className={styles.field}
                type="password"
                placeholder="Пароль"
                autoComplete="on"
              />
              {errors.password && touched.password ? (
                <div className={styles.validationError}>{errors.password}</div>
              ) : null}
            </div>

            <button className={styles.btn} type="submit">
              Вхід
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LogInForm;
