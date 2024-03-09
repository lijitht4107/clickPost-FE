import React, { useEffect, useState } from "react";
import Navbar from "../components/commen/Navbar";
import Cards from "../components/Cards";
import AxiosInstants from "../config/AxiosInstants";
import "./css/Home.css";
import SettingsBtn from "../aditionalCompo/SettingsBtn";
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
      <body className="body">
        <SettingsBtn />
        <div className="">
          <div className="row p-2 gap-3">
            {imageData.map((image) => (
              <Cards image={image} />
            ))}
          </div>
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
