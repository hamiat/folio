import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import Button from "../Button/Button";
import { useState } from "react";

export type IProps = {
 index: number,
  id: number;
  title: string;
  image: string;
  alt: string;
  text: string;
  url: string;
  urlText: string;
 
};

const Project: React.FC<IProps> = ({ id, title, image, alt, text, url , urlText, index }) => {
  const [hidden, setHidden] = useState(false);
  const showProject = () => {
    setHidden(!hidden);
  };

  return (
    <div className={style.projectsDiv}>
      <h3  className={style.projectsTitle}>{title}</h3>
      <button onClick={showProject}>
        {hidden ? "Show less" : "Show more"}
      </button>
     
      <div className={`${hidden ? style.showMore : style.showLess}`}>
      <p  className={style.projectWrapper}> <a className={style.projectUrl} href={url}> {urlText}</a></p>
        <img className={style.projectImage} src={image} alt={alt} />
      </div>
      <p className={`${hidden ? style.showMore : style.showLess} ${
          style.projectText
        }`}>
        {text}
      </p>
    </div>
  );
};

export default Project;
