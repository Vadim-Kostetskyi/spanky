import React, { FC } from "react";
import MovingLayout from "../../../MovingLayout";
import AddButton from "../../components/AddButton";
import InstrumentButton from "components/Toolbar/components/InstrumentButton";
import styles from "./index.module.scss";

interface ToolbarProps {
  onAddButton: (item: any) => void;
  onSwitch: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ onAddButton, onSwitch }) => (
  <MovingLayout style={styles.wrapper}>
    <AddButton onAddButton={onAddButton} />
    <InstrumentButton onSwitch={onSwitch} />
  </MovingLayout>
);

export default Toolbar;
