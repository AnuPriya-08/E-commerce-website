import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Products.css";



const products = [
  { id: 1, category: "Electronics", name: "Smartphone", price: "$999" },
  { id: 2, category: "Clothing", name: "Jacket", price: "$120" },
  { id: 3, category: "Home & Kitchen", name: "Blender", price: "$50" },
  
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  }, [location]);

  return (
    <div className="products-container">
      <h2>Products in {new URLSearchParams(location.search).get("category")}</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
