import React from 'react'
import './Button.scss'
import { images } from '../../constants'
import { motion } from 'framer-motion'

const buttonCV = {
    hidden: { opacity: 0, scaleX:0},
    show: { 
      opacity: 1, 
      scaleX:1,
      transition:{
        duration:.8,
        delay:2.3,
        type:'tween'
      }
    }
}
  
function Button({ onClickBtn, type, text, margin }) {
  

  return (
    <>
       <motion.button variants={buttonCV} initial="hidden" animate="show" onClick={() => onClickBtn(images.CV)} type={type} className="form-submit" style={{ "margin": `${margin.top} ${margin.left} ${margin.button} ${margin.right}` }}>{text}</motion.button>       
      </>
  )
}

export default Button