import React from 'react'
import './Letters.scss'

function Letters({letterClass,strArray,idx}) {
  return (
      <span className='letterContent'>
          {strArray.map((char, index)=>(
              <span key={char + index} className={`${letterClass} _${index + idx}`}>
                  {char}
            </span>
          ))
          }
    </span>
    
  )
}

export default Letters