import { motion } from "framer-motion";
import Img from "../assets/hero.png";
import { MButton } from "./Button";
import "./hero.css";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Hero() {
  // viewport - The animation starts when 10% of the element is visible.
  return (
    <motion.section
      initial="hidden"
      className="hero"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="hero-text">
        <motion.h1 custom={1} variants={textAnimation}>
          Title Hero
        </motion.h1>
        <motion.p custom={2} variants={textAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          cumque expedita, natus praesentium fugiat velit, nemo nihil illo optio
          tempore possimus hic ea sapiente rem molestiae fugit. Repudiandae,
          quas corrupti.
        </motion.p>
        <MButton custom={3} variants={textAnimation}>
          Learn more
        </MButton>
      </div>
      <div className="hero-image">
        <img src={Img} alt="Hero Image" />
      </div>
    </motion.section>
  );
}

export default Hero;
