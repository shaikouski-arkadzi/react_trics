import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSelectedCategory } from "../../store/slice";
import { fetchCategories } from "../../store/services/categoriesAsyncThunc";

const Categories = () => {
  const { categories, selectedCategory } = useAppSelector(
    (state) => state.news
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => dispatch(setSelectedCategory(category))}
            className={`${styles.item} ${
              selectedCategory === category ? styles.active : ""
            }`}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
