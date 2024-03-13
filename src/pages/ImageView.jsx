import React from "react";
import ImageCard from "../components/ImageCard";
import "./css/ImageView.css";
import Navbar from "../components/commen/Navbar";
import Footer from "../components/Footer";

function ImageView() {
  return (
    <> 
      <div>
      
        <div className="image-card-nav">
          <Navbar/>
        </div>
      
      <div className="image-view">
        <ImageCard />
      </div>
      <footer>
        <Footer />
      </footer>
      </div>
    </>
  );
}

export default ImageView;
