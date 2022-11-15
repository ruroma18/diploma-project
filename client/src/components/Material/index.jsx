import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from "@mui/icons-material/Delete";
import CONSTANTS from "../../constants";
import styles from "./Material.module.scss";
import { deleteMaterial } from "redux/features/material/materialThunk";

const Material = ({ id, userRole }) => {
  const { materialData } = useSelector((state) => state.material);
  const dispatch = useDispatch();

  const currentSectionMaterial = materialData.filter(
    (material) => material.sectionId === id
  );

  const handleDeleteMaterial = (id) => {
    dispatch(deleteMaterial(id));
  };

  return (
    <>
      {currentSectionMaterial.map((material) => (
        <div
          className={styles.materialWrapper}
          key={`${material.id}-${material.name}`}
        >
          <ArticleIcon />
          <a
            className={styles.materialLink}
            href={`${CONSTANTS.PUBLIC_FILE_URL}${material.filePath}`}
          >
            {material.name}
          </a>
          {userRole === CONSTANTS.TEACHER ? (
            <DeleteIcon
              className={styles.deleteIcon}
              onClick={() => handleDeleteMaterial(material.id)}
            />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Material;
