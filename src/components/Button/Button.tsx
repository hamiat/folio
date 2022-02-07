import { motion } from "framer-motion";
import style from "./button.module.scss";

const btnVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
    },
  },
  hover: {
    y: -2,
    x: -2,
    boxShadow: " 2px 2px  #ff8d0b",
    transition: {
      ease: "easeOut",
    },
  },
};
export interface iProps {
  children: React.ReactChild | React.ReactChild[];
  onClick?: any;
}

function Button({ children, onClick }: iProps) {
  return (
    <>
      <motion.div
        variants={btnVariants}
        whileHover="hover"
        whileTap="hover"
        onClick={onClick}
        className={style.button}
      >
        {children}{" "}
      </motion.div>
    </>
  );
}

export default Button;
