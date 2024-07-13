import React, { FC, useState } from "react";
import MovingLayout from "../../MovingLayout";
import styles from "./index.module.scss";
import AddButton from "../components/AddButton";

interface ToolbarProps {
  onAddButton: (item: any) => void;
}

const Toolbar: FC<ToolbarProps> = ({ onAddButton }) => {
  const initialState = {
    dimensions: { width: 500, height: 50 },
    id: 0,
    position: { x: -250, y: 300 },
  };
  const [toolBar, setToolBar] = useState(initialState);

  const handlePositionChange = (
    id: number,
    newPosition: { x: number; y: number }
  ) => {
    setToolBar((prevSquares) => ({
      ...prevSquares,
      position: newPosition,
    }));
  };

  return (
    <MovingLayout
      id={0}
      dimensions={toolBar.dimensions}
      position={toolBar.position}
      onPositionChange={handlePositionChange}
      noResize={true}
      wrapperClassName={styles.layout}
    >
      <AddButton onAddButton={onAddButton} />
    </MovingLayout>
  );
};

export default Toolbar;
