import React from "react";
import { formatDate } from "../../helpers/formatDate";
import { useTheme } from "../../context/ThemeProvider";
import { themeIcons } from "../../assets";
import styles from "./styles.module.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>News</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        alt="theme"
        onClick={toggleTheme}
        className={styles.themeSwitch}
      />
    </header>
  );
};

export default Header;
