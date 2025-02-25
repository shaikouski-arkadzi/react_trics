import { motion } from "framer-motion";

interface IMenuItem {
  item: string;
  isSelected: boolean;
  handleClick?: () => void;
}

function MenuItem({ item, isSelected, handleClick = () => {} }: IMenuItem) {
  return (
    <motion.div
      onClick={handleClick}
      style={{
        margin: "0 0.5rem",
        fontWeight: 900,
        position: "relative",
      }}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "rgb(255, 0, 0)" : "#000" }}
    >
      {isSelected && (
        <motion.div
          layoutId="activeItem"
          style={{
            width: "calc(100% - 10px)",
            height: "4px",
            position: "absolute",
            bottom: "-6px",
            left: "5px",
            backgroundColor: "rgb(255, 0, 0)",
          }}
        />
      )}
      {item}
    </motion.div>
  );
}

export default MenuItem;
