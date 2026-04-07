"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DEFAULT_ITEMS: CartItem[] = [
  { id: 1, title: "Gradient Graphic T-shirt", price: 145, image: "/product.png", quantity: 1, selectedSize: "Large", selectedColor: "White" },
  { id: 2, title: "Checkered Shirt", price: 180, image: "/product.png", quantity: 1, selectedSize: "Medium", selectedColor: "Red" },
  { id: 3, title: "Skinny Fit Jeans", price: 240, image: "/product.png", quantity: 1, selectedSize: "Large", selectedColor: "Blue" },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("shopco_cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch {
        setItems(DEFAULT_ITEMS);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("shopco_cart", JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev => prev.map(i => {
      if (i.id === id) {
        return { ...i, quantity: Math.max(1, i.quantity + delta) };
      }
      return i;
    }));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = items.length > 0 ? 15 : 0;
  const total = items.length > 0 ? subtotal - discount + deliveryFee : 0;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, subtotal, discount, deliveryFee, total }}>
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
