import style from "./skills.module.scss";
import { motion, Variants } from "framer-motion";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { useMediaQuery } from 'react-responsive'

const titleVariants: Variants = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: "-3vh",
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,

    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
  rotateHover: {
    rotate: 15,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};
const iconsSvg: Variants = {
  offscreen: {
    opacity: 0,
  x: -500,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 120,
     
        },
  },
};

const SkillsSvg: React.FC = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' }) 

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      className={style.skillsDiv}
    >

    
      <motion.h2 className={style.softSkillsTitle} variants={titleVariants}>Skills </motion.h2>
       
      <motion.div className={style.softSkills}  variants={contentVariants}>
        Problem solving, Empathy, Active listening, Time and self management
        Adaptivity, Teamwork, Positive attitude
      </motion.div>
  
      <Controller>
      
      <Scene
       duration={isMobile ? 1 : 500}
       triggerHook={0.75}
       pin={{ pushFollowers: false }}
       offset={50}>
         {(progress: any) => (
            <div>
              <Timeline totalProgress={progress} paused>
               
            

                  <Timeline target={
      <motion.div variants={isMobile ? iconsSvg : contentVariants}
       className={style.hardIcons}>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.htmlfive}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#e44d26"
            d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"
          />
          <path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
          <path
            fill="#ebebeb"
            d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
          />
          <path
            fill="#fff"
            d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
          />
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.cssthree}
          width="342pt"
          height="480pt"
          viewBox="0 0 342 480"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="#0170baff">
            <path
              fill="#0170ba"
              opacity="1.00"
              d=" M 0.00 92.46 C 113.92 92.45 227.83 92.44 341.75 92.46 C 335.48 163.31 329.31 234.16 322.78 304.99 C 318.90 350.26 314.90 395.53 310.68 440.77 C 286.37 447.21 262.30 454.55 238.00 461.02 C 215.68 467.57 193.18 473.50 170.85 480.00 L 170.19 480.00 C 148.94 473.68 127.48 468.12 106.23 461.80 C 81.15 455.04 56.29 447.50 31.20 440.77 C 27.93 406.86 24.98 372.93 22.07 339.00 C 16.58 276.31 10.61 213.66 5.33 150.96 C 3.50 132.09 2.19 113.16 0.00 94.33 L 0.00 92.46 M 171.41 120.41 C 171.17 134.02 171.59 147.64 171.17 161.24 C 132.09 161.10 93.00 161.21 53.92 161.25 C 54.59 174.46 56.36 187.58 58.18 200.68 C 94.54 202.03 130.95 200.63 167.31 201.72 C 135.50 215.99 103.30 229.43 71.35 243.40 C 68.61 244.62 65.68 245.54 63.23 247.32 C 63.50 261.83 65.84 276.26 66.87 290.74 C 86.25 290.67 105.62 290.36 125.00 290.33 C 140.53 290.25 156.07 290.56 171.60 290.22 C 170.86 314.08 171.83 337.97 171.10 361.83 C 160.65 360.28 150.33 357.95 139.92 356.10 C 131.71 354.31 123.30 353.38 115.21 351.03 C 114.06 339.58 113.26 328.09 112.24 316.63 C 109.90 315.91 107.42 315.98 105.00 315.94 C 93.26 316.01 81.51 315.90 69.76 316.08 C 70.91 338.11 72.89 360.11 76.26 381.93 C 87.84 384.95 99.44 387.91 111.00 391.06 C 128.71 395.88 146.64 399.89 164.38 404.63 C 166.49 405.08 168.62 405.86 170.81 405.68 C 171.99 420.17 171.08 434.75 171.30 449.28 C 175.39 448.62 179.41 447.61 183.36 446.39 C 216.94 437.27 250.48 427.98 284.04 418.77 C 285.71 405.57 286.49 392.28 287.81 379.05 C 291.30 338.83 294.82 298.61 298.48 258.40 C 302.77 212.40 306.48 166.35 310.80 120.35 C 264.33 120.39 217.87 120.26 171.41 120.41 Z"
            />
          </g>
          <g id="#29a9dfff">
            <path
              fill="#29a9df"
              opacity="1.00"
              d=" M 171.41 120.41 C 217.87 120.26 264.33 120.39 310.80 120.35 C 306.48 166.35 302.77 212.40 298.48 258.40 C 294.82 298.61 291.30 338.83 287.81 379.05 C 286.49 392.28 285.71 405.57 284.04 418.77 C 250.48 427.98 216.94 437.27 183.36 446.39 C 179.41 447.61 175.39 448.62 171.30 449.28 C 171.08 434.75 171.99 420.17 170.81 405.68 C 171.11 405.62 171.72 405.50 172.02 405.44 C 203.25 397.60 234.27 388.97 265.43 380.85 C 269.37 336.65 273.74 292.47 276.51 248.18 C 250.01 248.32 223.50 248.24 197.00 248.35 C 193.14 248.37 189.28 248.35 185.44 248.07 C 199.70 240.73 214.70 234.91 229.34 228.36 C 243.39 221.99 257.61 216.02 271.71 209.77 C 274.43 208.52 277.33 207.48 279.72 205.62 C 280.66 202.17 280.61 198.56 280.98 195.03 C 281.79 183.83 283.23 172.69 283.77 161.48 C 246.24 161.18 208.71 161.44 171.17 161.24 C 171.59 147.64 171.17 134.02 171.41 120.41 Z"
            />
            <path
              fill="#29a9df"
              opacity="1.00"
              d=" M 171.60 290.22 C 189.72 289.91 207.85 290.40 225.98 290.28 C 224.97 308.81 223.43 327.31 222.47 345.84 C 211.36 349.47 200.08 352.54 188.88 355.90 C 182.91 357.72 176.78 359.16 171.10 361.83 C 171.83 337.97 170.86 314.08 171.60 290.22 Z"
            />
          </g>
          <g id="#cfcfcfff">
            <path
              fill="#cfcfcf"
              opacity="1.00"
              d=" M 53.92 161.25 C 93.00 161.21 132.09 161.10 171.17 161.24 C 171.68 204.24 171.04 247.24 171.60 290.22 C 156.07 290.56 140.53 290.25 125.00 290.33 C 105.62 290.36 86.25 290.67 66.87 290.74 C 65.84 276.26 63.50 261.83 63.23 247.32 C 65.68 245.54 68.61 244.62 71.35 243.40 C 103.30 229.43 135.50 215.99 167.31 201.72 C 130.95 200.63 94.54 202.03 58.18 200.68 C 56.36 187.58 54.59 174.46 53.92 161.25 Z"
            />
            <path
              fill="#cfcfcf"
              opacity="1.00"
              d=" M 69.76 316.08 C 81.51 315.90 93.26 316.01 105.00 315.94 C 107.42 315.98 109.90 315.91 112.24 316.63 C 113.26 328.09 114.06 339.58 115.21 351.03 C 123.30 353.38 131.71 354.31 139.92 356.10 C 150.33 357.95 160.65 360.28 171.10 361.83 C 172.10 376.35 170.35 390.97 172.02 405.44 C 171.72 405.50 171.11 405.62 170.81 405.68 C 168.62 405.86 166.49 405.08 164.38 404.63 C 146.64 399.89 128.71 395.88 111.00 391.06 C 99.44 387.91 87.84 384.95 76.26 381.93 C 72.89 360.11 70.91 338.11 69.76 316.08 Z"
            />
          </g>
          <g id="#ffffffff">
            <path
              fill="#ffffff"
              opacity="1.00"
              d=" M 171.17 161.24 C 208.71 161.44 246.24 161.18 283.77 161.48 C 283.23 172.69 281.79 183.83 280.98 195.03 C 280.61 198.56 280.66 202.17 279.72 205.62 C 277.33 207.48 274.43 208.52 271.71 209.77 C 257.61 216.02 243.39 221.99 229.34 228.36 C 214.70 234.91 199.70 240.73 185.44 248.07 C 189.28 248.35 193.14 248.37 197.00 248.35 C 223.50 248.24 250.01 248.32 276.51 248.18 C 273.74 292.47 269.37 336.65 265.43 380.85 C 234.27 388.97 203.25 397.60 172.02 405.44 C 170.35 390.97 172.10 376.35 171.10 361.83 C 176.78 359.16 182.91 357.72 188.88 355.90 C 200.08 352.54 211.36 349.47 222.47 345.84 C 223.43 327.31 224.97 308.81 225.98 290.28 C 207.85 290.40 189.72 289.91 171.60 290.22 C 171.04 247.24 171.68 204.24 171.17 161.24 Z"
            />
          </g>
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.js}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="325px"
          height="450px"
          viewBox="0 0 325 450"
          enable-background="new 0 0 325 450"
        >
          <g>
            <polygon
              fill="#EFC725"
              points="40.845,401.254 13.775,97.632 311.225,97.632 284.127,401.205 162.318,434.975 	"
            />
            <polygon
              fill="#FBDE34"
              points="162.25,408.787 260.678,381.5 283.836,122.083 162.25,122.083 	"
            />
            <polygon
              fill="#EBEBEB"
              points="162.193,331.426 162.031,331.473 120.559,320.272 117.906,290.575 97.756,290.575 80.527,290.575 
		85.744,349.043 162.021,370.219 162.193,370.17 	"
            />
            <polygon
              fill="#EBEBEB"
              points="167.209,271.937 167.209,234.7 121.355,234.7 126.732,176.258 167.312,175.177 167.209,136.454 
		93.065,136.454 90.311,163.903 81.559,261.938 80.651,271.937 90.686,271.937 	"
            />
            <polygon
              fill="#FFFFFF"
              points="166.957,175.229 167.12,175.183 207.791,177.632 211.242,216.079 231.393,216.079 248.623,216.079 
		242.109,144.133 167.129,136.437 166.957,136.485 	"
            />
            <polyline
              fill="#FFFFFF"
              points="244.784,175.343 241.593,136.454 162.99,136.454 162.99,160.606 162.99,175.246 162.99,175.343 
		244.784,175.343 	"
            />
            <polygon
              fill="#FFFFFF"
              points="162.064,234.718 162.064,271.954 207.918,271.954 203.596,320.247 162.064,331.459 
		162.064,370.201 238.404,349.043 238.963,342.752 247.715,244.717 248.623,234.718 238.588,234.718 	"
            />
            <path fill="#FFFFFF" d="M240,173.693" />

            <path fill="#FFFFFF" d="M239.51,173.693" />
          </g>
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.react}
          version="1.1"
          id="Layer_2_1_"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 841.9 595.3"
          enable-background="new 0 0 841.9 595.3"
        >
          <g>
            <path
              fill="#61DAFB"
              d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
		c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
		c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6
		c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11
		c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6
		c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4
		c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6
		c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5
		c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2
		c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8
		c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9
		c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3
		c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z
		 M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z
		 M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z
		 M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z
		 M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z
		 M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
		c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7
		c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
		C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
		c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1
		c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
		C644,312.2,621.1,332.1,585.7,347.1z"
            />
            <polygon
              fill="#61DAFB"
              points="320.8,78.4 320.8,78.4 320.8,78.4 	"
            />
            <circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7" />
            <polygon
              fill="#61DAFB"
              points="520.5,78.1 520.5,78.1 520.5,78.1 	"
            />
          </g>
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.sass}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 547.8 410.6"
          enable-background="new 0 0 547.8 410.6"
        >
          <path
            fill="#CD6799"
            d="M471.4,236c-19.1,0.1-35.7,4.7-49.6,11.5c-5.1-10.1-10.2-19.1-11.1-25.7c-1-7.7-2.2-12.4-1-21.6
	c1.2-9.2,6.6-22.3,6.5-23.3s-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5c-1.1,2.9-3.2,9.5-4.6,16.3c-1.9,10-22,45.7-33.5,64.4
	c-3.7-7.3-6.9-13.7-7.6-18.8c-1-7.7-2.2-12.4-1-21.6c1.2-9.2,6.6-22.3,6.5-23.3c-0.1-1-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5
	c-1.1,2.9-2.3,9.7-4.6,16.3c-2.3,6.6-29,66.2-36,81.6c-3.6,7.9-6.7,14.2-8.9,18.5c0,0,0,0,0,0s-0.1,0.3-0.4,0.8
	c-1.9,3.7-3,5.7-3,5.7s0,0,0,0.1c-1.5,2.7-3.1,5.2-3.9,5.2c-0.6,0-1.7-7.2,0.2-17c4-20.7,13.5-52.9,13.4-54c0-0.6,1.8-6.2-6.2-9.1
	c-7.8-2.9-10.6,1.9-11.3,1.9c-0.7,0-1.2,1.7-1.2,1.7s8.7-36.2-16.6-36.2c-15.8,0-37.6,17.3-48.4,32.9c-6.8,3.7-21.3,11.6-36.8,20.1
	c-5.9,3.3-12,6.6-17.7,9.7c-0.4-0.4-0.8-0.9-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7c0.9-16,6.4-58,108.7-109
	C233.9,19,300.9,30.5,312.5,56c16.6,36.4-35.9,104-122.9,113.8c-33.2,3.7-50.6-9.1-55-13.9c-4.6-5-5.3-5.3-7-4.3c-2.8,1.5-1,6,0,8.6
	c2.6,6.8,13.3,18.8,31.4,24.7c16,5.2,54.9,8.1,102-10.1c52.7-20.4,93.9-77.1,81.8-124.6C330.7,2,250.7-13.9,175,13
	C130,29,81.2,54.2,46.1,87c-41.7,39-48.3,72.9-45.6,87.1c9.7,50.4,79.2,83.2,107,107.5c-1.4,0.8-2.7,1.5-3.8,2.1
	c-13.9,6.9-66.9,34.6-80.1,63.9c-15,33.2,2.4,57,13.9,60.2c35.7,9.9,72.4-7.9,92.1-37.3c19.7-29.4,17.3-67.6,8.2-85.1
	c-0.1-0.2-0.2-0.4-0.4-0.6c3.6-2.1,7.3-4.3,10.9-6.4c7.1-4.2,14.1-8.1,20.1-11.3c-3.4,9.3-5.9,20.4-7.1,36.4
	c-1.5,18.8,6.2,43.2,16.3,52.8c4.5,4.2,9.8,4.3,13.2,4.3c11.8,0,17.1-9.8,23-21.4c7.2-14.2,13.7-30.7,13.7-30.7s-8.1,44.6,13.9,44.6
	c8,0,16.1-10.4,19.7-15.7c0,0.1,0,0.1,0,0.1s0.2-0.3,0.6-1c0.8-1.3,1.3-2.1,1.3-2.1s0-0.1,0-0.2c3.2-5.6,10.4-18.3,21.1-39.4
	c13.8-27.2,27.1-61.2,27.1-61.2s1.2,8.3,5.3,22.1c2.4,8.1,7.4,17,11.4,25.6c-3.2,4.5-5.2,7-5.2,7s0,0,0.1,0.1
	c-2.6,3.4-5.4,7.1-8.5,10.7c-10.9,13-23.9,27.9-25.7,32.2c-2.1,5.1-1.6,8.8,2.4,11.8c2.9,2.2,8.1,2.5,13.4,2.2
	c9.8-0.7,16.7-3.1,20.1-4.6c5.3-1.9,11.5-4.8,17.3-9.1c10.7-7.9,17.2-19.2,16.6-34.1c-0.3-8.2-3-16.4-6.3-24.1
	c1-1.4,1.9-2.8,2.9-4.2c16.9-24.7,30-51.8,30-51.8s1.2,8.3,5.3,22.1c2,7,6.1,14.6,9.7,22c-15.9,12.9-25.7,27.9-29.2,37.7
	c-6.3,18.2-1.4,26.4,7.9,28.3c4.2,0.9,10.2-1.1,14.6-3c5.6-1.8,12.2-4.9,18.5-9.5c10.7-7.9,21-18.9,20.4-33.8
	c-0.3-6.8-2.1-13.5-4.6-20c13.5-5.6,30.9-8.7,53.1-6.1c47.6,5.6,57,35.3,55.2,47.8c-1.8,12.5-11.8,19.3-15.1,21.4
	c-3.3,2.1-4.4,2.8-4.1,4.3c0.4,2.2,2,2.1,4.8,1.7c3.9-0.7,25-10.1,25.9-33.1C548.9,267.8,520.9,235.7,471.4,236z M104.2,359.8
	C88.4,377,66.4,383.5,56.9,378c-10.2-5.9-6.2-31.3,13.2-49.5c11.8-11.1,27-21.4,37.1-27.7c2.3-1.4,5.7-3.4,9.8-5.9
	c0.7-0.4,1.1-0.6,1.1-0.6l0,0c0.8-0.5,1.6-1,2.4-1.5C127.6,318.8,120.8,341.7,104.2,359.8z M219.2,281.6c-5.5,13.4-17,47.7-24,45.8
	c-6-1.6-9.7-27.6-1.2-53.3c4.3-12.9,13.4-28.3,18.7-34.3c8.6-9.6,18.1-12.8,20.4-8.9C236,236,222.6,273.2,219.2,281.6z M314.1,327
	c-2.3,1.2-4.5,2-5.5,1.4c-0.7-0.4,1-2,1-2s11.9-12.8,16.6-18.6c2.7-3.4,5.9-7.4,9.3-11.9c0,0.4,0,0.9,0,1.3
	C335.5,312.5,320.7,322.8,314.1,327z M387.3,310.3c-1.7-1.2-1.4-5.2,4.3-17.7c2.2-4.9,7.4-13.1,16.3-21c1,3.2,1.7,6.3,1.6,9.2
	C409.4,300.1,395.6,307.3,387.3,310.3z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.ts}
          width="512"
          height="512"
          fill="none"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="512" height="512" rx="50" fill="#3178c6" />
          <path
            d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z"
            clip-rule="evenodd"
            fill="#fff"
            fill-rule="evenodd"
          />
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.github}
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
            transform="scale(64)"
            fill="#fff"
          />
        </motion.svg>
        <motion.svg
          drag
          variants={contentVariants}
          whileHover="rotateHover"
          className={style.figma}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 300"
          width="1667"
          height="2500"
        >
          <path
            id="path0_fill"
            fill="#0acf83 "
            d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
          />
          <path
            id="path1_fill"
            fill="#a259ff"
            d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
          />
          <path
            id="path1_fill_1_"
            fill="#f24e1e "
            d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
          />
          <path
            id="path2_fill"
            fill="#ff7262 "
            d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
          />
          <path
            id="path3_fill"
            fill="#1abcfe"
            d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
          />
        </motion.svg>
        <motion.div variants={contentVariants} className={style.arrowToContact}>
        <FaLongArrowAltDown />
     
      </motion.div>
      
      </motion.div>
      }>
      <Tween from={{ x: -1100 }} to={{ x: 0 }} />
                  <Tween from={{ opacity: 1 }} to={{ opacity: 0.9 }} />
      </Timeline>
    </Timeline>
    </div>
        )}
    </Scene>
    </Controller>

     
     
    </motion.section>
  );
};

export default SkillsSvg;
