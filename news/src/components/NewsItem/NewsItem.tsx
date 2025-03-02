import React from "react";
import { formatPastTime } from "../../helpers/formatPastTime";
import Image from "../Image/Image";
import styles from "./styles.module.css";
import { INewsItem } from "../../types/types";
import { useTheme } from "../../context/ThemeProvider";

const NewsItem = ({ item, big }: { item: INewsItem; big: boolean }) => {
  const { isDark } = useTheme();

  return (
    <li
      className={`${styles.item} ${isDark ? styles.dark : styles.light}`}
      style={{
        gridColumn: big ? "1 / -1" : "",
        flexDirection: big ? "column" : "row",
      }}
    >
      <Image style={{ width: big ? "100%" : "64px" }} image={item.image} />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.extra}>
          {formatPastTime(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
