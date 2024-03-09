import React from "react";
import ImageCard from "../components/ImageCard";
import "./css/ImageView.css";
import Navbar from "../components/commen/Navbar";
import Footer from "../components/Footer";

function ImageView() {
  return (
    <>
    <header>
    <div className="image-card-nav">
          <Navbar />
        </div>
    </header>
      <body className="body">
      <ImageCard />
      </body>
        <footer>
          <Footer/>
        </footer>
        
      
    </>
  );
}

export default ImageView;
