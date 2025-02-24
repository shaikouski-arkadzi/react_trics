import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./slice";

import { newsApi } from "./services/newsApi";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
