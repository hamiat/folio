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
  setProjects?: any;
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
    <div className={style.projectsDiv}>
      <h3
        className={`${
          hidden ? style.projectsTitleClosed : style.projectsTitleOpen
        }`}
      >
        {title}
      </h3>
      <motion.button
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={btnVariants}
        className={style.projectBtn}
        onClick={showProject}
      >
        {hidden ? "Show less" : "Show more"}
      </motion.button>

      <div className={`${hidden ? style.showMore : style.showLess}`}>
        <img className={style.projectImage} src={image} alt={alt} />
        <div className={style.projectDesc}>
          <p className={style.projectText}>{text}</p>
          <p className={style.projectWrapper}>
            <a className={style.projectUrl} href={url}>
              {urlText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
