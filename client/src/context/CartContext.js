import { createContext, useState, useEffect } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (cartItemId) => {
    const filterdCartItems = cartItems.filter((item, index) => {
      return item.id !== cartItemId;
    });
    setCartItems(filterdCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
