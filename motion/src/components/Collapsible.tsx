import { motion, AnimatePresence } from "framer-motion";
import { useState, PropsWithChildren } from "react";

interface ICollapsible {
  title: string;
}

const Collapsible: React.FC<PropsWithChildren<ICollapsible>> = ({
  title = "click me",
  children,
}) => {
  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible((visible) => !visible);

  return (
    <>
      <button
        style={{
          backgroundColor: "#ddd",
          width: 300,
          padding: "0.8rem 1.2rem",
        }}
        onClick={handleVisibility}
      >
        {title}
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0.8rem 1.2rem",
                width: 300,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collapsible;
