import style from "./styles/main.module.scss";
import About from "./components/About/About";
import name from "./name.svg";
import { motion } from "framer-motion";

const startVariants = {
  initial: {
    gridColumn: "1/span 2",
    opacity: 0,
    width: "auto",
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
    x: "-15vw",
    transition: {
      delay: 2.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const App: React.FC = () => {
  return (
    <main className={style.main}>
       

      <motion.section
        variants={startVariants}
        initial="initial"
        animate="animate"
        className={style.leftContent}
      >
        <div className={style.box}></div>
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

        <motion.img
          variants={goToSideVariants}
          className={style.name}
          src={name}
          alt="hamiat nalwanga"
        />
      </motion.section>

      <section className={style.rightContent}>
        <About />
      </section>
    </main>
  );
};

export default App;
