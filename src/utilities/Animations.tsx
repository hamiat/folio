export const parentContainer = {
  offscreen: {},
  onscreen: {},
};

export const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const titleVariants = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: "-3vh",
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const contentVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const btnVariants = {
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
    boxShadow: " 2px 2px  #FFC380",
    transition: {
      ease: "easeOut",
    },
  },
};

/***************** Skills ****************** */

export const skillsSVGContentVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
  rotateHover: {
    rotate: 15,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

export const iconsSvg = {
  offscreen: {
    opacity: 0,
    x: -500,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
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

export const faceSVGPathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const faceSVGGoToSideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-15vw",
    transition: {
      delay: 2.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};
