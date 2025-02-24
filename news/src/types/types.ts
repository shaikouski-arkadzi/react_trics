export interface INewsItem {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  published: string;
  author: string;
}

export interface INewsResponse {
  data: INewsItem[];
  total: number;
}

export interface INewsState {
  categories: string[];
  selectedCategory: string;
  news: INewsItem[] | null;
  currentPage: number;
  pageSize: number;
  keywords: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface NewsApiResponse {
  news: INewsItem[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: string[];
  description: string;
  status: string;
}
