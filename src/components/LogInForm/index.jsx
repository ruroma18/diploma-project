import { Formik, Form, Field } from "formik";
import React, { useState, useEffect } from "react";
import styles from "./LogInForm.module.scss";
import { Navigate } from "react-router-dom";

const LogInForm = () => {
  const [users, setUsers] = useState([]);
  const [currentUserRole, setCurrentUserRole] = useState(null);

  const initialValues = {
    login: "",
    password: "",
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const usersMap = new Map();

  users.forEach((user) => {
    usersMap.set(user.login, user.role);
  });

  const logIn = ({ login }) => {
    if (usersMap.has(login)) {
      setCurrentUserRole(usersMap.get(login));
    }

    return <div>ERROR</div>;
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={logIn}>
        {() => {
          return (
            <Form className={styles.container}>
              {currentUserRole && <Navigate to={`/${currentUserRole}`} />}
              <h2 className={styles.heading}>Увійдіть щоб продовжити</h2>
              <Field
                name="login"
                className={styles.field}
                type="text"
                placeholder="Логін"
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
          );
        }}
      </Formik>
    </>
  );
};

export default LogInForm;
