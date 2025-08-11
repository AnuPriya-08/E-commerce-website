import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <nav className="menu">
            <div className="logo">
              
                <Link to="/">
                
                    <img src="https://w7.pngwing.com/pngs/384/470/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo-thumbnail.png" 
                    alt="ClickNCart Logo" 
                    className="logo-img"
                     />
                </Link>
                <span></span> ClickNcart
            </div>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/categories">Categories</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
