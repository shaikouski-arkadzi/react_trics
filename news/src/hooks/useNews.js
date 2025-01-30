import { useEffect, useState } from "react";
import { getNews } from "../api/apiNews";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews(currentPage, pageSize);
        setNews(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [currentPage, pageSize]);

  return {
    news,
    currentPage,
    setCurrentPage,
  };
};
