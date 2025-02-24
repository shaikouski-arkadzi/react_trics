import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesApiResponse } from "../../types/types";
import { setCategories } from "../slice";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchCategories = createAsyncThunk<
  CategoriesApiResponse,
  void,
  { rejectValue: string }
>(
  "categories/fetchCategories",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/available/categories?apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data: CategoriesApiResponse = await response.json();
      dispatch(setCategories(data.categories));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
