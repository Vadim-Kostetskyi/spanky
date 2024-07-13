import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

interface MovingLayoutProps {
  id: number;
  dimensions: any;
  position: any;
  onDimensionsChange?: any;
  onPositionChange: any;
  noResize?: boolean;
  children: ReactNode;
  wrapperClassName?: string;
}

const MovingLayout: FC<MovingLayoutProps> = ({
  id,
  dimensions,
  position,
  onDimensionsChange,
  onPositionChange,
  noResize,
  children,
  wrapperClassName,
}) => {
  const squareRef = useRef<HTMLDivElement | null>(null);
  const [resizing, setResizing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDownResize = (e: React.MouseEvent) => {
    if (noResize) return;
    setResizing(true);
    e.stopPropagation();
  };

  const handleMouseDownDrag = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (resizing && squareRef.current) {
      const rect = squareRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rect.left;
      const newHeight = e.clientY - rect.top;
      onDimensionsChange(id, {
        width: newWidth > 50 ? newWidth : 50,
        height: newHeight > 50 ? newHeight : 50,
      });
    } else if (dragging) {
      const newX = e.clientX - startPos.x;
      const newY = e.clientY - startPos.y;
      onPositionChange(id, { x: newX, y: newY });
    }
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
      className={wrapperClassName || styles.wrapper}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "move",
      }}
      onMouseDown={handleMouseDownDrag}
    >
      {children}
      {onDimensionsChange ? (
        <div className={styles.resizer} onMouseDown={handleMouseDownResize} />
      ) : null}
    </div>
  );
};

export default MovingLayout;
