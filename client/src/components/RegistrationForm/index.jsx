import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import styles from "./RegistrationForm.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../constants";
import validationSchema from "../../validation/validationSchema";
import { register } from "redux/features/auth/authThunk";
import InputImage from "components/InputComponents/InputImage";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName : "",
      lastName: "",
      email: "",
      password: "",
      role: ""
    }
  });

  const handleRegister = ({ firstName, lastName, email, password, role }) => {
    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName)
    data.append('email', email)
    data.append('password', password)
    data.append('role', role)
    data.append('image', formik.values.image)
    dispatch(register(data));
    navigate(`/login`);
  };

  return (
    <>
      <Formik
        initialValues={formik.initialValues}
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
                type="text"
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
                type="text"
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
                type="select"
              >
                <option selected value={CONSTANTS.TEACHER}>Вчитель</option>
                <option value={CONSTANTS.TEACHER}>Учень</option>
              </Field>
              {errors.role && touched.role ? (
                <div className={styles.validationError}>{errors.role}</div>
              ) : null}
            </div>
            <div className={styles.fieldContainer}>
            <p className={styles.fieldName}>Оберіть зображення курсу</p>
            <InputImage name={'image'} formik={formik} style={styles.userImg}/>
            {errors.imgPath && touched.imgPath ? (
              <div className={styles.imageValidationError}>{errors.imgPath}</div>
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
