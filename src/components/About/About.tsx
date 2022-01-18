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
    y: "100vh",
  },
  animate: {
    y:0, 
  }
}
const reveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity:1, 
  }
}

const About: React.FC = () => {
    return(

<div className={style.about}  >

  <motion.h2
  variants={childVariants}
  initial="initial"
  animate="animate"
  transition= {{
    type: 'tween', 
    delay: 5,
    duration: 1.5,
  }}
  >
    Hello there!</motion.h2>
    <motion.div   variants={reveal}
  initial="initial"
  animate="animate" transition= {{
    type: 'tween', 
    delay: 6.5,
    duration: 1.5,
  }}>
    <motion.h3>welcome to my website...</motion.h3>
  <motion.p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui </motion.p>
  </motion.div>
  
</div>
    )
}

export default About 