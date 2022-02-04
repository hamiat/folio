import style from "./skills.module.scss";
import { motion, Variants } from "framer-motion";
import SkillsSvg from "./SkillsSvg";
import {FaLongArrowAltDown, FaLongArrowAltLeft} from "react-icons/fa"
import { useState } from "react";



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

  const [title, setTitle] = useState("Experience")
  const [whichTitle, setWhichTitle] = useState(false)

  const changeTitle = () => {
    if(title === "Experience") {
      setTitle("Education")
      setWhichTitle(!whichTitle)
    } else {
      setTitle("Experience")
      setWhichTitle(!whichTitle)
    }
  }


  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      className={style.skills}
    >
     
     { whichTitle ? 
     <motion.div variants={parentContainer} className={style.experiencesDiv}>
         <motion.h2 onClick={changeTitle} variants={titleVariants} whileHover={{color: "#f7931e"}} >{title} <motion.span  className={style.clickMe}><FaLongArrowAltLeft/> click me!</motion.span> </motion.h2>
        <div className={style.experiences}>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Frontend developer</h3>
            <p>2020 -  2022 </p>
          </div>
          <h4>Hyper Island (Sweden)</h4>
          <p>
          • Frontend developer education centering around the web development languages HTML, CSS & JavaScript, as well as frameworks and tools in the frontend ecosystem. <br/>
          • Soft skills developement such as working in teams and with Agile software development.
          </p>
        </motion.div>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Aeronautical engineering</h3>
            <p>2011-2013 </p>
          </div>
          <h4>Mälardalens högskola (Sweden)</h4>
          <p>
          • Bachelor’s degree
          </p>
        </motion.div>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Customer service engineer</h3>
            <p>2014 - 2015</p>
          </div>
          <h4>Hankuk University of Foreign studies (South Korea)</h4>
          <p>
          • Emphasis on intercultural skills development and the Korean language. 
            
          </p>
        </motion.div>
        </div>
        </motion.div> 
        : 
        <motion.div variants={parentContainer} className={style.experiencesDiv}>
       <motion.h2 onClick={changeTitle} variants={titleVariants} whileHover={{color: "#f7931e"}} >{title} <motion.span  className={style.clickMe}><FaLongArrowAltLeft/> click me!</motion.span> </motion.h2>
        <div className={style.experiences}>

        <motion.div variants={contentVariants} className={style.exp}>
          <h3>Judilica AB</h3>
          <div className={style.jobTitleDiv}>
          
            <h4>Frontend Developer Intern</h4>
            <p>Sept 2021 - April 2022 </p>
          </div>
         
          <p>
          - Created the company’s landing page, from design to
deployment (continuous deployment).<br/>
- Worked with Figma, Next.js, TypeScript and Sass for this project,
as well as Github for collaboration with a fellow intern.
          </p>
        </motion.div>

        <motion.div variants={contentVariants} className={style.exp}>
          <div className={style.jobTitleDiv}>
            <h3>Procurement Specialist & Order Coordinator</h3>
            <p>June 2019 - August 2020 </p>
          </div>
          <h4>Datapath International AB</h4>
          <p>
            • Operational procurement and purchasing. <br />
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
}
        
        


        <motion.div 
        variants={contentVariants} 
        className={style.arrowToSkills}>
          <FaLongArrowAltDown/>
        </motion.div> 

        <div className={style.skillsIcons}>
         <SkillsSvg />
        </div>
      
    </motion.section>
  );
};

export default Skills;
