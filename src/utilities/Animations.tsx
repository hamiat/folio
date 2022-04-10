import { motion, Variants } from "framer-motion";

export const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

/***************** Hero ****************** */
export const startVariants = {
  initial: {
    gridColumn: "1/span 2",
    opacity: 0,
  },
  initialMobile: {
    gridColumn: "1/span 1",
    opacity: 0,
  },
  animate: {
    gridColumn: "1/span1",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  animateMobile: {
    gridColumn: "1/span 1",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  hover: {
    stroke: "#ffc380",
  },
};

export const goToSideVariants = {
  initial: {
    x: 0,
  },
  initialMobile: {
    x: 20,
    y: 0,
  },
  initialMobileOne: {
    x: 0,
    y: 25,
    rotate: 0,
  },
  animate: {
    x: "-20vw",
    transition: {
      delay: 2.5,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
  animateMobile: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
