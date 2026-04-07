"use client"
import { useRef } from "react"
import { ReviewCard } from "@/components/ui/review-card"
import { ArrowLeft, ArrowRight } from "lucide-react"

const MOCK_REVIEWS = [
  { id: 1, name: "Sarah M.", content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.", rating: 5, verified: true },
  { id: 2, name: "Alex K.", content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.", rating: 5, verified: true },
  { id: 3, name: "James L.", content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5, verified: true },
  { id: 4, name: "Maria V.", content: "Highly recommend! The delivery was incredibly fast and the quality was surprisingly good for the price. I'll definitely be ordering from here again.", rating: 4, verified: true },
  { id: 5, name: "David O.", content: "My experience has been decent. The app is fast and very easy to navigate. Clothes fit well.", rating: 4, verified: true },
]

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-[32px] md:text-[48px] font-extrabold text-black uppercase font-integral tracking-tighter leading-[1.1] max-w-[280px] md:max-w-none hover:cursor-default">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-4 md:gap-7 pb-2">
            <button onClick={() => scroll('left')} className="w-6 h-6 flex items-center justify-center text-black hover:text-black/60 transition-colors" aria-label="Previous review">
              <ArrowLeft size={28} strokeWidth={2} />
            </button>
            <button onClick={() => scroll('right')} className="w-6 h-6 flex items-center justify-center text-black hover:text-black/60 transition-colors" aria-label="Next review">
              <ArrowRight size={28} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scroll-smooth flex-nowrap scrollbar-hide pb-4 px-4 -mx-4 lg:mx-0 lg:px-0" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {MOCK_REVIEWS.map((review) => (
            <div key={review.id} className="w-[358px] md:w-[450px] shrink-0">
              <ReviewCard {...review} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
