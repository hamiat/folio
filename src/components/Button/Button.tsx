import { motion } from "framer-motion";
import style from "./button.module.scss";
import { btnVariants } from "../../utilities/Animations";

export interface Props {
  children: React.ReactChild | React.ReactChild[];
  onClick?: any;
}

const Button: React.FC<Props> = ( { children, onClick } ) =>
{
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
