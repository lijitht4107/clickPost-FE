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
            make your world with your camera{" "}
            <button className="  btn btn-info">
              <Link to="/signup">start</Link>
            </button>
          </h1>{" "}
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
