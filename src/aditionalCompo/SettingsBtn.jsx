import React from 'react'
import settings from '../assets/dots-vertical-alt-svgrepo-com.svg'
import './css/SettingsBtn.css'

import { useNavigate } from 'react-router-dom'

function SettingsBtn() {
    const navigate=useNavigate()
    const Logout=()=>{
        localStorage.clear()
        navigate('/')
    }

  return (
    <> 
<div className="dropdown">
  <span><img className='settings-btn' src={settings} alt=""  /></span>
  <div className="dropdown-content">
  <h6 onClick={Logout}>Logout</h6>
  </div>
</div>


  
    
    </>
  )
}

export default SettingsBtn
