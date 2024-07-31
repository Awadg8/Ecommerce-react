import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductProvider } from "../context/productContext";
import { HideHeaderFooterProvider } from "../context/HideContext";
import { CartProvider } from "../context/CartContext";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ImageZoom from "./ImageZoom";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HideHeaderFooterProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </CartProvider>
          </ProductProvider>
        </HideHeaderFooterProvider>
      </div>
    </Router>
  );
}

export default App;
