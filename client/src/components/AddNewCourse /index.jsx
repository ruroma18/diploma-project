import React, { useEffect, useState } from "react";
import styles from "./AddNewCourse.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import CourseForm from "components/CourseForm";
import CloseIcon from '@mui/icons-material/Close';

const AddNewCourse = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {}, [openModal]);

  const toggleOpenModal = () => setOpenModal(openModal === true ? false : true);

  return (
    <div className={styles.container} >
      <AddCircleOutlineIcon className={styles.addIcon} onClick={() => toggleOpenModal()}/>
      <Dialog open={openModal} className={styles.modalContainer} >
        <CloseIcon className={styles.modalBtn} onClick={() => toggleOpenModal()}/>
        <h2 className={styles.modalHeading}>Створити курс</h2>
          <CourseForm />
      </Dialog>
    </div>
  );
};

export default AddNewCourse;
