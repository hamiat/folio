import style from "./about.module.scss";
import nameTwo from "../../nameTwo.svg";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "../Button/Button";
import Skills from "../Skills/Skills";
import {FaLongArrowAltDown} from "react-icons/fa"
import SkillsSvg from "../Skills/SkillsSvg";

const delayStartVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
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
    y: "-50vw",
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      duration: 1.5,
    },
  },
};
const About: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  }, []);

  return (
    <motion.section
      variants={delayStartVariants}
      initial="initial"
      animate="animate"
      className={style.rightContent}
      
      transition={
        showModal ? { delay: 4.5, duration: 1.5 } : { delay: 0, duration: 1.5 }
      }
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        transition={
          showModal
            ? { delayChildren: 5.5, staggerChildren: 1 }
            : { delayChildren: 0 }
        }
        className={style.about}
      >
        
          <motion.h1 variants={titleVariants}>Hello there!</motion.h1>
          <motion.h2 variants={contentVariants}>
            welcome to my online resume...
          </motion.h2>
          <motion.p variants={contentVariants}>
            My name is Hamiat and I am currently studying to become a web
            developer.
          </motion.p>
          <motion.div variants={contentVariants} className={style.arrow}><FaLongArrowAltDown/></motion.div> 
        
      </motion.div>

      <Skills />
    </motion.section>
  );
};

export default About;
