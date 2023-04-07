import React from 'react'
import './Profile.scss'
import { images } from '../../constants'
function Profile() {
  return (
      <>
        <div className='igme__profile-blur'>          
          </div>
      <div className='igme__profile-wrap'>
        <img className='img1Circle' src={images.circle2} />
        {/* <img className='img2Circle' src={images.circle1} />
        <img className='img3Circle' src={images.circle3} /> */}
        <div className='divProfile-igme'>
          <img src={images.pro} />
        </div>   
        <div className='gif gif1'>
          <img src={ images.gif1} />
        </div>
        <div className='gif gif2'>
          <img src={images.gif2 } />
        </div>
        <div className='gif gif3'>
          <img src={images.gif4 } />
        </div>
        </div>
      </>
  )
}

export default Profile