import style from "./projects.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Project, { Props } from "./Project";
import { useMediaQuery } from "react-responsive";
import { titleVariants, opacityVariants } from "../../utilities/Animations";

const Projects: React.FC = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 960px)" });
  const [projects, setProjects] = useState<
    Omit<Props, "index" | "setProjects">[]
  >([
    {
      id: 1,
      title: "Cakes and Stuff",
      image: "/assets/cakenstuff.png",
      alt: "example of an app",
      text: "A fictional online cake shop, apologies in advance for making you hungry. Built with the MERN stack.",
      url: "https://cakesandstuff.netlify.app/",
      urlText: "Try this out, on any device you please!",
    },
    {
      id: 2,
      title: "Space game",
      image: "/assets/spaces.png",
      alt: "desktop and mobile example of a website",
      text: "A space themed 3D/VR gaming experience with 3 levels. Use the mouse to explore and click on objects and the arrows to move. Created with A-frame.",
      url: "https://hamiat.github.io/spaces/",
      urlText: "Try this out on desktop or with a VR headset.",
    }, 
    {
      id: 3,
      title: "8 Great Repositories",
      image: "/assets/repos.png",
      alt: "desktop and mobile example of an app",
      text: "A counter that uses the GitHub REST API to retrieve information about 8 great repositories. Created with React & JSS.",
      url: "https://codesandbox.io/s/github/hamiat/eight-great-repos?file=/src/App.js:1866-1895",
      urlText: "Try this codesandbox project on a pad or desktop.",
    },
    {
      id: 4,
      title: "Interactive children's game",
      image: "/assets/oldmcdonld.png",
      alt: "desktop and mobile example of a website",
      text: "An interactive kids game based on the song 'Old McDonald had a farm'. Created with vanilla JavaScript.",
      url: "https://creative-starburst-5e276c.netlify.app/",
      urlText: "Try this out on desktop.",
    },  
  ]);

  return (
    <motion.section
      id="projects"
      initial="offscreen"
      whileInView="onscreen"
      viewport={
        isMobileOrTablet
          ? { once: true, amount: 0.4 }
          : { once: false, amount: 0.4 }
      }
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
