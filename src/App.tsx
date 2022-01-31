import style from "./styles/main.module.scss";
import About from "./components/About/About";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FaceSvg from "./components/FaceSvg/FaceSvg";
import Button from "./components/Button/Button";

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
};


const App: React.FC = () => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    setMode(!mode);
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

      <div className={style.btns}>
        <motion.div 
      variants={revealBtnVariants} 
      className={style.btn}
      >
        <Button onClick={handleToggle}>
          {mode ? "Light mode" : "Dark mode"}
        </Button>
      </motion.div>
         
      <motion.div variants={revealBtnVariants} className={style.btnTwo}>
        <Button>Get in touch!</Button>
      </motion.div>
      </div>

      <section className={style.rightContent}>
        <About />
      </section>
    </main>
  );
};

export default App;
