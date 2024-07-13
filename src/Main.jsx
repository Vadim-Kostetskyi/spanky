import React, { useState } from "react";
import MovingLayout from "./components/MovingLayout";
import Toolbar from "./components/Toolbar/conteiners";

const Main = () => {
  const [squares, setSquares] = useState([]);

  const addSquare = (parentId) => {
    console.log(123);
    const newSquare = {
      id: squares.length,
      dimensions: { width: 100, height: 100 },
      position: { x: 0, y: 0 },
    };

    if (parentId !== undefined) {
      const parentSquare = squares.find((square) => square.id === parentId);
      if (parentSquare) {
        newSquare.position = {
          x: parentSquare.position.x + 20,
          y: parentSquare.position.y + 20,
        };
      }
    }

    setSquares([...squares, newSquare]);
  };

  const handleDimensionsChange = (id, newDimensions) => {
    setSquares(
      squares.map((square) =>
        square.id === id ? { ...square, dimensions: newDimensions } : square
      )
    );
  };

  const handlePositionChange = (id, newPosition) => {
    setSquares(
      squares.map((square) =>
        square.id === id ? { ...square, position: newPosition } : square
      )
    );
  };

  return (
    <div>
      <Toolbar onAddButton={() => addSquare()} />
      {squares.map((square, index) => (
        <MovingLayout
          key={index}
          id={index}
          dimensions={square.dimensions}
          position={square.position}
          onDimensionsChange={handleDimensionsChange}
          onPositionChange={handlePositionChange}
        />
      ))}
    </div>
  );
};

export default Main;
