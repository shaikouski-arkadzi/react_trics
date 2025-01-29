import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <NewsList news={news} />
    </main>
  );
};

export default Main;
