"use client";

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronDown, X } from "lucide-react"
import { Frame as SearchIcon } from "../../src/assets/icons/SearchIcon"
import { Frame as CartIcon } from "../../src/assets/icons/CartIcon"
import { Frame as ProfileIcon } from "../../src/assets/icons/ProfileIcon"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-black/10">
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-8 h-[90px] flex items-center justify-between gap-4 lg:gap-10">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-1 -ml-1 text-black" 
            aria-label="Menu" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="font-extrabold text-[25px] lg:text-[32px] tracking-tighter font-integral">
            SHOP.CO
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/shop" className="flex items-center gap-1 text-base hover:text-black/80">
            Shop <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="/on-sale" className="text-base hover:text-black/80">On Sale</Link>
          <Link href="/new-arrivals" className="text-base hover:text-black/80">New Arrivals</Link>
          <Link href="/brands" className="text-base hover:text-black/80">Brands</Link>
        </nav>

        <div className="hidden flex-1 lg:flex h-12 bg-[#F0F0F0] rounded-full items-center px-4 gap-3">
          <span className="opacity-40"><SearchIcon /></span>
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="bg-transparent border-none outline-none w-full text-base placeholder:text-black/40 text-black"
          />
        </div>

        <div className="flex items-center gap-3 lg:gap-3.5">
          <button className="lg:hidden" aria-label="Search">
            <SearchIcon />
          </button>
          <Link href="/cart" aria-label="Cart">
            <CartIcon />
          </Link>
          <Link href="/profile" aria-label="Profile">
            <ProfileIcon />
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="absolute top-[90px] left-0 w-full bg-white border-b border-black/10 py-4 px-6 flex flex-col gap-6 shadow-xl lg:hidden z-50">
          <Link href="/shop" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/on-sale" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>On Sale</Link>
          <Link href="/new-arrivals" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link>
          <Link href="/brands" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Brands</Link>
        </nav>
      )}
    </header>
  )
}
