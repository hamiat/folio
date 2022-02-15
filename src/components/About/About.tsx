import style from "./about.module.scss";
import { motion, Variants } from "framer-motion";
import {FaLongArrowAltDown} from "react-icons/fa"
import { useMediaQuery } from "react-responsive";


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




export type Props = {
  showModal: boolean
  
}

const About = ({showModal}: Props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <motion.section
      variants={delayStartVariants}
      initial="initial"
      animate="animate"
      className={style.rightContent}
      
      transition={
        showModal && !isMobile ? { delay: 4, duration: 1.5 } : { delay: 0, duration: 1.5 }
      }
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        transition={
          showModal && !isMobile 
            ? { delayChildren: 4.5, staggerChildren: 0.5 }
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

      </motion.section>
  );
};

export default About;
