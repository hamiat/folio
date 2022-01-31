import style from "./contact.module.scss";
import { motion, Variants } from "framer-motion";
import {FaLongArrowAltDown} from "react-icons/fa"

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
  rotateHover: {
    rotate: 15,
    transition: {
      type: 'spring',
      duration: 3,
    },
  }
};
const parentContainer: Variants = {
  offscreen: {},
  onscreen: {},
};


    

const Contact: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 1 }}
     
    >
    

      
          <motion.div variants={parentContainer} >
           
          
          

          <motion.div variants={contentVariants} className={style.arrowToContact}><FaLongArrowAltDown/></motion.div>
          <motion.div variants={contentVariants} className={style.contacts}>
<h2>Let's talk</h2>
<p>Email</p>
<p>LinkedIn</p>
<p>Github</p>

</motion.div>
</motion.div>
         
    
    </motion.section>
  );
};

export default Contact;
