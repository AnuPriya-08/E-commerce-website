import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Find the latest gadgets and tech products.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoZPc6i9Oh2TkVCCzdgVF-a2xFa-MpKaiUQ&s",
  },
  {
    id: 2,
    name: "Clothing",
    description: "Explore trendy clothes for men and women.",
    img: "https://media.istockphoto.com/id/626856214/photo/women-clothing-fall-winter-collection.jpg?s=612x612&w=0&k=20&c=I9gqM2C3sxR6e_NgelLInb_wt5R89IT6swiy0VFhhqw=",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    description: "Everything you need for a comfortable home.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCQtou4r0fEHK62pbM-i1oF7IjrTwmQR2TA&s",
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    description: "Skincare, cosmetics, and grooming essentials.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FrRWQTgwWAKZjdpGP0XhUnLMrk1s6hvIrg&s",
  },
  {
    id: 5,
    name: "Sports",
    description: "Gear up for sports and outdoor activities.",
    img: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
  },
  {
    id: 6,
    name: "Books",
    description: "A wide range of books for every reader.",
    img: "https://images6.alphacoders.com/346/346199.jpg",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  
  const handleExplore = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  
  const handleAddToCart = (category) => {
    const updatedCart = [...cart, category];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${category.name} added to cart!`);
  };

  return (
    <div className="categories-container">
      <h2>Shop by Category</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.img} alt={category.name} />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button className="shop-btn" onClick={() => handleExplore(category.name)}>
                Explore
              </button>
              <button className="cart-btn" onClick={() => handleAddToCart(category)}>
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
