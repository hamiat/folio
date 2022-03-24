import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Project, { IProps } from "./Project";

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
      duration: 0.7,
    },
  },
};

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<Omit<IProps, "index" | "setProjects">[]>([
    {
      id: 1,
      title: "8 Great Repositories",
      image: "/assets/repos.png",
      alt: "desktop and mobile example of an app",
      text: "A counter that uses the GitHub REST API to retrieve some information about 8 great repositories, created with React & JSS.",
      url: "https://codesandbox.io/s/github/hamiat/eight-great-repos?file=/src/App.js:1866-1895",
      urlText: "Try this out @ codesandbox",
    },
    {
      id: 2,
      title: "Space game",
      image: "/assets/spaces.png",
      alt: "desktop and mobile example of a website",
      text: "A space themed 3D gaming experience created with A-frame.",
      url: "https://hamiat.github.io/spaces/",
      urlText: "Try this out (for desktop)",
    },
  ]);

 

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.4 }}
      className={style.projects}
    >
      <motion.h2 variants={titleVariants}>Some of my projects</motion.h2>
      <div className={style.projectsContainer}>
        {projects.map((project, index) => (
          <Project {...project} setProjects={setProjects} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
