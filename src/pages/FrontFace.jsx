import React from "react";
import "./css/FrontInterface.css";
import FooterFront from "../components/commen/Footer";
import { Link } from "react-router-dom";

function FrontFace() {
  return (
    <>
    <div >
      <div className="container">
      <h3 className="head ">CLICK_POST</h3>
      
      </div><div className="front-area">
        <div className="front-page">
          <h1 className="front-body-text">
            make your world with your camera
            </h1>
            <div className="start-button-area">
            <button className="  start-button">
              <Link to="/signup">start</Link>
            </button>
            </div>
        </div>
      </div>
      <div className="footer">
        <FooterFront/>
      </div>
    </div>
    </>
  );
}

export default FrontFace;
