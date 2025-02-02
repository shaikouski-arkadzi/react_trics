import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
import { INewsItem } from "../../types/types";

const NewsList = ({ news }: { news: INewsItem[] | null }) => {
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
