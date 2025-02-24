import React from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeProvider";
import { useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/slice";

const Pagination = () => {
  const { isDark } = useTheme();

  const { currentPage } = useAppSelector((state) => state.news);

  const dispatch = useDispatch();

  const handleClick = (value: number) => {
    dispatch(setPage(Math.max(1, currentPage + value)));
  };

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(-1)}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <button onClick={() => handleClick(1)} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
