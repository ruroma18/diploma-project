import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createTask } from "redux/features/task/taskThunk";
import styles from "./CreateTask.module.scss";
import TaskForm from "./TaskForm";

const CreateTask = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [inputHeight, setInputHeight] = useState(100);
  const [inputWidth, setInputWidth] = useState(100);
  const [position, setPosition] = useState({ posX: 0, poxY: 0 });

  const params = useParams()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      isRight1: false,
      isRight2: false,
      isRight3: false,
      isRight4: false,
    },
  });

  const setAnswers = (data) => [
    {
      text: data.text1,
      isRight: data.isRight1,
    },
    {
      text: data.text2,
      isRight: data.isRight2,
    },
    {
      text: data.text3,
      isRight: data.isRight3,
    },
    {
      text: data.text4,
      isRight: data.isRight4,
    },
  ];

  const handleTask = (formData) => {
    const answers = setAnswers(formData);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("image", formik.values.image);
    data.append("answers", JSON.stringify(answers));
    data.append('inputBlock', JSON.stringify({ height: inputHeight, width: inputWidth, ...position }));
    dispatch(
      createTask({
        data,
        id: params.sectionId
      })
    );
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h2 className={styles.heading}>Налаштування завдання</h2>
        <TaskForm
          handleTask={handleTask}
          setFile={setFile}
          inputHeight={inputHeight}
          inputWidth={inputWidth}
          setInputHeight={setInputHeight}
          setInputWidth={setInputWidth}
          setPosition={setPosition}
          formik={formik}
        />
      </div>
      <div className={styles.imageContainer}>
        {file ? (
          <div className={styles.imgWrapper}>
            <img
              className={styles.imagePreview}
              id="imagePreview"
              src={file}
              alt="uploadedImage"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreateTask;
