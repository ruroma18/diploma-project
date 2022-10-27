import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@mui/material";
import styles from "./AddNewMaterial.module.scss";
import MaterialForm from "components/MaterialForm";

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
        <h2 className={styles.modalHeading}>Додати файл</h2>
        <MaterialForm setOpenModal={setOpenModal} sectionId={sectionId} />
      </Dialog>
    </div>
  );
};

export default AddNewMaterial;
