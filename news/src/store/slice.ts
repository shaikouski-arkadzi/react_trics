import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INewsItem, INewsState } from "../types/types";
import { fetchCategories } from "./services/categoriesAsyncThunc";

const initialState: INewsState = {
  categories: [],
  selectedCategory: "all",
  news: null,
  currentPage: 1,
  pageSize: 10,
  keywords: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INewsItem[]>) => {
      state.news = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setKeywords: (state, action: PayloadAction<string>) => {
      state.keywords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, () => {})
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
      })
      .addCase(fetchCategories.rejected, () => {});
  },
});

export const {
  setNews,
  setCategories,
  setSelectedCategory,
  setPage,
  setKeywords,
} = newsSlice.actions;

export default newsSlice.reducer;
