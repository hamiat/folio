import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import { useMediaQuery  } from "react-responsive";
import Button from "../Button/Button";

export interface iProps {
  hidden: boolean
  showProject?: any;
}


const Judilica = ({hidden, showProject} :iProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return <div className={style.projectsDiv}>
    <h3 className={style.companyName}>Judilica</h3>
     <Button  onClick={showProject}>{hidden ? "Show less" : "Show more"}</Button>
     <div className={`${hidden ? style.showMore : style.showLess }`}>
   
   <img className={style.judilicaTwo} src="/assets/judilica2.jpg" alt="desktop and mobile example of a website" />
   <img className={style.judilicaOne} src="/assets/judilica.jpg" alt="desktop and mobile example of a website" />
  
   
  
   </div>

   <p className={`${hidden ? style.showMore : style.showLess } ${style.judilicaText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a hendrerit ipsum. Aenean pharetra commodo tempor. Integer augue nibh, vehicula nec justo in, malesuada dapibus tortor. Nunc efficitur feugiat lorem, sed gravida risus mattis nec.</p>
  </div>
 
};

export default Judilica;
