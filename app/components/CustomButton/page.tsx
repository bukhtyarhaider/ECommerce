import React from "react";
import styles from "./CustomButton.module.scss";
import { CustomButtonProps } from "./CustomButtonProps";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  outline,
  onClick,
}) => {
  const customButtonClass = `${styles.customButton} ${
    outline ? styles.outline : ""
  }`;
  return (
    <button className={customButtonClass} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
