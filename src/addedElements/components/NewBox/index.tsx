import React from "react";
import styles from "./index.module.scss";
import MovingLayout from "components/MovingLayout";

const NewBox = () => {
  return (
    <MovingLayout style={styles.wrapper}>
      <div className={styles.box}></div>
    </MovingLayout>
  );
};

export default NewBox;
