import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import styles from './AddNewTask.module.scss';
import { useNavigate } from 'react-router-dom';

const AddNewTask = ({sectionId}) => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <Button
        variant="text"
        startIcon={<AddIcon />}
        className={styles.addBtn}
        onClick={() => navigate(`/createTask/${sectionId}`)}
      >
        Додати завдання
      </Button>
      
    </div>
  );
}

export default AddNewTask;
