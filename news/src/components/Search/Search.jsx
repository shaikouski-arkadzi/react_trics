import { useDebounce } from "../../hooks/useDebounce";
import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  const [inputValue, setInputValue] = useDebounce(keywords, setKeywords, 300);

  return (
    <div className={styles.search}>
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
