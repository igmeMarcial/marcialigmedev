import React, { useEffect, useState } from 'react'
import { images } from '../../constants'
import './Header.scss'
import Profile from './Profile' 
import { Button, Letters } from '../../components/index'
import {motion} from 'framer-motion'

const explainPhrase = {
    hidden: { opacity: 0, y:"-20px"},
    show: { 
      opacity: 1, 
      y:"0", 
      transition:{
        delay:2.1,
        ease: "easeInOut",
      
      }
    }
}
 const starAnimation = {
    hidden:{
      opacity:0,
      x:'50px'
    },
    show: { 
      opacity:1,
      x:0,
      transition:{
        staggerChildren:.4,
        delayChildren: 2.8,
        
      }
    }
  }
  const starItem = {
    hidden: { 
      opacity:0,
      x:'100px',
      
    },
    show: { 
      opacity:1,
      x:0,
      transition:{
         duration:1.2,
        ease:"easeIn"
      }
    }
  }


function Header() {
  const mrg = { top: 0, left: 0, button: 0, right: 0 }
  const [letterClass, setLetterClass] = useState('text-animate')
  
  const nameArray = ' Marcial'.split('');
  const jobArray = 'Web Developer '.split('');
  const amStr = ' I'.split('');
  
   useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
  
  return () => {
    clearTimeout(timeoutId)
  }
}, [])

  const dowloaderCV = (url) => {
    fetch(url).then(response => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
         const fileName = url.split('/').pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    })

   

  }
  return (
    <div className='igme__header' id='home'>
      <div className='igme__header-info'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>            
          <span className={`${letterClass} _13`}>{amStr}</span>
          <span className={`${letterClass} _14`}>'m</span>
          <Letters letterClass={letterClass} strArray={nameArray} idx={15}></Letters><br/>
          <Letters letterClass={letterClass} strArray={jobArray} idx={22}></Letters>
          
        </h1>
        
       
        <motion.article variants={explainPhrase} initial="hidden" animate="show">
          I'm a creative and passionate frontend developer who works to deliver unique and exciting digital solutions that provide an exceptional experience to users.
        </motion.article>
       
        <div className='btn-dowloader'>      
         
             <div>
             
              <Button onClickBtn={dowloaderCV} type="button" text='CV Dowloader' margin={mrg}></Button>        
          </div>
           
         
        </div>
      </div>
      <motion.div variants={starAnimation} initial="hidden" animate="show" className='igme__header-img'>
        <motion.div variants={starItem} className='container-profile'>            
          <Profile/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header