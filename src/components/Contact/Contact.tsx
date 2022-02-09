import style from "./contact.module.scss";
import { motion, Variants } from "framer-motion";



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

const btnVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
    },
  },
  hover: {
    y: -2,
    x: -2,
    boxShadow: " 2px 2px  #ff8d0b",
    transition: {
      ease: "easeOut",
    },
  },
};

const Contact: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3 }}
      className={style.contact}
    >
      <motion.h2 variants={titleVariants}>Contact</motion.h2>
      <motion.a
        variants={btnVariants}
        whileHover="hover"
        whileTap="hover"
        id="github"
        href="https://github.com/hamiat"
      >
        Github
      </motion.a>
      <motion.a
        variants={btnVariants}
        whileHover="hover"
        whileTap="hover"
        id="linkedin"
        href="https://www.linkedin.com/in/hamiat-nalwanga-b5a93bb1/"
      >
        LinkedIn
      </motion.a>
      <motion.a
        variants={btnVariants}
        whileHover="hover"
        whileTap="hover"
        id="mail"
        href="mailto:hamiat.n@hotmai.com"
      >
        Email
      </motion.a>
    </motion.section>
  );
};

export default Contact;
/* 
return (
   
  <motion.section
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: false, amount: 0.3 }}
    className={style.contact} 
  >
     <Controller>
    
    <Scene
     duration={500}
     triggerHook={0.75}
     pin={{ pushFollowers: false }}
     offset={125}>
       {(progress: any) => (
          <div>
            <Timeline totalProgress={progress} paused>
             
          

                <Timeline target={
                <div className={style.contacts}>
                  <motion.h2 variants={titleVariants} >Contact</motion.h2>
        <motion.a 
         variants={btnVariants}
         whileHover="hover"
         whileTap="hover"
          id="github"
          href="https://github.com/hamiat"
        >
          Github
        </motion.a>
        <motion.a
           variants={btnVariants}
           whileHover="hover"
           whileTap="hover"
          id="linkedin"
          href="https://www.linkedin.com/in/hamiat-nalwanga-b5a93bb1/"
        >
          LinkedIn
        </motion.a>
        <motion.a
          variants={btnVariants}
          whileHover="hover"
          whileTap="hover"
          id="mail"
          href="mailto:hamiat.n@hotmai.com"
        >
          Email
        </motion.a>
       
      </div>}>
      <Tween from={{ x: -1000 }} to={{ x: 0 }} />
                  <Tween from={{ opacity: 1 }} to={{ opacity: 0.9 }} />
      </Timeline>
    </Timeline>
    </div>
        )}
    </Scene>
    </Controller>
  </motion.section>
  
); */
