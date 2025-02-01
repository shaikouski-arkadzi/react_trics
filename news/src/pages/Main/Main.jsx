import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import { useNews } from "../../hooks/useNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../hooks/useDebounce";

const Main = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    news,
    currentPage,
    setCurrentPage,
    keywords,
    setKeywords,
  } = useNews();

  const debouncedKeywords = useDebounce(keywords, setKeywords, 1500);

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
      <Search keywords={debouncedKeywords} setKeywords={setKeywords} />
      <Pagination currentPage={currentPage} onClick={handleClick} />
      <NewsList news={news} />
    </main>
  );
};

export default Main;
