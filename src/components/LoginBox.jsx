import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstNav from "./commen/FirstNav";
import "./css/LoginBox.css";
import AxiosInstants from "../config/AxiosInstants";
import { toastError, toastSuccess } from "../constants/Plugins";
import { useDispatch} from "react-redux";
import { setUserDetails } from "../Toolkit/UserSlice";

function LoginBox() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleLogin = ()=>{
    try {
      if(email&&password){

      AxiosInstants.post('/auth/login',{email,password}).then((res)=>{
        
        if(res.data.message==="login successfull"&&res.data.token){
          localStorage.setItem("token",res.data.token)
          const ParsedToken = parseJwt(res.data.token)
          localStorage.setItem("userName",JSON.stringify(ParsedToken))
          console.log(ParsedToken);
          dispatch(setUserDetails(ParsedToken))
          toastSuccess("login successfull")
          navigate('/home')
        }
        if(res.data.message==="invalied credentials"){
          toastError("invalied credintials")
        }
      })
      }else{
        toastError("credintial not filled")
      }
    } catch(error){
      console.log(error);
    }
  }
    // parseJwt function for decoding backend user token details
    function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
  
      return JSON.parse(jsonPayload);
    }
  return (
    <>
      <FirstNav />

      <div className="login-page ">
        <div className="container log d-grid ">

          <input
            type="email"
            className="d-flex log-in"
            placeholder="email"
            
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            className="d-flex log-in"
            placeholder="password"
            
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
         
          <button className="btnn" onClick={handleLogin}>Login</button>
          <p className="dd">
            Not a member?{" "}
            <i onClick={() => navigate("/signup")}>
              Register
            </i>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
