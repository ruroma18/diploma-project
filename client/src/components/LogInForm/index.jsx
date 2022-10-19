import React, {useEffect} from "react";
import { Formik, Form, Field } from "formik";
import styles from "./LogInForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "utils/helperFunctions";
import { login } from "redux/features/auth/authThunk";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../constants";
import validationSchema from "../../validation/validationSchema";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (getToken(CONSTANTS.ACCESS_TOKEN)) {
      navigate(`/${userData.role}`);
    }
  }, [userData]);

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
