import React, { useState } from "react";
import "./Skills.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";

const skillsArr = [
  { title: "Html", srcImg: images.html },
  { title: "Css", srcImg: images.css },
  { title: "JavaScript", srcImg: images.js },
  {
    title: "ReactJs",
    srcImg: images.reactJs,
  },
  {
    title: "TypeScript",
    srcImg: images.typeScript,
  },
  {
    title: "NextJs",
    srcImg: images.nextJs,
  },
];

const explainPhrase = {
  hidden: { opacity: 0, y: "-20px" },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 2.4,
      ease: "easeInOut",
    },
  },
};
const skillAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};
const skillItem = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // staggerChildren: 0.4,
      // delayChildren:.8
      ease: "easeInOut",
      delay: 2.4,
    },
  },
};

function Skills() {
  const [skills, setSkills] = useState(skillsArr);

  return (
    <div className="igme__skills-cotainer ">
      <div className="igme__skills-wrap app__flex">
        <div className="carousel-container ">
          <motion.h5
            variants={explainPhrase}
            initial="hidden"
            animate="show"
            className="igme__title"
          >
            Habilidades:
          </motion.h5>
          <div className="skill-carousel">
            <motion.div
              variants={skillAnimation}
              initial="hidden"
              animate="show"
              className="wrap-item"
            >
              {skills.map((item, index) => (
                <motion.div
                  variants={skillItem}
                  key={index}
                  className="skill-item"
                >
                  <img src={item.srcImg} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
