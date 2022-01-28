import style from "./styles/main.module.scss";
import About from "./components/About/About";
import { motion } from "framer-motion";
import FaceSvg from "./components/FaceSvg/FaceSvg";

const startVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const App: React.FC = () => {
  return (
    <main className={style.main}>
      <motion.section
        variants={startVariants}
        initial="initial"
        animate="animate"
        className={style.leftContent}
      >
      {/*   <FaceSvg /> */}
      </motion.section>

      <section className={style.rightContent}>
        <About />
      </section>
    </main>
  );
};

export default App;
