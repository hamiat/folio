import style from "./projects.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Project, { Props } from "./Project";
import { titleVariants, opacityVariants } from "../../utilities/Animations";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<
    Omit<Props, "index" | "setProjects">[]
  >([
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
      <motion.div
        variants={opacityVariants}
        className={style.projectsContainer}
      >
        {projects.map((project, index) => (
          <Project {...project} setProjects={setProjects} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
