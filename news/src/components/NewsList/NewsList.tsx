import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
import { INewsItem } from "../../types/types";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppSelector } from "../../store/store";

const NewsList = () => {
  useGetNewsQuery();
  const { news } = useAppSelector((state) => state.news);
  if (!news) {
    return null;
  }
  return (
    <ul className={styles.list}>
      {news.map((item: INewsItem, index: number) => {
        return <NewsItem big={index === 0} key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
