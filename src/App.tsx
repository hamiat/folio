import style from "./styles/main.module.scss";
import About from "./components/About/About";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import name from "./name.svg";
import Button from "./components/Button/Button";
import { Controller, Scene } from "react-scrollmagic";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import SkillsSvg from "./components/Skills/SkillsSvg";
const startVariants = {
  initial: {
    gridColumn: "1/span 2",
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
};

const pathVariants = {
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
};
const goToSideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-20vw",
    transition: {
      delay: 2.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
 
};



const App: React.FC = () => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    if (mode) {
      alert("coming soon!");
      /* setMode(!mode) */
    }
  };

  return (
    <motion.main  className={style.main}>
      <motion.section
        variants={startVariants}
        initial="initial"
        animate="animate"
        className={style.leftContent}
      >
        
      
        
        <motion.svg
          variants={goToSideVariants}
          initial="initial"
          animate="animate"
          className={style.face}
          width="280"
          height="393"
          viewBox="0 0 280 393"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M124.381 172.761V170.061L115.824 167.815H109.975L108.798 169.433L108.17 170.285V172.761"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M138.78 175.014V172.761L143.286 170.285H149.59H157.237V175.014H153.633L148.008 172.761"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M157.237 156.558L163.54 161.056L165.793 165.786V170.285V175.014L161.519 178.163H154.536H148.008"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M151.388 124.15L148.008 130.902V135.855L151.388 141.256"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M189.55 127.659V132.028L187.398 135.855L184.698 138.101H173.592L171.642 132.88V127.804"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M176.141 206.527L157.237 197.97L144.636 193.919H139.235L130.115 196.619L118.525 193.919H111.773L100.971 200.223L95.1218 203.371L87.9153 202.923L91.5185 206.527L100.971 215.076L105.924 220.478L114.026 224.976L127.977 227.684H138.78L150.485 224.976L163.093 218.225L171.642 210.801L176.141 206.527Z"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M87.9153 202.923L95.1218 207.877L101.418 209.336L105.924 210.801H113.124H120.778H126.627H132.028H136.079H145.531L154.536 207.877H163.54H171.642L176.141 206.527"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M102.321 156.558L95.1218 160.161V167.815L98.7179 172.761L102.321 175.014H109.975"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M181.095 42.6758L189.197 50.099L195.948 61.5803L201.349 77.7841L215.531 100.068L220.933 121.673V145.979L224.312 166.912L218.904 195.269L217.56 209.451L210.802 228.356L191.226 249.961L173.592 265.493L155.439 278.325L135.855 282.376L116.951 278.325L98.0463 270.894L83.1928 259.413L60.9089 240.509L47.4057 221.604L40.6541 197.97L35.9244 178.387V162.522L39.9753 143.957L43.3547 118.294L48.756 100.068L52.807 85.8861L61.5805 70.361L73.7406 52.7996L83.1928 39.2964L102.097 29.1726L123.031 23.7713H141.257L155.439 27.1435L168.27 33.8951L181.095 42.6758Z"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M108.17 135.855L96.4722 128.649L85.6696 125.948H77.1128L70.8089 128.201L63.1619 132.7L59.1109 135.855H65.8625H71.7115H82.0663H90.616H97.3675H108.17Z"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M157.237 135.855L159.735 134.194L161.288 133.154L168.494 129.103L176.141 125.948H184.698L192.352 128.649L199.104 133.602L203.602 135.855H197.298L189.197 138.101H181.542H173.592L166.689 135.855H157.237Z"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M92.6594 127.695L95.1218 132.028L93.887 135.855H77.5676L75.3147 132.028L77.1127 125.948"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M173.592 25.9954H181.535L189.543 30.5013V34.5522L195.046 39.0509H197.291L200.902 44.0045V47.615H205.855L208.556 50.7705V55.7241L212.166 59.3346L215.322 62.0352V65.6457H218.47L224.327 70.5993V78.2463L226.572 82.7521L228.825 86.3626V94.4718L231.974 102.119V114.272L235.129 120.128V127.688L238.74 132.743C238.74 132.743 244.444 136.353 243.845 138.144C243.245 139.935 243.845 143.545 243.845 143.545V150.766L245.946 160.219L243.845 165.844V172.819L241.44 178.22V182.69L243.845 186.741V189.139L240.992 193.941L238.74 197.551L237.389 200.252L237.844 202.952L236.039 206.888L232.891 208.801L230.19 210.83L227.937 214.203H224.327L226.572 219.604L224.327 222.759V227.713L228.825 232.659L229.273 240.761L233.779 247.065L235.129 253.817L234.674 258.315L235.129 264.619L236.024 273.624V277.675L236.479 286.224L234.226 292.081L235.577 298.385L237.83 305.136L238.277 312.783L239.18 318.639V327.189L240.075 332.142L243.83 335.291V350.144"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M192.352 33.2236L198.201 35.4693L203.602 38.1699L205.855 42.6758L209.755 47.6222L216.658 54.381L220.254 61.5803L227.013 69.6822L229.258 75.9861L232.862 85.886L235.115 95.3383L238.263 102.993L241.411 114.243L243.816 120.994L245.917 132.7V138.101V145.307L241.866 156.558L240.964 159.713L237.815 165.786L238.711 175.014L237.815 184.019L235.562 189.117L229.713 202.923L226.558 210.801L221.156 216.874L219.135 225.431L224.312 229.93L232.862 237.136L236.465 240.732L237.36 245.686L241.866 248.387L245.917 251.99V257.391H248.618V264.59L251.318 270.447L254.914 275.393L256.72 282.376L258.973 285.3L263.024 293.402L261.218 297.005L263.024 301.952V310.956L266.172 317.26L269.32 325.81L271.126 333.912L274.722 342.468L277.877 346.519L279.675 350.115"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M169.844 26.0171L165.793 20.6158L157.237 15.6694L151.388 9.81322L141.48 5.31456L132.028 3.50932L124.381 0.360977H116.279H111.773H108.17L102.545 3.50932L95.1218 5.76226L87.9153 7.56028L83.6405 8.4629L77.1127 13.1926L75.3147 16.5648L69.4585 18.3628L64.9599 23.7713L61.8115 26.0171"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M59.1109 23.7713L55.5004 26.0171L51.0017 30.068V33.2163L44.2429 35.4621L40.192 39.0725V43.5712L35.9172 46.7268L31.1947 51.6731L25.7934 58.8941V63.8332L18.1392 67.4437L12.7379 74.6647V80.5136L9.1274 86.3626V90.4208L5.07644 94.9195V111.571L3.29286 124.15V163.764L5.53858 170.263L9.58954 172.631L13.2 174.993C13.2 174.993 16.3556 180.394 17.251 182.214C18.1464 184.033 21.3019 191.673 21.3019 191.673V193.919L19.9516 198.425L19.4967 202.909V206.844L19.049 210.787L12.7451 216.86H10.0445L6.8889 220.015L3.27842 223.626L0.28894 227.684"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M71.2205 249.26V255.138V265.941V273.147V276.743V286.195L73.0618 292.499L75.3148 303.757V310.508"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M191.226 288.448V282.376L192.352 274.043V263.24L191.226 249.961"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M60.9089 240.508L55.5076 245.686L49.2037 249.961L42.0044 254.69L35.9244 256.488L29.6999 259.189H24.898L16.7961 261.442H10.0445H5.09088"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M78.0153 193.919L75.3147 195.724L73.2639 199.32"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M171.642 216.427L176.141 213.278"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M46.0554 255.586L43.3547 259.189L41.1018 261.442V269.204V276.295L43.5786 284.845L49.2037 299.706L55.0599 315.91L64.5122 332.561L73.264 344.714L78.0154 350.115L83.6405 357.322L91.5186 361.821H102.545L112.221 366.326H124.381H132.028H140.585L148.008 361.373L156.897 354.166L163.093 344.266L169.844 336.165L176.141 325.81L180.423 316.357L184.25 310.508L189.55 303.757V299.251L191.226 296.55"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M192.352 291.597L191.789 301.952L191.226 310.508V316.805L189.55 321.759V326.257L192.352 331.211L190.951 337.067V340.663L192.352 344.266L191.789 350.115L189.55 354.621V357.322V362.723L186.944 366.327L189.55 370.377"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M24.4503 261.442L16.3483 269.205L14.0954 275.393L16.3483 282.376L19.2728 291.597L24.4503 303.757L29.6999 318.155L32.9999 330.987L35.9244 340.663L42.8998 350.115L48.3011 359.12L54.1573 368.572L59.1109 372.175L64.5121 376.674L75.6396 382.53L90.6159 389.282L102.545 392.43H116.279H132.028L142.831 386.581L156.897 378.024L165.793 368.572L180.423 356.419L186.944 345.617"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M160.392 108.841L178.849 105.245H186.944L198.201 108.841L203.602 114.698L206.303 117.398"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M104.538 103.159L106.011 103.462L76.7878 97.4468L71.2205 97.1435L64.0573 100.292L57.3057 105.245"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M95.1218 121.449L87.9153 119.644H81.1637L75.6396 120.547"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M173.895 120.547L181.542 119.644H186.944L191.789 121.449"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M248.618 260.092L256.265 264.59L263.919 269.205L272.476 274.498"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M80.716 127.659L79.3657 130.902L80.0373 132.88"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M90.1682 129.103V130.273L89.0417 132.7"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M175.874 129.053L175.246 131.681L175.831 132.931"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M86.7888 133.154L83.9726 133.588L82.1602 131.385L83.1639 128.757L85.98 128.324L87.7925 130.519L86.7888 133.154Z"
            fill="#F28D2A"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M182.055 133.508L179.239 133.942L177.426 131.739L178.43 129.111L181.246 128.677L183.059 130.88L182.055 133.508Z"
            fill="#F28D2A"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M83.5249 129.941C84.1551 129.941 84.6659 129.43 84.6659 128.8C84.6659 128.17 84.1551 127.659 83.5249 127.659C82.8948 127.659 82.384 128.17 82.384 128.8C82.384 129.43 82.8948 129.941 83.5249 129.941Z"
            fill="#F28D2A"
          />
          <motion.path
            variants={pathVariants}
            d="M179.152 130.252C179.782 130.252 180.293 129.741 180.293 129.111C180.293 128.481 179.782 127.97 179.152 127.97C178.522 127.97 178.011 128.481 178.011 129.111C178.011 129.741 178.522 130.252 179.152 130.252Z"
            fill="#F28D2A"
          />
          <motion.path
            variants={pathVariants}
            d="M181.975 133.075L179.361 134.281L177 132.649L177.253 129.811L179.867 128.612L182.228 130.244L181.975 133.075Z"
            fill="#F28D2A"
          />
          <motion.path
            variants={pathVariants}
            d="M177.925 131.45C178.706 131.45 179.34 130.823 179.34 130.049C179.34 129.276 178.706 128.649 177.925 128.649C177.143 128.649 176.509 129.276 176.509 130.049C176.509 130.823 177.143 131.45 177.925 131.45Z"
            fill="#F28D2A"
          />
          <motion.path
            variants={pathVariants}
            d="M181.174 135.025C181.956 135.025 182.589 134.397 182.589 133.624C182.589 132.85 181.956 132.223 181.174 132.223C180.392 132.223 179.759 132.85 179.759 133.624C179.759 134.397 180.392 135.025 181.174 135.025Z"
            fill="#F28D2A"
          />
          <motion.path
            d="M185.752 130.36L185.001 133.783L183.311 135.017"
            stroke="#F28D2A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            variants={pathVariants}
            d="M87.3087 132.035L84.6947 133.234L82.3335 131.602L82.5862 128.764L85.193 127.565L87.5542 129.197L87.3087 132.035Z"
            fill="#F28D2A"
          />
          <motion.path
            variants={pathVariants}
            d="M83.2505 130.403C84.0322 130.403 84.6658 129.776 84.6658 129.002C84.6658 128.229 84.0322 127.602 83.2505 127.602C82.4689 127.602 81.8352 128.229 81.8352 129.002C81.8352 129.776 82.4689 130.403 83.2505 130.403Z"
            fill="#F28D2A"
          />
          <motion.path
            variants={pathVariants}
            d="M86.5072 133.978C87.2889 133.978 87.9225 133.35 87.9225 132.577C87.9225 131.803 87.2889 131.176 86.5072 131.176C85.7256 131.176 85.0919 131.803 85.0919 132.577C85.0919 133.35 85.7256 133.978 86.5072 133.978Z"
            fill="#F28D2A"
          />
        </motion.svg>

        <motion.svg  variants={goToSideVariants} whileHover={ {rotate: 360, 
            transition: {
              duration: 20,
              yoyo: Infinity,
              ease: "easeInOut",}
              
            
          }} className={style.name} width="586" height="587" viewBox="0 0 586 587" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M139.719 426.363C138.324 424.348 137.82 422.483 138.207 420.766C138.579 419.029 139.979 417.301 142.404 415.581L152.175 408.653L154.102 411.437L144.332 418.366C142.806 419.448 141.905 420.484 141.629 421.475C141.339 422.446 141.652 423.594 142.567 424.917C143.634 426.457 145.365 427.526 147.762 428.123L159.762 419.614L161.69 422.398L136.867 440L134.94 437.216L145.268 429.892C142.772 429.277 140.922 428.101 139.719 426.363Z" fill="#BC2633"/>
<path d="M107.484 355.998C106.939 353.957 106.873 352.309 107.283 351.054C107.67 349.806 108.396 348.851 109.462 348.191C110.504 347.536 111.894 346.975 113.631 346.506L124.749 343.505L125.621 346.776L123.711 347.292C124.779 347.948 125.617 348.667 126.222 349.449C126.828 350.23 127.267 351.132 127.539 352.152C127.861 353.358 127.897 354.518 127.647 355.629C127.374 356.747 126.828 357.728 126.01 358.57C125.162 359.396 124.067 359.99 122.723 360.352C120.639 360.915 118.856 360.7 117.374 359.707C115.87 358.721 114.824 357.125 114.236 354.922C113.772 353.182 113.737 351.513 114.13 349.915C113.001 350.244 112.129 350.604 111.513 350.994C110.897 351.384 110.502 351.951 110.327 352.694C110.13 353.444 110.201 354.456 110.541 355.732L111.228 358.307L108.309 359.095L107.484 355.998ZM124.604 352.459C124.394 351.671 123.989 350.897 123.389 350.139C122.784 349.357 121.999 348.649 121.035 348.014L116.657 349.196C116.355 350.67 116.408 352.172 116.816 353.703C117.144 354.933 117.72 355.884 118.545 356.556C119.347 357.235 120.443 357.387 121.833 357.012C123.13 356.662 123.987 356.058 124.403 355.199C124.791 354.324 124.858 353.41 124.604 352.459Z" fill="#BC2633"/>
<path d="M101.152 268.947C101.355 266.532 102.15 264.809 103.537 263.779C104.926 262.724 107.104 262.331 110.068 262.6L122.011 263.682L121.729 267.053L109.786 265.971C107.897 265.8 106.544 265.991 105.726 266.543C104.887 267.069 104.401 268.121 104.269 269.699C104.113 271.564 104.853 273.51 106.49 275.537C107.167 275.502 107.996 275.529 108.976 275.618L120.919 276.7L120.637 280.071L108.694 278.989C106.805 278.818 105.452 279.009 104.634 279.561C103.795 280.087 103.309 281.139 103.177 282.717C103.025 284.534 103.685 286.425 105.159 288.389L119.828 289.718L119.545 293.089L99.7113 291.292L99.9941 287.921L102.11 288.113C100.575 286.023 99.8916 283.973 100.06 281.965C100.194 280.363 100.58 279.073 101.216 278.095C101.828 277.114 102.742 276.414 103.958 275.994C101.893 273.615 100.958 271.266 101.152 268.947Z" fill="#BC2633"/>
<path d="M112.519 200.099L113.927 197.025L118.843 199.355L117.435 202.429L112.519 200.099ZM120.821 204.035L122.229 200.96L140.232 209.496L138.825 212.57L120.821 204.035Z" fill="#BC2633"/>
<path d="M166.503 137.129C167.984 135.626 169.365 134.739 170.646 134.466C171.91 134.177 173.09 134.331 174.186 134.93C175.265 135.512 176.438 136.444 177.703 137.726L185.804 145.933L183.43 148.34L182.038 146.93C182.006 148.194 181.805 149.287 181.435 150.21C181.065 151.132 180.51 151.969 179.77 152.72C178.894 153.608 177.917 154.223 176.839 154.563C175.744 154.887 174.632 154.904 173.502 154.612C172.372 154.287 171.318 153.629 170.339 152.637C168.821 151.098 168.119 149.432 168.235 147.638C168.334 145.827 169.183 144.11 170.782 142.488C172.045 141.208 173.459 140.337 175.026 139.877C174.182 139.056 173.44 138.475 172.799 138.133C172.158 137.791 171.476 137.73 170.751 137.952C170.01 138.157 169.176 138.728 168.25 139.667L166.382 141.563L164.256 139.408L166.503 137.129ZM178.047 150.31C178.62 149.729 179.082 148.987 179.435 148.081C179.805 147.159 180.023 146.117 180.089 144.955L176.899 141.724C175.484 142.201 174.221 143.003 173.11 144.13C172.218 145.035 171.688 146.017 171.521 147.076C171.337 148.118 171.751 149.152 172.763 150.178C173.708 151.136 174.653 151.581 175.597 151.513C176.54 151.411 177.357 151.01 178.047 150.31Z" fill="#BC2633"/>
<path d="M231.132 95.4756L235.906 105.809C236.309 106.681 236.716 107.219 237.128 107.423C237.551 107.596 238.131 107.508 238.869 107.16C239.52 106.854 240.174 106.439 240.831 105.917L242.115 108.697C241.24 109.375 240.422 109.893 239.663 110.251C238.014 111.028 236.697 111.237 235.712 110.878C234.749 110.509 233.9 109.529 233.165 107.937L228.073 96.9174L225.73 98.0218L224.415 95.1768L226.759 94.0724L223.888 87.8593L226.947 86.4175L229.818 92.6306L233.983 90.6673L235.298 93.5122L231.132 95.4756Z" fill="#BC2633"/>
<path d="M382.335 92.0024C384.592 92.9496 386.018 94.2505 386.611 95.905C387.227 97.5689 386.971 99.778 385.844 102.532L381.305 113.628L378.185 112.318L382.724 101.223C383.433 99.4903 383.639 98.1322 383.341 97.1484C383.065 96.1739 382.186 95.3756 380.704 94.7534C378.977 94.0291 376.942 94.06 374.598 94.8461L369.023 108.474L365.902 107.164L373.441 88.7387L376.561 90.0481L375.757 92.0139C378.217 91.1983 380.409 91.1945 382.335 92.0024Z" fill="#BC2633"/>
<path d="M446.022 134.67C447.569 136.107 448.505 137.469 448.831 138.755C449.173 140.022 449.074 141.224 448.533 142.359C448.008 143.477 447.142 144.703 445.934 146.038L438.209 154.584L435.73 152.28L437.058 150.812C435.81 150.832 434.724 150.674 433.798 150.338C432.873 150.002 432.023 149.474 431.25 148.756C430.335 147.906 429.686 146.942 429.302 145.865C428.934 144.769 428.868 143.643 429.104 142.487C429.374 141.329 429.976 140.234 430.909 139.201C432.358 137.599 433.969 136.819 435.742 136.862C437.531 136.886 439.261 137.675 440.931 139.227C442.25 140.452 443.171 141.849 443.695 143.416C444.466 142.528 445.006 141.752 445.314 141.088C445.623 140.425 445.651 139.731 445.401 139.007C445.166 138.264 444.565 137.444 443.598 136.545L441.647 134.732L443.674 132.489L446.022 134.67ZM433.548 146.911C434.146 147.466 434.899 147.904 435.807 148.224C436.732 148.56 437.769 148.737 438.917 148.755L441.959 145.39C441.425 143.977 440.578 142.731 439.417 141.653C438.486 140.787 437.494 140.291 436.443 140.166C435.407 140.023 434.407 140.486 433.441 141.554C432.54 142.551 432.144 143.526 432.253 144.479C432.395 145.431 432.827 146.241 433.548 146.911Z" fill="#BC2633"/>
<path d="M475.392 208.315C474.571 206.713 474.298 205.392 474.573 204.351C474.848 203.31 475.739 202.391 477.246 201.595L500.42 189.356L501.965 192.367L479.586 204.186C478.737 204.635 478.219 205.071 478.032 205.495C477.877 205.93 477.992 206.521 478.375 207.268C478.682 207.866 479.019 208.367 479.387 208.769L476.65 210.215C476.063 209.439 475.644 208.806 475.392 208.315Z" fill="#BC2633"/>
<path d="M518.412 287.411L497.576 284.029L497.11 280.422L511.607 273.504L495.851 270.675L495.386 267.069L514.65 258.277L515.102 261.776L500.009 268.302L516.282 270.916L516.78 274.772L501.729 281.62L517.96 283.913L518.412 287.411Z" fill="#BC2633"/>
<path d="M512.654 351.489C512.201 353.552 511.505 355.044 510.566 355.965C509.651 356.891 508.569 357.398 507.321 357.487C506.096 357.582 504.606 357.432 502.849 357.038L491.609 354.516L492.334 351.211L494.266 351.644C493.618 350.564 493.205 349.537 493.025 348.562C492.846 347.587 492.869 346.584 493.096 345.552C493.363 344.333 493.862 343.289 494.593 342.42C495.348 341.556 496.281 340.942 497.393 340.576C498.524 340.24 499.768 340.224 501.126 340.528C503.234 341.001 504.718 342.023 505.577 343.593C506.46 345.168 506.657 347.07 506.169 349.297C505.783 351.055 505.05 352.551 503.968 353.784C505.121 354.018 506.06 354.105 506.786 354.047C507.511 353.988 508.121 353.67 508.616 353.092C509.135 352.52 509.536 351.589 509.819 350.3L510.389 347.698L513.34 348.36L512.654 351.489ZM495.841 346.648C495.666 347.445 495.671 348.319 495.855 349.27C496.034 350.245 496.406 351.239 496.971 352.251L501.397 353.244C502.34 352.078 502.982 350.722 503.321 349.174C503.594 347.932 503.518 346.82 503.094 345.84C502.694 344.865 501.791 344.219 500.386 343.904C499.075 343.61 498.037 343.746 497.274 344.313C496.529 344.908 496.052 345.687 495.841 346.648Z" fill="#BC2633"/>
<path d="M481.299 425.378C479.996 427.45 478.487 428.633 476.772 428.925C475.044 429.238 472.931 428.587 470.431 426.973L460.36 420.469L462.161 417.605L472.232 424.108C473.805 425.123 475.096 425.572 476.106 425.453C477.104 425.354 478.031 424.624 478.887 423.263C479.883 421.678 480.194 419.651 479.82 417.181L467.45 409.193L469.252 406.329L485.976 417.128L484.174 419.993L482.39 418.841C482.774 421.431 482.41 423.61 481.299 425.378Z" fill="#BC2633"/>
<path d="M422.091 487.342L409.843 471.148C408.207 468.985 407.435 466.91 407.526 464.923C407.585 462.932 408.855 460.97 411.336 459.04C412.548 458.096 413.657 457.355 414.664 456.815C415.651 456.291 416.753 455.859 417.971 455.519L419.99 458.189C418.815 458.465 417.719 458.847 416.703 459.333C415.673 459.801 414.788 460.322 414.049 460.897C412.686 461.958 411.791 462.943 411.365 463.852C410.925 464.742 410.844 465.61 411.124 466.457C411.37 467.299 411.905 468.266 412.731 469.357L414.272 471.396C414.799 468.949 415.829 467.129 417.363 465.935C419.485 464.284 421.708 463.664 424.034 464.074C426.341 464.498 428.487 466.022 430.47 468.644C432.468 471.286 433.353 473.789 433.127 476.155C432.915 478.54 431.757 480.55 429.655 482.186C428.139 483.365 426.132 483.893 423.632 483.771L424.761 485.264L422.091 487.342ZM418.883 468.72C417.501 469.796 416.557 471.473 416.053 473.75L421.851 481.416C424.113 481.542 425.954 481.052 427.374 479.947C428.852 478.797 429.612 477.415 429.655 475.801C429.693 474.22 429.046 472.55 427.714 470.788C426.339 468.97 424.894 467.875 423.379 467.503C421.878 467.15 420.38 467.556 418.883 468.72Z" fill="#BC2633"/>
<path d="M360.044 518.16C358.033 518.804 356.394 518.951 355.13 518.6C353.872 518.271 352.894 517.589 352.195 516.553C351.504 515.54 350.892 514.173 350.358 512.454L346.944 501.452L350.167 500.42L350.754 502.311C351.366 501.208 352.05 500.334 352.805 499.689C353.56 499.044 354.44 498.561 355.446 498.239C356.634 497.858 357.787 497.766 358.903 497.963C360.027 498.183 361.024 498.683 361.894 499.463C362.748 500.273 363.382 501.343 363.794 502.672C364.434 504.735 364.289 506.533 363.357 508.066C362.433 509.622 360.885 510.747 358.713 511.442C356.999 511.991 355.339 512.107 353.733 511.79C354.104 512.905 354.496 513.763 354.908 514.362C355.32 514.961 355.899 515.329 356.646 515.468C357.399 515.63 358.405 515.51 359.662 515.108L362.199 514.295L363.095 517.183L360.044 518.16ZM355.864 501.166C355.087 501.415 354.332 501.858 353.6 502.496C352.846 503.141 352.171 503.961 351.575 504.958L352.92 509.291C354.399 509.523 355.893 509.397 357.401 508.914C358.613 508.526 359.537 507.903 360.175 507.043C360.82 506.207 360.929 505.101 360.503 503.726C360.104 502.442 359.47 501.612 358.599 501.236C357.713 500.889 356.801 500.866 355.864 501.166Z" fill="#BC2633"/>
</motion.svg>
      
      </motion.section>

      <motion.div className={style.btnTwo}>
        <Button onClick={handleToggle}>
        
          {mode ? "Light mode" : "Dark mode"}
        </Button>
      </motion.div>

      <About />
      <Skills />
      <SkillsSvg />
      <Contact />
    </motion.main>
  );
};

export default App;
