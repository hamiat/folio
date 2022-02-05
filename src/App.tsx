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
  hover: 
  {
  borderTop:" 2px dotted #ff8d0b",
  borderBottom:" 2px dotted #ff8d0b",
}
};


const App: React.FC = () => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    
    if(mode) {
      alert("coming soon!")
     setMode(!mode)
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

      <motion.div variants={revealBtnVariants} whileHover="hover"  whileTap="hover" className={style.btnTwo}>
        <Button onClick={handleToggle}> {mode ? "Light mode" : "Dark mode"}</Button>
      </motion.div>
      

     
        <About />
     
   
    </main>
  );
};

export default App;
