import style from "./contact.module.scss";
import { motion } from "framer-motion";
import Flower from "../Flower/Flower";
import {
  titleVariants,
  contentVariants,
  btnVariants,
} from "../../utilities/Animations";

const Contact: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.4 }}
      className={style.contact}
    >
      <motion.h2 variants={titleVariants}>Contact</motion.h2>
      <motion.div className={style.contactLinks}>
        <motion.a
          variants={btnVariants}
          whileHover="hover"
          whileTap="hover"
          id="github"
          href="https://github.com/hamiat"
        >
          Github
        </motion.a>
        <motion.a
          variants={btnVariants}
          whileHover="hover"
          whileTap="hover"
          id="linkedin"
          href="https://www.linkedin.com/in/hamiat-nalwanga-b5a93bb1/"
        >
          LinkedIn
        </motion.a>
        <motion.a
          variants={btnVariants}
          whileHover="hover"
          whileTap="hover"
          id="mail"
          href="mailto:hamiat.n@hotmai.com"
        >
          Email
        </motion.a>
      </motion.div>
      <motion.section variants={contentVariants} className={style.flows}>
        <Flower classNames={style.flowsOne} />
        <p>Thanks for dropping by!</p>
        <Flower classNames={style.flowsTwo} />
      </motion.section>
    </motion.section>
  );
};

export default Contact;
