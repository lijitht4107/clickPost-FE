import React from 'react'
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddImage from '../../assets/add-square-svgrepo-com.svg'
import Logo from '../../assets/camera-alt-svgrepo-com.svg'
import profile from '../../assets/profile-user-svgrepo-com.svg'

function Navbar() {
  const {userDetails} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  
  return (
    <>
    <nav>
      
    <div className=' nav-area ' >
      <div className='container'>
        <ul className='d-flex nav-content'>
            <div className='d-flex nav-contenr-sep'>
            <li className='nav-item btn btn-light nav-logo' onClick={()=>navigate('/home')}><img width={'60%'} src={Logo} alt='click_post'/></li>
            <li className='nav-item' id='nav-itm2' onClick={()=>navigate('/home')}>home</li>
            </div>
            <div className='d-flex nav-contenr-sep'>
            <li className='nav-item' id='nav-itm5' onClick={()=>navigate('/addimage')}><img width={'40%'} className='bg bg-light rounded' src={AddImage} alt='add_image'/></li>
            <li className='nav-item  ' id='nav-itm8' onClick={()=>navigate('/profile')}><img width={'50%'} src={profile} alt="" /></li>
            </div>
        </ul>
        </div>
    </div>
    
    </nav>
    </>
  )
}

export default Navbar
