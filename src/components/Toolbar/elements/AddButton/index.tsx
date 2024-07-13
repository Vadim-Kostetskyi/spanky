import React, { FC } from "react";
import styles from "./index.module.scss";

interface AddButtonProps {
  onAddButton: () => void;
}

const AddButton: FC<AddButtonProps> = ({ onAddButton }) => {
  return (
    <button className={styles.button} onClick={onAddButton}>
      Button
    </button>
  );
};

export default AddButton;
