import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setNews } from "../slice";
import { NewsApiResponse, ParamsType } from "../../types/types";
import { RootState } from "../store";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, void>({
      keepUnusedDataFor: 0,
      queryFn: async (_arg, { getState }, _extraOptions, baseQuery) => {
        const state = getState() as RootState;

        const { currentPage, pageSize, selectedCategory, keywords } =
          state.news;

        const response = await baseQuery({
          url: "search",
          params: {
            apiKey: API_KEY,
            page_number: currentPage,
            page_size: pageSize,
            category: selectedCategory !== "all" ? selectedCategory : undefined,
            keywords,
          },
        });

        if (response.error) return { error: response.error };

        return { data: response.data as NewsApiResponse };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setNews(result.data.news));
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
