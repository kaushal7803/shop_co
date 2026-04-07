"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Star, StarHalf, ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  id: string | number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  imageSrc?: string;
}

export function ProductCard({ id, title, price, originalPrice, rating, imageSrc = "/product.png" }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // allow button click inside Link tag cleanly
    addItem({
      id: Number(id),
      title,
      price,
      image: imageSrc,
      quantity: 1,
      selectedSize: "Medium",
      selectedColor: "Black"
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Link href={`/product/${id}`} className="group flex flex-col gap-4 cursor-pointer relative">
      <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#F0EEED] group/image">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 200px, (max-width: 1280px) 25vw, 350px"
          className="object-contain object-center p-4 transition-transform duration-300 group-hover/image:scale-105 mix-blend-multiply"
        />
        
        <div className="absolute inset-0 bg-black/5 opacity-0 hidden md:block group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div className="absolute inset-x-0 bottom-4 hidden md:flex justify-center opacity-0 translate-y-4 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-300 z-20">
          <button 
            onClick={handleAddToCart}
            className={`px-6 py-2.5 rounded-full font-medium shadow-lg transition-colors flex items-center gap-2 pointer-events-auto ${
              isAdded ? "bg-green-500 text-white" : "bg-black text-white hover:bg-black/90"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg leading-tight truncate text-black">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-[#FFC633]">
            {Array.from({ length: 5 }).map((_, i) => {
              if (i < fullStars) return <Star key={i} className="fill-current w-[18px] h-[18px]" />
              if (i === fullStars && hasHalfStar) return <StarHalf key={i} className="fill-current w-[18px] h-[18px]" />
              return <Star key={i} className="text-black/20 fill-black/20 w-[18px] h-[18px]" />
            })}
          </div>
          <span className="text-sm font-medium text-black/60 pt-0.5">{rating}/5</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-2xl font-bold">${price}</span>
          {originalPrice && (
            <>
              <span className="text-2xl font-bold text-black/40 line-through">${originalPrice}</span>
              <span className="text-xs font-medium bg-[#FF3333]/10 text-[#FF3333] px-3.5 py-1.5 rounded-[62px]">
                -{discount}%
              </span>
            </>
          )}
          <button
            onClick={handleAddToCart}
            className={`ml-auto w-9 h-9 md:hidden ${isAdded ? "bg-green-500" : "bg-black hover:bg-black/80"} text-white flex items-center justify-center rounded-full transition-colors flex-shrink-0`}
            aria-label="Add to cart"
          >
            {isAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </Link>
  )
}
