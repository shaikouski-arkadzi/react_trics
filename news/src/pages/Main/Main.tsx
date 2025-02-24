import React from "react";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Categories />
      <Search />
      <Pagination />
      <NewsList />
    </main>
  );
};

export default Main;
