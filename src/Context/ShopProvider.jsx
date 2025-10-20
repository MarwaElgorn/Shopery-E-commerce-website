import React, { useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setCart(savedCart);
    setFavorites(savedFavs);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, quantity: quantity < 1 ? 1 : quantity } : p
      )
    );
  };

  const addToFavorites = (product) => {
    const exists = favorites.find((p) => p.id === product.id);
    if (!exists) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
