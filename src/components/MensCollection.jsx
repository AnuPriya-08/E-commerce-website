import React from "react";
import { useNavigate } from "react-router-dom";
import "./MensCollection.css";


const MensCollection = () => {
  const navigate = useNavigate();

  const images = [
    "https://sslimages.shoppersstop.com/sys-master/images/h18/hd5/33843657015326/A24326961PBXBRO_BROWN.jpg_2000Wx3000H", 
     "https://assets.vogue.com/photos/61e9c4343099cf49778adb03/16:9/w_1280,c_limit/00_social.jpg",
  ];
  






  return (
    <div className="mens-collection">
      <button onClick={() => navigate("/")}>Back to Home</button>
      <h2>Men's Collection</h2>
      <div className="mens-collection-grid">
        {images.map((image, index) => (
          <div className="mens-collection-item" key={index}>
            <img src={image} alt={`Men's Collection ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensCollection;
