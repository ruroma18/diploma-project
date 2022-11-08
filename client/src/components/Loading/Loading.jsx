import React from "react";
import ReactLoading from "react-loading";
import styles from './Loading.module.scss';

const Loading = () => {
  const loadingConfig = {
    type: "spin",
    color: "ffffff",
    height: "100px",
    width: "100px",
  };

  return (
    <div className={styles.loadingContainer}>
      <ReactLoading
        type={loadingConfig.type}
        color={loadingConfig.color}
        height={loadingConfig.height}
        width={loadingConfig.height}
      />
    </div>
  );
};

export default Loading;
