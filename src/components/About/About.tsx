import style from "./about.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  opacityVariants,
  titleVariants,
  contentVariants,
} from "../../utilities/Animations";
import Navbar from "../Navbar/Navbar";

export type Props = {
  showModal: boolean;
};

const About: React.FC<Props> = ({ showModal }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <motion.section
      variants={opacityVariants}
      initial="offscreen"
      animate="onscreen"
      className={style.rightContent}
      transition={
        showModal && !isMobile
          ? { delay: 4, duration: 1.5 }
          : { delay: 0, duration: 1.5 }
      }
    >
      {!isMobile && (
        <motion.header
          variants={opacityVariants}
          initial="initial"
          animate="animate"
          transition={
            showModal && !isMobile
              ? { delay: 7, duration: 1.5 }
              : { delay: 1.5, duration: 1.5 }
          }
          className={style.header}
        >
          {/*<Button onClick={handleToggle}>
            {mode ? "Light mode" : "Dark mode"}
          </Button>*/}
          <Navbar />
        </motion.header>
      )}

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        transition={
          showModal && !isMobile
            ? { delayChildren: 4.5, staggerChildren: 1 }
            : { delayChildren: 0 }
        }
        className={style.about}
      >
        <motion.h1 variants={titleVariants}>Hello there!</motion.h1>
        <motion.h2 variants={contentVariants}>
          welcome to my portfolio
        </motion.h2>
        <motion.p variants={contentVariants}></motion.p>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        transition={
          showModal && !isMobile
            ? { delayChildren: 5.5, staggerChildren: 1.5 }
            : { delayChildren: 0 }
        }
        className={style.about}
      >
        <motion.h3
          variants={opacityVariants}
          initial="initial"
          animate="animate"
          transition={
            showModal && !isMobile
              ? { delay: 7, duration: 1.5 }
              : { delay: 1.5, duration: 1.5 }
          }
        >
          check out some of my projects
        </motion.h3>
        <motion.h3
          className={style.projectsDiv}
          variants={opacityVariants}
          initial="initial"
          animate="animate"
          transition={
            showModal && !isMobile
              ? { delay: 7, duration: 1.5 }
              : { delay: 1.5, duration: 1.5 }
          }
        >
          <a
            className={style.projectUrl}
            href="https://cakesandstuff.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cakes n stuff
          </a>
          <a
            className={style.projectUrl}
            href="https://hamiat.github.io/spaces/"
            target="_blank"
            rel="noopener noreferrer"
          >
            space game
          </a>
          <a
            className={style.projectUrl}
            href="https://codesandbox.io/p/sandbox/8-great-repos-qxw4g9"
            target="_blank"
            rel="noopener noreferrer"
          >
            8 great repositories
          </a>
          <a
            className={style.projectUrl}
            href="https://creative-starburst-5e276c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-i-e-i-o!
          </a>
        </motion.h3>
        <motion.p variants={contentVariants}></motion.p>
      </motion.div>

      <motion.section
        className={style.footer}
        variants={opacityVariants}
        initial="initial"
        animate="animate"
        transition={
          showModal && !isMobile
            ? { delay: 7, duration: 1.5 }
            : { delay: 1.5, duration: 1.5 }
        }
      >
        <p>&copy; {getCurrentYear()}</p>
      </motion.section>
    </motion.section>
  );
};

export default About;
