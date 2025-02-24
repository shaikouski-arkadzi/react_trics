import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./styles.module.css";
import { useAppSelector } from "../../store/store";
import { setKeywords } from "../../store/slice";

const Search: React.FC = () => {
  const { keywords } = useAppSelector((state) => state.news);
  const [inputValue, setInputValue] = useDebounce(keywords, setKeywords, 300);
  const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
