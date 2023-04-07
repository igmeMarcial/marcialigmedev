import React from 'react'
import './About.scss'
import { images } from '../../constants'
import { motion } from "framer-motion";
// import { Fade } from "react-awesome-reveal";
import Fade from 'react-reveal/Fade';

import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from  '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};



function About() {
  return (
    <div id='about' className='igme__about app__flex'>
        
      <div className='igme__about-container'>
         <div className="line-styling">
              <div className="style-circle circleBg" ></div>
              <div className="style-circle circleBg" ></div>
              <div className="style-line lineBg"></div>
          </div>
          <div className='about-wrap'>
          <div className='tegnology-wrap'>
            <div className='squareContainer'>
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
          <div className='description-about'>            
               <div>
                <h3 className='igme__title'>
                  ABOUT ME
                </h3>
                <h4>
                </h4>
                <p className=''>
                    As a Junior Front-End Developer with a passion for technology and a hunger for innovation, I possess an impressive arsenal of skills that can take your web development projects to the next level. As a team player, I thrive in collaborating with cross-functional teams to produce outstanding web applications. I understand the importance of communication and collaboration in achieving project success, and I am always willing to go the extra mile to ensure that my team achieves its goals.
                </p>
              </div>
           
             
          </div>
          </Fade>
          </div>
        </div>
    </div>
  )
}

export default About