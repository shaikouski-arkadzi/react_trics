import styles from "./styles.module.css";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
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
