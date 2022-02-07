import { motion } from "framer-motion";
import style from "./button.module.scss"

const revealBtnVariants = {
  initial: {
    opacity: 0,
    border:" none",
    boxShadow:" none",
  },
  animate: {
    opacity: 1,
    border:" none",
    boxShadow:" none",
    
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4, 
    },
  },
  hover: 
  {
    y:-2,
    x:-2,
  
  boxShadow:" 2px 2px  #ff8d0b",
  transition: {
    
    
    ease: "easeOut",
   
  }
 
}
};
export interface iProps {
  children: React.ReactChild | React.ReactChild[];
  onClick?: any
}

function Button( {children, onClick, }: iProps) {
  return (
    <>
    <motion.div variants={revealBtnVariants} whileHover="hover"  whileTap="hover" onClick={onClick} className={style.button}>{children} </motion.div>

    </>
  );
}

export default Button;
