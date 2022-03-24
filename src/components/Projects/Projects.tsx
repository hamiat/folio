import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Project, { IProps,  } from "./Project";



export default function Projects(): JSX.Element {
  const [hidden, setHidden] = useState(false)  

  const [projects, setProjects ] = useState<Omit<IProps, "hidden" |"showProject">[]>([
    {
      id: 1 ,
      title: "Judilica",
      image: "/assets/judilica2.jpg",
      alt: "desktop and mobile example of a website",
      text: "Eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore"
    },
    {
      id: 2 ,
      title: "8 Great Repositories",
      image: "/assets/repos.jpg",
      alt: "desktop and mobile example of an app",
      text: "Eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore"
    },
  ])

  const showProject = () => {
    setHidden(!hidden)
  }
  
  return <motion.section className={style.projects}>
    <h2>Some of my projects</h2>
    <div>
   
  
 
 {projects.map( project => (
   <Project {...project} hidden={hidden} showProject={showProject} />
 ))}
    
    
    </div>
  </motion.section>;
};

 
