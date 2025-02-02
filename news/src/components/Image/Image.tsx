import React from "react";
import styles from "./styles.module.css";

const Image = ({ image, ...props }) => {
  {
    return image !== "None" ? (
      <img {...props} src={image} alt="news image" className={styles.image} />
    ) : (
      <div {...props} className={styles.image}></div>
    );
  }
};

export default Image;
