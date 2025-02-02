import { useEffect, useReducer, useCallback, SetStateAction } from "react";
import { getCategories, getNews } from "../api/apiNews";
import { IAction, ICategory, INewsState, INewsItem } from "../types/types";

const newsReducer = (state: INewsState, action: IAction): INewsState => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload, currentPage: 1 };
    case "SET_NEWS":
      return { ...state, news: action.payload };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_KEYWORDS":
      return { ...state, keywords: action.payload };
    default:
      return state;
  }
};

export const useNews = () => {
  const [state, dispatch] = useReducer(newsReducer, {
    categories: [],
    selectedCategory: "all",
    news: null,
    currentPage: 1,
    pageSize: 10,
    keywords: "",
  } as INewsState);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories: ICategory[] = await getCategories();
        dispatch({ type: "SET_CATEGORIES", payload: categories });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    const fetchNews = async () => {
      try {
        const response: INewsItem[] = await getNews({
          page_number: state.currentPage,
          page_size: state.pageSize,
          category:
            state.selectedCategory === "all" ? null : state.selectedCategory,
          keywords: state.keywords,
        });
        if (isMounted) {
          dispatch({ type: "SET_NEWS", payload: response });
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchNews();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [
    state.selectedCategory,
    state.currentPage,
    state.pageSize,
    state.keywords,
  ]);

  const setSelectedCategory = useCallback((category: string) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
  }, []);

  const setCurrentPage = useCallback((page: SetStateAction<number>) => {
    dispatch({ type: "SET_PAGE", payload: page });
  }, []);

  const setKeywords = useCallback(
    (keywords: SetStateAction<string>) => {
      dispatch({
        type: "SET_KEYWORDS",
        payload:
          typeof keywords === "function" ? keywords(state.keywords) : keywords,
      });
    },
    [state.keywords]
  );

  return {
    categories: state.categories,
    selectedCategory: state.selectedCategory,
    setSelectedCategory,
    news: state.news,
    currentPage: state.currentPage,
    setCurrentPage,
    keywords: state.keywords,
    setKeywords,
  };
};
