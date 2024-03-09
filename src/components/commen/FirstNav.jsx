import React from 'react'
import '../css/FirstNav.css'
import { useNavigate } from 'react-router-dom'

function FirstNav() {
   const navigate = useNavigate()
  return (
    <div>
      <div className='nav'>
        <li className='nav-item nav-icon' onClick={()=>navigate('/')}>click_post</li>
        <span className='d-flex'>
        <li className='nav-item nav-sinlog' onClick={()=>navigate('/Login')}>login</li>
        <li className='nav-item nav-sinlog' onClick={()=>navigate('/signup')}>signup</li>
        </span>
      </div>
    </div>
  )
}

export default FirstNav
