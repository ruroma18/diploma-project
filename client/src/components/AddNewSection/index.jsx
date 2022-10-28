import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@mui/material";
import styles from "./AddNewSection.module.scss";
import SectionForm from "components/SectionForm";

const AddNewSection = ({ courseId }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => setOpenModal(openModal === true ? false : true);

  return (
    <div className={styles.container}>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        className={styles.addBtn}
        onClick={() => toggleOpenModal()}
      >
        Додати розділ
      </Button>
      <Dialog open={openModal} className={styles.modalContainer}>
        <CloseIcon
          className={styles.modalBtn}
          onClick={() => toggleOpenModal()}
        />
        <h2 className={styles.modalHeading}>Створити розділ</h2>
        <SectionForm setOpenModal={setOpenModal} courseId={courseId} />
      </Dialog>
    </div>
  );
};

export default AddNewSection;
