import React from "react";
import "./css/FrontInterface.css";
import FooterFront from "../components/commen/Footer";

function FrontFace() {
  return (
    <div>
      <h3 className="head">CLICK_POST</h3>
      <div className="front-area">
        <div className="front-page">
          <h1 className="front-body-text">
            make your world with your camera{" "}
            <button className=" d-grid  btn btn-info">
              <a href="/signup">start</a>
            </button>
          </h1>{" "}
        </div>
      </div>
      <div className="footer">
        <FooterFront/>
      </div>
    </div>
  );
}

export default FrontFace;
