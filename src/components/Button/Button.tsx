import { motion } from "framer-motion";
import style from "./button.module.scss"

const pathVariants = {
  initial: {
  
  },
  animate: {
    
    
    
    transition: {
      delay: 9,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
export interface iProps {
  children: React.ReactChild | React.ReactChild[];
  onClick?: any
}

function Button( {children, onClick, }: iProps) {
  return (
    <>
    <motion.button onClick={onClick} className={style.button}>{children} </motion.button>

    </>
  );
}

export default Button;
