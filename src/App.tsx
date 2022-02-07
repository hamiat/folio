import style from "./styles/main.module.scss";
import About from "./components/About/About";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FaceSvg from "./components/FaceSvg/FaceSvg";
import Button from "./components/Button/Button";
import { Controller, Scene } from "react-scrollmagic";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const startVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const revealBtnVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
    },
  },
  hover: {
    border: " 1px solid $000000",
    boxShadow: " 2px 2px  #ff8d0b",
  },
};

const App: React.FC = () => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    if (mode) {
      alert("coming soon!");
      /* setMode(!mode) */
    }
  };

  return (
    <main className={style.main}>
      <motion.section
        variants={startVariants}
        initial="initial"
        animate="animate"
        className={style.leftContent}
      >
        <FaceSvg />
      </motion.section>

      <motion.div className={style.btnTwo}>
        <Button onClick={handleToggle}>
          {" "}
          {mode ? "Light mode" : "Dark mode"}
        </Button>
      </motion.div>

      <About />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;
