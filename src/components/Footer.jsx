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
      <section className='footer-user-area'>
        <h6> User Area</h6>
        <div>
         <p><b>Name :</b>{userDetails.userName}</p>
         <p><b>Email :</b> {userDetails.email}</p>
         <a href="" onClick={Logout}>Logout</a>
        </div>
        <br /><br /> 
      </section>
      <br /><br />
      
     <div >
      <h6 >founder & build by :</h6>
      <p> lijith</p>
      </div>
      </footer>
      </>
  )
}

export default Footer
