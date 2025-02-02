import React from "react";
import NewsList from "../../components/NewsList/NewsList";
import { useNews } from "../../hooks/useNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import styles from "./styles.module.css";

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

  const handleClick = (value: number) => {
    setCurrentPage((page: number) => Math.max(1, page + value));
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />
      <Pagination currentPage={currentPage} onClick={handleClick} />
      <NewsList news={news} />
    </main>
  );
};

export default Main;
