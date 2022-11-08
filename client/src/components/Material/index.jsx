import React from "react";
import { useSelector } from "react-redux";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from "@mui/icons-material/Delete";
import CONSTANTS from "../../constants";
import styles from "./Material.module.scss";

const Material = ({ id, userRole }) => {
  const { materialData } = useSelector((state) => state.material);

  const currentSectionMaterial = materialData.filter(
    (material) => material.sectionId === id
  );

  const deleteMaterial = (id) => {
    console.log(id);
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
              onClick={() => deleteMaterial(material.id)}
            />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Material;
