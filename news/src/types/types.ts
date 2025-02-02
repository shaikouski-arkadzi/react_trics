export interface ICategory {
  id: string;
  name: string;
}

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
  categories: ICategory[];
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
