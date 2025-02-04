import React from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeProvider";

const Pagination = ({
  currentPage,
  onClick,
}: {
  currentPage: number;
  onClick: (value: number) => void;
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => onClick(-1)}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <button onClick={() => onClick(1)} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
