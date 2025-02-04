import React, { Dispatch, SetStateAction } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./styles.module.css";

interface SearchProps {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ keywords, setKeywords }) => {
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
