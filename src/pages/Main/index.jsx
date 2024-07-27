import React, { useState } from "react";
import Toolbar from "../../components/Toolbar/conteiners/Toolbar";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const addItem = (item) => {
    setElements([...elements, item]);
    console.log(elements);
  };

  const switchEditMode = () => setEditMode(!editMode);

  return (
    <div>
      <Toolbar onAddButton={addItem} />
      {elements.map((El, index) => (
        <El key={index} />
      ))}
    </div>
  );
};

export default Main;
