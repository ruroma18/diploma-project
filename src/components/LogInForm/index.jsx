import React, { useState, useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { Navigate } from "react-router-dom";
import { getUsers } from "api";
import styles from "./LogInForm.module.scss";
import { UserContext } from "contexts";

const LogInForm = () => {
  const [users, setUsers] = useState([]);
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [setCurrentUser] = useContext(UserContext);

  const initialValues = {
    login: "",
    password: "",
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const usersMap = new Map();

  users.forEach((user) => {
    usersMap.set(user.login, user.role);
  });

  const globalUser = (user) => {
    setCurrentUser(user)
  }

  const logIn = ({ login }) => {
    if (usersMap.has(login)) {
      setCurrentUserRole(usersMap.get(login));
      users.forEach((user) => {
        if (user.login === login) {
          globalUser(user);
        }
      });
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
