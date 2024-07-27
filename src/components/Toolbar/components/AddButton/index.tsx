import React, { FC } from "react";
import styles from "./index.module.scss";
import NewButton from "addedElements/components/NewButton";

interface AddButtonProps {
  onAddButton: (item: any) => void;
}

const AddButton: FC<AddButtonProps> = ({ onAddButton }) => (
  <button className={styles.button} onClick={() => onAddButton(NewButton)}>
    Button
  </button>
);

export default AddButton;
