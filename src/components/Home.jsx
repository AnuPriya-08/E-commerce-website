import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/shop"); 
  };

  const handleMensCollectionClick = () => {
    navigate("/mens-collection"); 
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Shop the best products at unbeatable prices!</p>
          <button className="shop-now-btn" onClick={handleShopNowClick}>
            🛒 Shop Now
          </button>
        </div>
      </section>

      <section className="collection">
        <h2>🔥 Featured Collection</h2>
        <div className="collection-grid">
          
          <div className="collection-item">
            <img
              src="https://cmsimages.shoppersstop.com/SS_25_men_main_kv_web_f6d9bc6f93/SS_25_men_main_kv_web_f6d9bc6f93.png"
              alt="New Collection"
            />
            <h3>New Collection</h3>
            <p>Fresh arrivals - Check out now!</p>
          </div>

        
          <div className="collection-item">
            <img
              src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?cs=srgb&dl=pexels-andre-furtado-43594-1263986.jpg&fm=jpg"
              alt="Summer Collection"
            />
            <h3>Summer Collection</h3>
            <p>Cool styles - Up to 40% OFF</p>
          </div>

          <div className="collection-item" onClick={handleMensCollectionClick}>
            <img
              src="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg"
              alt="Men's Collection"
            />
            <h3>Men's Collection</h3>
            <p>Trendy & Affordable Fashion</p>
          </div>

          <div className="collection-item">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-accessory/y/a/s/6-piece-korean-style-pearl-barrette-women-s-set-hairpin-korean-original-imagrmhkgehfjetg.jpeg?q=90&crop=false"
              alt="Accessories"
            />
            <h3>Accessories</h3>
            <p>Exclusive Deals on Watches & Bags</p>
          </div>
        </div>
      </section>

      

      <footer className="footer">
        <p>© 2025 E-Commerce Store | All Rights Reserved</p>
        <div className="social-icons">
          <span>📘 Facebook</span>
          <span>🐦 Twitter</span>
          <span>📸 Instagram</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
