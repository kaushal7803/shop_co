import dynamic from "next/dynamic";
export const revalidate = 0; // Temporary: disable segment caching for debugging

import { HeroSection } from "@/components/home/hero-section";
import { ProductSection } from "@/components/home/product-section";
import { DressStyleSection } from "@/components/home/dress-style";
import { ReviewsSection } from "@/components/home/reviews";
import { fetchProducts } from "@/lib/api";
import { FadeUp } from "@/components/ui/fade-up";

const BrandsBanner = dynamic(
  () => import("@/components/home/brands-banner").then(m => m.BrandsBanner)
);

export default async function Home() {
  const allProducts = await fetchProducts();

  const formattedProducts = allProducts.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    rating: p.rating.rate,
    imageSrc: p.image,
  }));

  const newArrivals = formattedProducts.slice(0, 4);
  const topSelling = formattedProducts.slice(4, 8);

  return (
    <>
      <FadeUp delay={0.1}>
        <HeroSection />
      </FadeUp>
      <FadeUp delay={0.2}>
        <BrandsBanner />
      </FadeUp>
      <FadeUp delay={0.1}>
        <ProductSection title="NEW ARRIVALS" products={newArrivals} />
      </FadeUp>
      <FadeUp delay={0.1}>
        <ProductSection title="TOP SELLING" products={topSelling} />
      </FadeUp>
      <FadeUp delay={0.1}>
        <DressStyleSection />
      </FadeUp>
      <FadeUp delay={0.1}>
        <ReviewsSection />
      </FadeUp>
    </>
  );
}
