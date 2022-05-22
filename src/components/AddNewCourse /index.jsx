import React from 'react';
import styles from './AddNewCourse.module.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddNewCourse = () => {
  return (
    <div className={styles.container}>
      <AddCircleOutlineIcon className={styles.addIcon}/>      
    </div>
  );
}

export default AddNewCourse;
