import style from "./contact.module.scss";
import { motion, Variants } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Scene , Controller} from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";



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
    <Controller>
    <motion.section
     initial="offscreen"
     whileInView="onscreen"
     viewport={{ once: false, amount: 0.3 }}
      className={style.contactsDiv} 
    >
      <motion.h2 variants={titleVariants} >Contact</motion.h2>
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
          <a
            id="github"
            href="https://github.com/hamiat"
          >
            Github
          </a>
          <a
            
            id="linkedin"
            href="https://www.linkedin.com/in/hamiat-nalwanga-b5a93bb1/"
          >
            LinkedIn
          </a>
          <a
           
            id="mail"
            href="mailto:hamiat.n@hotmai.com"
          >
            Email
          </a>
         
        </div>}>
        <Tween from={{ x: 1000 }} to={{ x: 0 }} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0.9 }} />
        </Timeline>
      </Timeline>
      </div>
          )}
      </Scene>
    </motion.section>
    </Controller>
  );
};

export default Contact;


/* <motion.div variants={contentVariants} className={style.arrowToContact}><FaLongArrowAltUp/></motion.div> */