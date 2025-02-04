import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { useTheme } from "./context/ThemeProvider";
import styles from "./App.module.css";

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.app} ${isDark ? styles.dark : styles.light}`}>
      <Header />
      <div
        className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
      >
        <Main />
      </div>
    </div>
  );
}

export default App;
