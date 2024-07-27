import React, { FC } from "react";
import MovingLayout from "../../../MovingLayout";
import styles from "./index.module.scss";
import AddButton from "../../components/AddButton";

interface ToolbarProps {
  onAddButton: (item: any) => void;
}

const Toolbar: FC<ToolbarProps> = ({ onAddButton }) => (
  <MovingLayout style={styles.layout}>
    <AddButton onAddButton={onAddButton} />
  </MovingLayout>
);

export default Toolbar;
