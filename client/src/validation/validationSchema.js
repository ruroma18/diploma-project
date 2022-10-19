import * as yup from 'yup';

const validationSchema = {
  LoginSchema: yup.object().shape({
    email: yup.string().email('Невірний email').required('Введіть email'),
    password: yup.string().required('Введіть пароль')
  }),
  RegistrationSchema: yup.object().shape({
    firstName: yup.string().min(2, 'Ім`я має мати більше 2-х символів').required('Введіть ім`я'),
    lastName: yup.string().min(2, 'Прізвище має мати більше 2-х символів').required('Введіть прізвище'),
    email: yup.string().email('Невірний email').required('Введіть email'),
    password: yup.string().required('Введіть пароль'),
    confirmPassword: yup.string().required('').oneOf([yup.ref('password')], 'Паролі повинні бути однакові'),
    role: yup.string().matches(/(teacher|student)/).required('Оберіть роль')
  })
  
}

export default validationSchema;