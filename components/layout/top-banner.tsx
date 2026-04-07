"use client"
import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null;

  return (
    <div className="w-full bg-black text-white text-sm py-2.5 px-4 flex justify-center items-center relative z-50">
      <p className="text-center font-normal">
        Sign up and get 20% off to your first order. <Link href="#" className="underline font-medium hover:text-gray-300 ml-1">Sign Up Now</Link>
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="hidden sm:block absolute right-4 lg:right-10 text-white hover:text-gray-300 transition-colors"
        aria-label="Close banner"
      >
        <X size={20} />
      </button>
    </div>
  )
}
