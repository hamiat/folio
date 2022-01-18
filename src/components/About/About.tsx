import style from "./about.module.scss"
import nameTwo from '../../nameTwo.svg'
import { motion } from "framer-motion"

/* const containerVariants = {
  initial: {
   
    opacity:0,
  },
  animate: {
    y:0,
    opacity:1,
    transition: {
      type: 'spring', 
      duration: 1.5,
      mass: 500,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.6
    }
  },exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}
 */



const childVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y:0, transition: {
      type: 'spring', 
      delay: 5,
      duration: 1.5,
      mass: 2,
      damping: 15,
      
    }
  }
}

const About: React.FC = () => {
    return(

<div  >

  <motion.h2
  variants={childVariants}
  >
    Welcome to my website!</motion.h2>
  <motion.h3
   variants={childVariants}>A little about me...</motion.h3>
  <motion.p variants={childVariants}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui </motion.p>
</div>
    )
}

export default About 