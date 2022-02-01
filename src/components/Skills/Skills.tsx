import style from "./skills.module.scss";
import { motion, Variants } from "framer-motion";
import SkillsSvg from "./SkillsSvg";
import {FaLongArrowAltDown} from "react-icons/fa"



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
const parentContainer: Variants = {
  offscreen: {},
  onscreen: {},
};

const Skills: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3 }}
      className={style.skills}
    >
      <motion.div variants={parentContainer} className={style.experiencesDiv}>
        <motion.h2 variants={titleVariants}>Experience</motion.h2>
        <div className={style.experiences}>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Frontend Developer Intern</h3>
            <p>Sept 2021 - April 2022 </p>
          </div>
          <h4>Judilica AB</h4>
          <p>
            Wholesome and well rounded internship building the company website
            from design to deployment.
          </p>
        </motion.div>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Procurement Specialist & Order Coordinator</h3>
            <p>June 2019 - August 2020 </p>
          </div>
          <h4>Datapath International AB</h4>
          <p>
            •Operational procurement and purchasing. <br />
            • Operational planning and coordination with suppliers.
            <br />• Tasks also included acting as POC for operations department,
            responsible for communicating with the customers from order
            placement to delivery.
          </p>
        </motion.div>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Customer service engineer</h3>
            <p>March 2016 - June 2019 </p>
          </div>
          <h4>Datapath International AB</h4>
          <p>
          • POC for aftersales, providing support and service via phone and email. <br /> • Quotating, invoicing and shipping spare parts to customers worldwide.<br />
•
Assisting the service department with their day-to-day repair and maintenance work. 
            
          </p>
        </motion.div>
        </div>
        </motion.div>
        <motion.div variants={contentVariants} className={style.arrowToSkills}><FaLongArrowAltDown/></motion.div> 
        <div className={style.skillsIcons}>
         <SkillsSvg />
        </div>
      
    </motion.section>
  );
};

export default Skills;
