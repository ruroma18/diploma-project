import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@mui/material";
import styles from "./AddNewFile.module.scss";
import FileForm from "components/ Form";

const AddNewMaterial = ({ sectionId }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => setOpenModal(openModal === true ? false : true);

  return (
    <div className="styles.container">
      <Button
        variant="text"
        startIcon={<AddIcon />}
        className={styles.addBtn}
        onClick={() => toggleOpenModal()}
      >
        Додати файл
      </Button>
      <Dialog open={openModal} className={styles.modalContainer}>
        <CloseIcon
          className={styles.modalBtn}
          onClick={() => toggleOpenModal()}
        />
        <h2 className={styles.modalHeading}>Створити розділ</h2>
        <FileForm setOpenModal={setOpenModal} sectionId={sectionId} />
      </Dialog>
    </div>
  );
};

export default AddNewMaterial;
