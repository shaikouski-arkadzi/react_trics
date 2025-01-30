import styles from "./styles.module.css";

const Pagination = ({ currentPage, onClick }) => {
  return (
    <div className={styles.pagination}>
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
