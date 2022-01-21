import style from "./about.module.scss";
import nameTwo from "../../nameTwo.svg";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "../Button/Button";

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


const startVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: "2vh",
  },
};



const comeDownVariants = {
  initial: {
    opacity: 1,
     
  },
  animate: {
    opacity: 1,
  
    transition: {
      
      duration: 1.5,
      ease: "easeInOut",
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
      variants={startVariants}
      initial="initial"
      animate="animate"
      className={style.content}
      transition={showModal ? { delay: 4.5, duration:1.5 } : { delay: 0 , duration:1.5}}
    >
      <motion.div variants={comeDownVariants}  className={style.btn}>
        <Button onClick={handleToggle}>
          {mode ? "Light mode" : "Dark mode"}
        </Button>
      </motion.div>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        transition={
          showModal
            ? { delayChildren: 5.5, staggerChildren: 1 }
            : { delayChildren: 0,  }
        }
        className={style.about}
      >
        <motion.h2 variants={titleVariants}>Hello there!</motion.h2>
        <motion.div>
          <motion.h3 variants={contentVariants}>
            welcome to my website...
          </motion.h3>
          <motion.p variants={contentVariants}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        className={style.skills}
      >
        <motion.h2 variants={titleVariants}>Skills</motion.h2>
        <motion.div>
          <motion.h3 variants={contentVariants}>Soft</motion.h3>
          <motion.p variants={contentVariants}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui
          </motion.p>
          <motion.div>
            <motion.h3 variants={contentVariants}>Hard</motion.h3>
            <motion.p variants={contentVariants}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default About;
