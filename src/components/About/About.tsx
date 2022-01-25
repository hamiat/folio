import style from "./about.module.scss";
import nameTwo from "../../nameTwo.svg";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "../Button/Button";
import Skills from "../Skills/Skills";


const delayStartVariants = {
  initial: {
    opacity: 0,
    
  },
  animate: {
    opacity: 1,
   
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

const titleVariants: Variants = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: "-3vh",
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};


const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};




const sideVariants = {
  offscreen: {
    opacity: 1,
    y:"-50vw"
  },
  onscreen: {
    opacity: 1,
    y:0
,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      duration: 1.5
      
    },
  },
};
const About: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    setMode(!mode);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  }, []);

  return (
    <motion.div
      variants={delayStartVariants}
      initial="initial"
      animate="animate"
      className={style.content}
      transition={
        showModal ? { delay: 4.5, duration: 1.5 } : { delay: 0, duration: 1.5 }
      }
    >
       
      

      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        transition={
          showModal
            ? { delayChildren: 5.5, staggerChildren: 1 }
            : { delayChildren: 0 }
        }
        className={style.about}
      >
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
       
        <div className={style.aboutContent}>
        <motion.h1 variants={titleVariants}>Hello there!</motion.h1>
          <motion.h2 variants={contentVariants}>
            welcome to my website...
          </motion.h2>
          <motion.p variants={contentVariants}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui
          </motion.p>
        </div>
      
      </motion.section>

     <Skills />
    </motion.div>
  );
};

export default About;
