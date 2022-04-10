import { motion } from "framer-motion";
import style from "./button.module.scss";
import { btnVariants } from "../../utilities/Animations";

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
        {children}
      </motion.div>
    </>
  );
}

export default Button;
