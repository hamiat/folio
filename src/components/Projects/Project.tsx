import style from "./projects.module.scss";
import { useState } from "react";
import { btnVariants } from "../../utilities/Animations";
import { motion } from "framer-motion";

export type Props = {
  index: number;
  id: number;
  title: string;
  image: string;
  alt: string;
  text: string;
  url: string;
  urlText: string;
  setProjects?: any
};

const Project: React.FC<Props> = ({
  id,
  title,
  image,
  alt,
  text,
  url,
  urlText,
  index,
}) => {
  const [hidden, setHidden] = useState(false);
  const showProject = () => {
    setHidden(!hidden);
  };

  return (
    <div id="projects" className={style.projectsDiv}>
      <h3 className={style.projectsTitle}>{title}</h3>
      <motion.button initial="initial" animate="animate" whileHover="hover" variants={btnVariants}  className={style.projectBtn} onClick={showProject}>
        {hidden ? "Show less" : "Show more"}
      </motion.button> 

      <div className={`${hidden ? style.showMore : style.showLess}`}>
        <p className={style.projectWrapper}>
          {" "}
          <a className={style.projectUrl} href={url}>
            {" "}
            {urlText}
          </a>
        </p>
        <img className={style.projectImage} src={image} alt={alt} />
      </div>
      <p
        className={`${hidden ? style.showMore : style.showLess} ${
          style.projectText
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Project;
