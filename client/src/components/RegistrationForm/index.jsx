import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./RegistrationForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../constants";
import validationSchema from "../../validation/validationSchema";
import { register } from "redux/features/auth/authThunk";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);

  if (getToken(CONSTANTS.ACCESS_TOKEN)) {
    navigate(`/${userData.role}`);
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const handleRegister = ({ email, password, firstName, lastName, role }) => {
    dispatch(register({ email, password, firstName, lastName, role }));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema.RegistrationSchema}
        onSubmit = {handleRegister}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <h2 className={styles.heading}>Зареєструйтесь щоб продовжити</h2>
            <div className={styles.fieldContainer}>
              <p className={styles.fieldName}>Ім'я</p>
              <Field
                name="firstName"
                className={styles.field}
                type="firstName"
                placeholder="Ім'я"
              />
              {errors.firstName && touched.firstName ? (
                <div className={styles.validationError}>{errors.firstName}</div>
              ) : null}
            </div>
            <div className={styles.fieldContainer}>
              <p className={styles.fieldName}>Прізвище</p>
              <Field
                name="lastName"
                className={styles.field}
                type="lastName"
                placeholder="Прізвище"
              />
              {errors.lastName && touched.lastName ? (
                <div className={styles.validationError}>{errors.lastName}</div>
              ) : null}
            </div>
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
            <div className={styles.fieldContainer}>
              <p className={styles.fieldName}>Підтвердити пароль</p>
              <Field
                name="confirmPassword"
                className={styles.field}
                type="password"
                placeholder="Підтвердити пароль"
                autoComplete="on"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className={styles.validationError}>
                  {errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className={styles.selectFieldContainer}>
              <p className={styles.fieldName}>Оберіть роль</p>
              <Field
                name="role"
                as="select"
                className={styles.field}
                type="role"
              >
                <option value="teacher">Вчитель</option>
                <option value="student">Учень</option>
              </Field>
              {errors.role && touched.role ? (
                <div className={styles.validationError}>{errors.role}</div>
              ) : null}
            </div>
            <button className={styles.btn} type="submit">
              Зареєструватись
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
