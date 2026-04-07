import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { CartClient } from "@/components/ui/cart-client";

export default function CartPage() {
  return (
    <div className="container max-w-[1400px] mx-auto px-4 lg:px-8 py-8 md:py-10">
      <FadeUp delay={0.1}>
        <nav className="flex items-center gap-2 text-black/60 text-sm mb-6 md:mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black font-medium">Cart</span>
        </nav>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-black uppercase font-integral tracking-tighter mb-6 md:mb-8">
          YOUR CART
        </h1>
      </FadeUp>

      <CartClient />
    </div>
  );
}
