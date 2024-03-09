import React from 'react'
import FirstNav from '../components/commen/FirstNav'
import './css/FrontInterface.css'
import Footer from '../components/Footer'

function MainInterface() {
  return (
    <div>
      <FirstNav/>
      <div className='front-area'>
      <div className='front-page'><h1 className='front-body-text'>make your world with your camera</h1></div>
      
      </div>
     <Footer className={'footer'}/>
      
    </div>
  )
}

export default MainInterface
