import React from 'react'
import './css/Footer.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const {userDetails} = useSelector((state => state.user))
  const Navigate = useNavigate()

  const Logout =() =>{
    localStorage.clear()
    Navigate('/')
    console.log(userDetails);
  }
  return (
    <>
    <footer className='footer'>
      {userDetails&&<section className='footer-user-area'>
        <h6> User Area</h6>
        <div>
         <p><b>Name :</b>{userDetails.userName}</p>
         <p><b>Email :</b> {userDetails.email}</p>
         <a href="" onClick={Logout}>Logout</a>
        </div>
        <br /><br /> 
      </section>}
      <br /><br />
      <div className='describe-page'>
        <div className='left-describe'>
          <p>about page</p>
          <p>contact</p>

        </div>
        <div className='right-describe'>
          <p>about us</p>
          <p>location</p>

        </div>
      </div>
     <div >
      <h6 >founder & build by :</h6>
      <p> lijith</p>
      </div>
      </footer>
      </>
  )
}

export default Footer
