import React, { useState } from "react";
import MovingLayout from "./components/MovingLayout";
import Toolbar from "./components/Toolbar/conteiners";

const Main = () => {
  const [elements, setElements] = useState([]);

  const addItem = (item) => {
    setElements([...elements, item]);

    // const newElement = {
    //   id: elements.length,
    //   dimensions: { width: 100, height: 100 },
    //   position: { x: 0, y: 0 },
    // };

    // if (parentId !== undefined) {
    //   const parentSquare = elements.find((square) => square.id === parentId);
    //   if (parentSquare) {
    //     newElement.position = {
    //       x: parentSquare.position.x + 20,
    //       y: parentSquare.position.y + 20,
    //     };
    // }
    // }

    // setElements([...elements, newElement]);
  };

  const handleDimensionsChange = (id, newDimensions) => {
    setElements(
      elements.map((square) =>
        square.id === id ? { ...square, dimensions: newDimensions } : square
      )
    );
  };

  const handlePositionChange = (id, newPosition) => {
    setElements(
      elements.map((square) =>
        square.id === id ? { ...square, position: newPosition } : square
      )
    );
  };

  return (
    <div>
      <Toolbar onAddButton={addItem} />
      {/* {elements.map((square, index) => (
        <MovingLayout
          key={index}
          id={index}
          dimensions={square.dimensions}
          position={square.position}
          onDimensionsChange={handleDimensionsChange}
          onPositionChange={handlePositionChange}
        />
      ))} */}
      {elements.map((El, index) => 
         <El key={index} />
      )}
    </div>
  );
};

export default Main;
