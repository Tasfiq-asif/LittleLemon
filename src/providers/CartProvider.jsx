import  { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom Hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem._id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem._id !== itemId)
    );
  };

  const getItemQuantityCount = (item) =>{
    const cartItemIsExist =  cart.find(cartItem => cartItem.name === item.name)

    return cartItemIsExist ? cartItemIsExist.quantity : 0;
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart,getItemQuantityCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
