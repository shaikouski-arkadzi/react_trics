import { useState } from "react";
import MenuItem from "./MenuItem";

const menuData = ["Short", "Very Loooooong item", "Normal item"];

function Menu() {
  const [activeIndex, setActive] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#eee",
        padding: "1rem",
        borderRadius: "25px",
        marginTop: "1rem",
      }}
    >
      {menuData.map((item, index) => (
        <MenuItem
          key={item}
          item={item}
          isSelected={activeIndex === index}
          handleClick={() => setActive(index)}
        />
      ))}
    </div>
  );
}

export default Menu;
