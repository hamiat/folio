import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import { useMediaQuery  } from "react-responsive";
import Judilica from "./Judilica";
import { useState } from "react";



const Projects = () => {
  const [hidden, setHidden] = useState(false)

  const showProject = () => {
    setHidden(!hidden)
  }
  return <motion.section className={style.projects}>
    <h2>Some of my projects</h2>
    <div>
   
  
     <Judilica hidden={hidden} showProject={showProject} />
   
    
    
    </div>
  </motion.section>;
};

export default Projects;
