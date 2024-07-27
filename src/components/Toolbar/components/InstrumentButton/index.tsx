import React, { FC, useState } from "react";
import styles from "./index.module.scss";

interface InstrumentButtonProps {
  onSwitch: () => void;
}

const InstrumentButton: FC<InstrumentButtonProps> = ({ onSwitch }) => {
  const [enabled, setEnabled] = useState(true);
  const rr = () => {
    setEnabled(!enabled);
    onSwitch();
  };

  return (
    <button
      className={enabled ? styles.enable : styles.disable}
      onClick={rr}
    ></button>
  );
};

export default InstrumentButton;
