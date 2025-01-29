import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item, index) => {
        return <NewsItem big={index === 0} key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
