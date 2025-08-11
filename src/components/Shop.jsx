import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Shop Our Products</h1>
      <div className="product-grid">
        <div className="product-item">
          <img
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw35916670/images/Titan/Catalog/95292WM02_5.jpg?sw=360&sh=360"
            alt="Smart Watch"
          />
          <h3>Smart Watch</h3>
          <p>$199.99</p>
        </div>
        <div className="product-item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-001-6792869accae0.jpg?crop=0.691xw:0.920xh;0.133xw,0.0736xh&resize=640:*"
            alt="Wireless Earbuds"
          />
          <h3>Wireless Earbuds</h3>
          <p>$79.99</p>
        </div>
        <div className="product-item">
          <img
            src="https://www.livemint.com/lm-img/img/2024/03/01/600x338/wireless_gamingheadphone_1709285565802_1709285566781.png"
            alt="Gaming Headset"
          />
          <h3>Gaming Headset</h3>
          <p>$149.99</p>
        </div>
      </div>

      <Link to="/" className="back-home-btn">Back to Home</Link>
    </div>
  );
};

export default Shop;
