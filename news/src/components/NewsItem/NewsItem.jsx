import { formatPastTime } from "../../helpers/formatPastTime";
import Image from "../Image/Image";
import styles from "./styles.module.css";

const NewsItem = ({ item, big }) => {
  return (
    <li
      className={styles.item}
      style={{ flexDirection: big ? "column" : "row" }}
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
