import style from "./about.module.scss";
import nameTwo from "../../nameTwo.svg";
import { motion, Variants } from "framer-motion";

const contentVariants: Variants = {
  offscreen: {
    opacity:0
  },
  onscreen: {
   opacity: 1,
   transition: {
    ease: "easeInOut",
    delay: 5.8,
    duration: 2,
  }
    
  },
};
const titleVariants: Variants = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: "-4vh",
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delay: 3.8,
      duration: 2,
      
    },
  },
};

const About: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      className={style.content}
  
    >
      <motion.section className={style.about} >
      <motion.h2 variants={titleVariants} >Hello there!</motion.h2>
      <motion.div >
        <motion.h3 variants={contentVariants} 
     >
          welcome to my website...
        </motion.h3>
        <motion.p variants={contentVariants} >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui
        </motion.p>
      </motion.div>
      </motion.section>
     
    </motion.div>
  );
};

export default About;
