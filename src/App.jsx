import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Shop from "./components/Shop";
import MensCollection from "./components/MensCollection";




function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mens-collection" element={<MensCollection />} />


      </Routes>
    </Router>
  );
}

export default App;
