import React, {  useState } from 'react';

import FirstNav from './commen/FirstNav';
import './css/SignupBox.css'
import AxiosInstants from '../config/AxiosInstants';
import { useNavigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../constants/Plugins';

function SignupBox() {
  const navigate =useNavigate()
  const [signupData,setSignupData] = useState(
    {
      userName:'',
      email:'',
      password:'',

    }
  )
 const HandleRegister = () =>{

  AxiosInstants.post('/auth/signup',signupData).then((res)=>{
    
    if(res.data.message==="signup successfull"){
      toastSuccess("sigup successfull")
      navigate('/login')
    }
    if(res.data.message==="email already exist"){
      toastError("email alread exist")
      
    }
  }).catch((err)=>{
    console.log(err);
  })
 }
  return (

    <>
    <FirstNav />

      <div className="sign-page">
        <div className="container log d-grid">
          <input
            type="text"
            className="d-flex sign-in"
            placeholder="userName"
            name="userName"
            value={signupData.userName}
            onChange={(e)=>{
              setSignupData({...signupData,userName:e.target.value})
            }}
          />
          <input
            type="email"
            className="d-flex sign-in"
            placeholder="email"
            name="email"
            onChange={(e)=>{
              setSignupData({...signupData,email:e.target.value})
            }}
          />
            <input
            type="password"
            className="d-flex sign-in"
            placeholder="password"
            name="password"
            onChange={(e)=>{
              setSignupData({...signupData,password:e.target.value})
            }}
          />
           <input
            type="password"
            className="d-flex sign-in"
            placeholder="Confirm Password"
           />

          <button className="sign-btnn" onClick={HandleRegister}>Signup</button>
          
        </div>
      </div>
      
    </>
  );
}

export default SignupBox;