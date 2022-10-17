import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./LogInForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "utils/helperFunctions";
import history from "utils/history";
import { login } from "redux/features/auth/authThunk";

const LogInForm = () => {
  const dispatch = useDispatch();
  const { token, userData } = useSelector((state) => state.auth);
  
  if(token || getToken()){
    history.push(`/${userData.role}`)
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = ({email, password}) => {
    dispatch(login({email, password}))
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
            <Form className={styles.container}>
              <h2 className={styles.heading}>Увійдіть щоб продовжити</h2>
              <Field
                name="email"
                className={styles.field}
                type="email"
                placeholder="Email"
              />
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
      </Formik>
    </>
  );
};

export default LogInForm;
