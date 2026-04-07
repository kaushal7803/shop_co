import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"

interface Product {
  id: string | number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  imageSrc?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-12 md:py-[70px] border-b border-black/10 last:border-none">
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center">
        <h2 className="text-[32px] md:text-[48px] font-extrabold text-black uppercase font-integral tracking-tighter mb-10 md:mb-14 text-center">
          {title}
        </h2>
        
        <div className="flex w-full overflow-x-auto lg:grid lg:grid-cols-4 gap-4 md:gap-5 mb-10 pb-4 scrollbar-hide snap-x">
          {products.map((product) => (
            <div key={product.id} className="min-w-[200px] w-[200px] sm:min-w-[250px] flex-shrink-0 lg:w-auto lg:min-w-0 snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <Button variant="outline" size="default" className="w-full md:w-auto px-16 h-[52px] rounded-full text-base font-medium">
          View All
        </Button>
      </div>
    </section>
  )
}
