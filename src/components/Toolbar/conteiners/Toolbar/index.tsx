import React, { FC, useState } from "react";
import MovingLayout from "../../../MovingLayout";
import AddButton from "../../components/AddButton";
import InstrumentButton from "components/Toolbar/components/InstrumentButton";
import { elements } from "./elements";
import styles from "./index.module.scss";

interface ToolbarProps {
  onAddButton: (item: any) => void;
  onSwitch: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ onAddButton, onSwitch }) => {
  const onSelectElement = (newElement: any) => {
    onAddButton(newElement);
    console.log(newElement);
  };

  return (
    <MovingLayout style={styles.wrapper}>
      <AddButton onAddButton={onAddButton} />
      <select name="elements" onChange={(o) => onSelectElement(o)}>
        {elements.map(({ title }) => (
          <option value="">{title}</option>
        ))}
        <option value="">elem2</option>
        <option value="">elem3</option>
      </select>
      <InstrumentButton onSwitch={onSwitch} />
    </MovingLayout>
  );
};

export default Toolbar;
