import style from "./contact.module.scss";
import { motion, Variants } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";


const parentContainer: Variants = {
  offscreen: {},
  onscreen: {},
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
  hover: {
 
    borderBottom: " 2px dotted #ff8d0b",
  },
};

const Contact: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      id="sample"
    >
      <motion.div  className={style.contactsDiv} variants={parentContainer}>
      <motion.h2 variants={titleVariants}>Contact</motion.h2>
        <motion.div variants={parentContainer} className={style.contacts} >
          <motion.a variants={contentVariants}  whileHover="hover" id="github" href="https://github.com/hamiat">
            Github
          </motion.a>
          <motion.a variants={contentVariants}  whileHover="hover" 
            id="linkedin"
            href="https://www.linkedin.com/in/hamiat-nalwanga-b5a93bb1/"
          >
            LinkedIn
          </motion.a>
          <motion.a variants={contentVariants}  whileHover="hover" 
          id="mail" href="mailto:hamiat.n@hotmai.com">
            Email
          </motion.a>
        </motion.div>
      </motion.div>
      {/* <motion.div variants={contentVariants} className={style.arrowToContact}><FaLongArrowAltUp/></motion.div> */}
    </motion.section>
  );
};

export default Contact;
