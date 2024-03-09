import React from 'react'
import { useSelector } from 'react-redux'
import './css/Profile.css'
import Navbar from '../components/commen/Navbar'

function Profile() {
    const {userDetails} =useSelector((state) => state.user)
  return (
    <><div><Navbar/></div>
    
    <section>
        <div className='container user-details'>
           <p><b>Name :</b>{userDetails.userName}</p>
           <br />
           <p><b>MailID :</b>{userDetails.email}</p>

        </div>
    </section>
    </>
  )
}

export default Profile
