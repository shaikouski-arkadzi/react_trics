import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Main />
      </div>
    </>
  );
}

export default App;
