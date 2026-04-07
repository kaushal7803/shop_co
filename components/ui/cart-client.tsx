"use client";

import Image from "next/image";
import { ChevronRight, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { FadeUp } from "@/components/ui/fade-up";

export function CartClient() {
  const { items, removeItem, updateQuantity, subtotal, discount, deliveryFee, total } = useCart();

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
      <FadeUp delay={0.3} className="flex-1 w-full">
        <div className="flex-1 w-full flex flex-col gap-6 p-4 md:p-6 border border-black/10 rounded-[20px]">
          {items.length === 0 ? (
            <p className="text-center text-black/60 py-10 font-medium">Your cart is empty.</p>
          ) : (
            items.map((item, index) => (
              <div key={item.id} className={`flex gap-4 pb-6 ${index !== items.length - 1 ? "border-b border-black/10" : ""}`}>
                <div className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] bg-[#F0EEED] rounded-[8.66px] relative flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100px, 124px"
                    className="object-contain p-2 mix-blend-multiply"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-base md:text-xl leading-tight mb-1">{item.title}</h3>
                      <p className="text-black/60 text-xs md:text-sm mb-1"><b>Size: </b><span>{item.selectedSize}</span></p>
                      <p className="text-black/60 text-xs md:text-sm"><b>Color: </b><span>{item.selectedColor}</span></p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[#FF3333] hover:text-[#FF3333]/80 p-1 transition-colors" aria-label="Remove item">
                      <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-xl md:text-2xl">${item.price}</span>
                    <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-1.5 md:py-2 gap-4">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-xl leading-none w-4 font-medium transition-opacity hover:opacity-70" aria-label="Decrease quantity">-</button>
                      <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-xl leading-none w-4 font-medium transition-opacity hover:opacity-70" aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </FadeUp>

      <FadeUp delay={0.4} className="w-full lg:w-[400px]">
        <div className="w-full lg:w-[400px] flex flex-col gap-6 p-4 md:p-6 border border-black/10 rounded-[20px]">
          <h2 className="text-[20px] md:text-[24px] font-bold text-black">Order Summary</h2>
          <div className="flex flex-col gap-5 text-sm md:text-base text-black/60 border-b border-black/10 pb-5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-black">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%)</span>
              <span className="font-bold text-[#FF3333]">-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-bold text-black">${deliveryFee}</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-lg md:text-2xl font-bold text-black">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 h-12 bg-[#F0F0F0] rounded-full flex items-center px-4">
              <input type="text" placeholder="Add promo code" className="bg-transparent border-none outline-none w-full text-sm" />
            </div>
            <button className="h-12 px-6 bg-black text-white font-medium rounded-full hover:bg-black/80">Apply</button>
          </div>
          <button className="w-full h-14 bg-black text-white font-medium rounded-full hover:bg-black/80 mt-2 flex items-center justify-center gap-2">
            Go to Checkout <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </FadeUp>
    </div>
  );
}
