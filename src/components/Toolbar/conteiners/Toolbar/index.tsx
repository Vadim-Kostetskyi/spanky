import React, { FC, useCallback } from "react";
import MovingLayout from "../../../MovingLayout";
import InstrumentButton from "components/Toolbar/components/InstrumentButton";
import { elements } from "./elements";
import styles from "./index.module.scss";

interface ToolbarProps {
  onAddButton: (item: any) => void;
  onSwitch: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ onAddButton, onSwitch }) => {
  const onSelectElement = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedElement = elements.find(
        (element) => element.title === event.target.value
      );

      if (selectedElement) {
        onAddButton(selectedElement.element);
      } else {
      }
    },
    [elements, onAddButton]
  );

  return (
    <MovingLayout style={styles.wrapper}>
      <select name="elements" onChange={onSelectElement}>
        {elements.map(({ title }) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
      <InstrumentButton onSwitch={onSwitch} />
    </MovingLayout>
  );
};

export default Toolbar;
