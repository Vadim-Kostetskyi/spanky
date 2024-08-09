import React, { useState } from "react";
import Toolbar from "../../components/Toolbar/conteiners/Toolbar";
import NewButton from "addedElements/components/NewButton";

const Main = () => {
  const [elements, setElements] = useState<
    { Component: React.FC<{ editMode: boolean }>; key: number }[]
  >([]);
  const [editMode, setEditMode] = useState(true);

  const addItem = (Component: React.FC<{ editMode: boolean }>) => {
    setElements([...elements, { Component, key: Date.now() }]);
  };

  const switchEditMode = () => setEditMode(!editMode);

  return (
    <div>
      <Toolbar
        onAddButton={(Component) => addItem(Component)}
        onSwitch={switchEditMode}
      />
      {elements.map(({ Component, key }) => (
        <Component key={key} editMode={editMode} />
      ))}
    </div>
  );
};

export default Main;
