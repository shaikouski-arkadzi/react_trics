import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import { useNews } from "../../hooks/useNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

const Main = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    news,
    currentPage,
    setCurrentPage,
  } = useNews();

  const handleClick = (value) => {
    setCurrentPage((page) => Math.max(1, page + value));
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Pagination currentPage={currentPage} onClick={handleClick} />
      <NewsList news={news} />
    </main>
  );
};

export default Main;
