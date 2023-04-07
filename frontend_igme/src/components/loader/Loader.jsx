import React from 'react'
import './Loaders.scss'
function Loader() {
  return (
      <div id='loaderIgme'>
          <div className="spinner-box">
            <div className="circle-border">
                <div className="circle-core"></div>
            </div>  
        </div>
    </div>
  )
}

export default Loader