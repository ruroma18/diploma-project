import React, { useState } from "react";
import styles from "./InputImage.module.scss";

const InputImage = ({name, formik}) => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setFile(URL.createObjectURL(e.target.files[0]));
    formik.setFieldValue('image', e.target.files[0]);
  };

  return (
    <div className={styles.imageUploadContainer}>
      <input
        name={name}
        type="file"
        className={styles.field}
        accept="image/*"
        onChange={handleChange}
      ></input>

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
  );
};

export default InputImage;
