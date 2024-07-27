import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

type Position = {
  x: number;
  y: number;
};

interface MovingLayoutProps {
  children: ReactNode;
  style?: string;
  startPosition?: Position;
  noEdit?: boolean;
}

const MovingLayout: FC<MovingLayoutProps> = ({
  children,
  style,
  startPosition,
  noEdit,
}) => {
  const squareRef = useRef<HTMLDivElement | null>(null);
  const [resizing, setResizing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  console.log(noEdit);

  const initialState = { x: -250, y: 300 };
  const [position, setPosition] = useState(startPosition || initialState);

  const handlePositionChange = (newPosition: { x: number; y: number }) => {
    setPosition(newPosition);
  };

  const handleMouseDownDrag = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    handlePositionChange({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setResizing(false);
    setDragging(false);
  };

  useEffect(() => {
    if (resizing || dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizing, dragging]);

  return (
    <div
      ref={squareRef}
      className={style || styles.wrapper}
      style={{
        width: "fit-content",
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "move",
      }}
    >
      {noEdit ? null : (
        <div className={styles.dragHandle} onMouseDown={handleMouseDownDrag}>
          Drag here
        </div>
      )}
      {children}
    </div>
  );
};

export default MovingLayout;
