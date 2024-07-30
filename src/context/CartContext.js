import React, { useState, createContext, useEffect } from "react";

// a context to store the cart state
const CartContext = createContext();

// a provider to wrap your app
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Initialize cart products based on cartItems
    const initialCartProducts = cartItems.map((item) => ({
      ...item,
      quantity: 1,
    }));
    setCartProducts(initialCartProducts);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 0 }];
      }
    });
  };

  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartProducts,
        addToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
