import React from "react";
import styles from "./InputBackgroundImage.module.scss";

const InputBackgroundImage = ({formik, setFile}) => {

  const handleChange = (e) => {
    e.preventDefault();
    setFile(URL.createObjectURL(e.target.files[0]));
    formik.setFieldValue('image', e.target.files[0]);
  };

  return (
    <div className={styles.imageUploadContainer}>
      <input
        name="image"
        type="file"
        className={styles.field}
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBackgroundImage;
