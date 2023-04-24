import React from "react";
import "./About.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
// import { Fade } from "react-awesome-reveal";
import Fade from "react-reveal/Fade";

import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

function About() {
  return (
    <div id="sobremi" className="igme__about app__flex">
      <div className="igme__about-container">
        <div className="line-styling">
          <div className="style-circle circleBg"></div>
          <div className="style-circle circleBg"></div>
          <div className="style-line lineBg"></div>
        </div>
        <div className="about-wrap">
          <div className="tegnology-wrap">
            <div className="squareContainer">
              <div className="stage-cube-cont">
                <div className="cubespinner">
                  <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                  </div>
                  <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                  </div>
                  <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                  </div>
                  <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                  </div>
                  <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                  </div>
                  <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Fade right>
            <div className="description-about">
              <div>
                <h3 className="igme__title">SOBRE MI</h3>
                <h4></h4>
                <p className="">
                  Como desarrollador Front-End con pasión por la tecnología y un
                  hambre de innovación, poseo un impresionante arsenal de
                  habilidades que pueden llevar tus proyectos de desarrollo web
                  al siguiente nivel. Como jugador de equipo, prospero en
                  colaborar con equipos interfuncionales para producir
                  aplicaciones web excepcionales. Entiendo la importancia de la
                  comunicación y la colaboración en la consecución del éxito del
                  proyecto, y siempre estoy dispuesto a dar el máximo para
                  asegurarme de que mi equipo logre sus objetivos.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
