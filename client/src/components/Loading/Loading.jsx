import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  const loadingConfig = {
    type: "spin",
    color: "ffffff",
    height: "20%",
    width: "20%",
  };

  return (
    <ReactLoading
      type={loadingConfig.type}
      color={loadingConfig.color}
      height={loadingConfig.height}
      width={loadingConfig.height}
    />
  );
};

export default Loading;
