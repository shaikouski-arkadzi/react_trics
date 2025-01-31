import { useEffect, useReducer, useCallback } from "react";
import { getCategories, getNews } from "../api/apiNews";

const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload, currentPage: 1 };
    case "SET_NEWS":
      return { ...state, news: action.payload };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export const useNews = () => {
  const [state, dispatch] = useReducer(newsReducer, {
    categories: [],
    selectedCategory: "all",
    news: [],
    currentPage: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        dispatch({ type: "SET_CATEGORIES", payload: categories });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchNews = async () => {
      try {
        const response = await getNews({
          currentPage: state.currentPage,
          pageSize: state.pageSize,
          category:
            state.selectedCategory === "all" ? null : state.selectedCategory,
          signal: controller.signal,
        });
        dispatch({ type: "SET_NEWS", payload: response });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchNews();
    return () => controller.abort();
  }, [state.selectedCategory, state.currentPage, state.pageSize]);

  const setSelectedCategory = useCallback((category) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
  }, []);

  const setCurrentPage = useCallback((page) => {
    dispatch({ type: "SET_PAGE", payload: page });
  }, []);

  return {
    categories: state.categories,
    selectedCategory: state.selectedCategory,
    setSelectedCategory,
    news: state.news,
    currentPage: state.currentPage,
    setCurrentPage,
  };
};
