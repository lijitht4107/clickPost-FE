import React, { useState } from "react";
import FirstNav from "./commen/FirstNav";
import "./css/SignupBox.css";
import AxiosInstants from "../config/AxiosInstants";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../constants/Plugins";
import profile_icon from "../assets/profile-svgrepo-com.svg";
import email_icon from "../assets/email-svgrepo-com.svg";
import password_icon from "../assets/password-svgrepo-com.svg";

function SignupBox() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const HandleRegister = () => {
    AxiosInstants.post("/auth/signup", signupData)
      .then((res) => {
        if (res.data.message === "signup successfull") {
          toastSuccess("sigup successfull");
          navigate("/login");
        }
        if (res.data.message === "email already exist") {
          toastError("email alread exist");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <FirstNav />
<div className="bg">
      <div className="container sign-page">
        <h1>sign up</h1>
        <div className="input-area mt-2">
          <img className="signup-icons" src={profile_icon} alt="profile icon" />
          <input
            type="text"
            placeholder="userName"
            name="userName"
            value={signupData.userName}
            onChange={(e) => {
              setSignupData({
                ...signupData,
                userName: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-area mt-2">
          <img className="signup-icons" src={email_icon} alt="" />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => {
              setSignupData({ ...signupData, email: e.target.value });
            }}
          />
        </div>
        <div className="input-area mt-2">
          <img className="signup-icons" src={password_icon} alt="" />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              setSignupData({
                ...signupData,
                password: e.target.value,
              });
            }}
          />
        </div>

        <button className="mt-2 sign-btnn" onClick={HandleRegister}>
          Signup
        </button>
      </div>
      </div>
    </>
  );
}

export default SignupBox;
