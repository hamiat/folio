import style from "./skills.module.scss";
import { motion, Variants } from "framer-motion";
import { FaLongArrowAltLeft, FaLongArrowAltUp } from "react-icons/fa";
import { useState } from "react";
import { titleVariants, contentVariants, parentContainer } from "../../utilities/Animations";





const Skills: React.FC = () => {
  const [title, setTitle] = useState("Experience");
  const [whichTitle, setWhichTitle] = useState(false);

  const changeTitle = () => {
    if (title === "Experience") {
      setTitle("Education");
      setWhichTitle(!whichTitle);
    } else {
      setTitle("Experience");
      setWhichTitle(!whichTitle);
    }
  };

  return (
    
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3 }}
      className={style.skills}
    >
    
    
  
        {whichTitle ? (
  <motion.div variants={parentContainer} className={style.experiencesDiv}>
    <motion.h2
      onClick={changeTitle}
      variants={titleVariants}
      whileHover={{ color: "#ffc380" }}
    >
      {title}{" "}
      <motion.span initial={{color: "#ffc380"}} className={style.clickMe}>
      <FaLongArrowAltLeft className={style.leftArrow}/> 
        <FaLongArrowAltUp className={style.upArrow}/> click me for experiences!
      </motion.span>{" "}
    </motion.h2>
    <div className={style.experiences}>
      <motion.div variants={contentVariants} className={style.exp}>
      <h3>Hyper Island<span className={style.city}>, Stockholm (Sweden) </span></h3>
        <div className={style.jobTitleDiv}>
          <h4>Frontend Developer</h4>
          <span className={style.expSpan}>August 2020 - April 2022 </span></div>
       
        <p>
          - Frontend developer education centering around the web
          development languages HTML, CSS & JavaScript, as well as
          frameworks and tools in the frontend ecosystem. <br /> - Soft
          skills development such as working in teams and with Agile
          software development.
        </p>
      </motion.div>

      

      <motion.div variants={contentVariants} className={style.exp}>
      <h3>Hankuk University of Foreign studies<span className={style.city}>, Seoul (South Korea) </span></h3>
        <div className={style.jobTitleDiv}>
          <h4>Exchange Year</h4>
          <span className={style.expSpan}>August 2014 - June 2015</span></div>
        
        <p>
          - Emphasis on intercultural skills development and the Korean
          language.
        </p>
      </motion.div>

      <motion.div variants={contentVariants} className={style.exp}>
      <h3>Mälardalens högskola<span className={style.city}>, Västerås (Sweden)</span></h3>
        <div className={style.jobTitleDiv}>
          <h4>Aeronautical Engineering</h4>
          <span className={style.expSpan}>August 2011 - June 2013 </span></div>
        
        <p>- Bachelor’s degree</p>
      </motion.div>
    </div>
  </motion.div>
) : (
  <motion.div variants={parentContainer} className={style.experiencesDiv}>
    <motion.h2
      onClick={changeTitle}
      variants={titleVariants}
      whileHover={{ color: "#ffc380" }}
    >
      {title}{" "}
      <motion.span initial={{color: "#ffc380"}}  className={style.clickMe}>
        <FaLongArrowAltLeft className={style.leftArrow}/> 
        <FaLongArrowAltUp className={style.upArrow}/> click me for education!
      </motion.span>{" "}
    </motion.h2>
    <div className={style.experiences}>
      <motion.div variants={contentVariants} className={style.exp}>
        <h3>Judilica AB</h3>
        <div className={style.jobTitleDiv}>
          <h4>Frontend Developer Intern</h4>
          <span className={style.expSpan}>September 2021 - ongoing </span></div>

        <p>
          - Created the company’s landing page, from design to deployment
          (continuous deployment).
          <br />- Worked with Figma, React, Next.js, TypeScript and Sass for this
          project, as well as Github for collaboration with a fellow
          intern.
        </p>
      </motion.div>

      <motion.div variants={contentVariants} className={style.exp}>
      <h3> Datapath International AB </h3>
        <div className={style.jobTitleDiv}>
        <h4>Procurement Specialist & Order Coordinator</h4>
        <span className={style.expSpan}>June 2019 - August 2020 </span></div>
        
        <p>
          - Operational procurement and purchasing. <br />
          - Operational planning and coordination with suppliers.
          <br />- Tasks also included acting as POC for operations
          department, responsible for communicating with the customers
          from order placement to delivery.
        </p>
      </motion.div>

      <motion.div variants={contentVariants} className={style.exp}>
        <div className={style.jobTitleDiv}>
          <h4>Customer Service Engineer</h4>
          <span className={style.expSpan}>March 2016 - June 2019 </span></div>
    
        <p>
          - POC for aftersales, providing support and service via phone
          and email. <br /> - Quotating, invoicing and shipping spare
          parts to customers worldwide.
          <br />- Assisting the service department with their day-to-day
          repair and maintenance work.
        </p>
      </motion.div>
    </div>
  </motion.div>
)}
  
      

    </motion.section>
   
  );
};

export default Skills;


