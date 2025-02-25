import { motion } from "framer-motion";
import viteLogo from "/vite.svg";
import Collapsible from "./components/collapsible";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const pVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  const items = ["Text 1", "Text 2", "Text 3"];

  return (
    <>
      <Collapsible title="Toggle content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <motion.img
              src={viteLogo}
              className="logo"
              alt="Vite logo"
              animate={{ rotate: 360 }}
              transition={{
                delay: 3,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                repeatType: "reverse",
                type: "spring",
              }}
            />
          </a>
        </div>
        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          variants={pVariants}
        >
          Vite + React
        </motion.h1>
        <div className="card">
          <motion.p whileHover={{ scale: 1.3, color: "red" }}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </motion.p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        {items.map((el, i) => (
          <motion.li
            variants={listVariants}
            key={el}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {el}
          </motion.li>
        ))}
      </Collapsible>
      <Menu />
    </>
  );
}

export default App;
