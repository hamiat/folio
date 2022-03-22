import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import Button from "../Button/Button";



export interface IProps  {
  hidden: boolean
  showProject: any;
  id: number,
  title: string,
  image: string,
  alt: string,
  text: string

}


export const Project: React.FC<IProps> = ({id, title, image, alt, text, showProject, hidden}) => {
  
  return <div className={style.projectsDiv}>
    <h3 className={style.companyName}>{title}</h3>
     <Button  onClick={showProject}>{hidden ? "Show less" : "Show more"}</Button>
     <div className={`${hidden ? style.showMore : style.showLess }`}>
   
   <img className={style.judilicaTwo} src={image} alt={alt} />
   <img className={style.judilicaOne} src={image} alt={alt} />
  
   
  
   </div>

   <p className={`${hidden ? style.showMore : style.showLess } ${style.judilicaText}`}>{text}</p>
  </div>
 
};


