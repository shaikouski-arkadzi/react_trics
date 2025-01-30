import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import { useNews } from "../../hooks/useNews";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const { news, currentPage, setCurrentPage } = useNews();

  const handleClick = (value) => {
    setCurrentPage((page) =>
      page === 1 && value === -1 ? page : page + value
    );
  };

  return (
    <main className={styles.main}>
      <Pagination currentPage={currentPage} onClick={handleClick} />
      <NewsList news={news} />
    </main>
  );
};

export default Main;
