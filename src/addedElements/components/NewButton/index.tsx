import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import MovingLayout from "components/MovingLayout";

const NewButton: React.FC = () => {
  const [name, setName] = useState("button");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 20) return;
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setName(inputValue);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing && inputRef.current && spanRef.current) {
      spanRef.current.textContent = inputValue || " ";
      const newWidth = spanRef.current.offsetWidth;
      inputRef.current.style.width = `${newWidth}px`;
    }
  }, [inputValue, isEditing]);

  return (
    <MovingLayout style={styles.wrapper}>
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
            className={styles.input}
          />
          <span
            ref={spanRef}
            style={{
              position: "absolute",
              visibility: "hidden",
              whiteSpace: "pre",
            }}
            className={styles.button}
          />
        </>
      ) : (
        <button className={styles.button} onClick={handleButtonClick}>
          {name}
        </button>
      )}
    </MovingLayout>
  );
};

export default NewButton;
