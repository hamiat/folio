import style from "./projects.module.scss";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Project, { IProps } from "./Project";

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<Omit<IProps, "index">[]>([
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
      title: "Judilica",
      image: "/assets/judilica2.jpg",
      alt: "desktop and mobile example of a website",
      text: "Eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
      url: "",
      urlText: "",
   
    },
  ]);

  return (
    <motion.section className={style.projects}>
      <h2>Some of my projects</h2>
      <div>
        {projects.map((project, index) => (
          <Project {...project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
