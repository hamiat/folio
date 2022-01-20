import style from "./about.module.scss";
import nameTwo from "../../nameTwo.svg";
import { motion, Variants } from "framer-motion";

const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
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
const revealVariants: Variants = {
  offscreen: {
  
  
  y:0
  },
  onscreen: {
    y:"-10vh",
   
    transition: {
      ease: "easeInOut",
      duration: 2,
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
    transition: {
      delay: 3.8,
      duration: 1.5,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const About: React.FC = () => {
  return (
    <motion.div
      variants={startVariants}
      initial="initial"
      animate="animate"
      className={style.content}
      
    >
      <motion.section initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }} className={style.about}>
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

      <motion.section initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}  className={style.skills} >
        <motion.div  variants={revealVariants}>
        <motion.h2 variants={titleVariants}>Skills</motion.h2>
        <motion.div>
          <motion.h3 variants={contentVariants}>
            Soft
          </motion.h3>
          <motion.p variants={contentVariants}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.h3 variants={contentVariants}>
            Hard
          </motion.h3>
          <motion.p variants={contentVariants}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui
          </motion.p>
        </motion.div>
        </motion.div>
      </motion.section>

      
    </motion.div>
  );
};

export default About;
