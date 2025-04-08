"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Product, CartItem } from "@/types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (index: number, change: number) => void;
  removeItem: (index: number) => void;
  calculateTotal: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (index: number, change: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const newQuantity = updatedCart[index].quantity + change;

      if (newQuantity <= 0) {
        if (window.confirm("Yakin ingin menghapus item ini dari keranjang?")) {
          updatedCart.splice(index, 1);
        }
      } else {
        updatedCart[index].quantity = newQuantity;
      }

      return updatedCart;
    });
  };

  const removeItem = (index: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        return updatedCart;
      });
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
