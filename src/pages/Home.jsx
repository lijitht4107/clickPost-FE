import React, { useEffect, useState } from "react";
import Navbar from "../components/commen/Navbar";
import Cards from "../components/Cards";
import AxiosInstants from "../config/AxiosInstants";
import "./css/Home.css";
import Footer from "../components/Footer";

function Home() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    getAllImages();
  }, []);
  const getAllImages = () => {
    AxiosInstants.get("/users/getAllImages")
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <header>
        <div className="home-nav">
          <Navbar />
        </div>
      </header>
      <div className=" container">
        
        <div className="home-images">
          <div className="row p-2 gap-3">
            {imageData.map((image,index) => (
              <Cards key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
