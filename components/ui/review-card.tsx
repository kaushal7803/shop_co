import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Vector as VerifiedIcon } from "../../src/assets/icons/VerifiedIcon"

interface ReviewCardProps {
  name: string;
  content: string;
  rating: number;
  verified?: boolean;
  className?: string;
}

export function ReviewCard({ name, content, rating, verified = true, className }: ReviewCardProps) {
  return (
    <div className={cn("flex flex-col gap-3.5 p-6 rounded-[20px] border border-black/10 flex-shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-500", className)}>
      <div className="flex items-center text-[#FFC633] gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={i < rating ? "fill-current w-5 h-5" : "text-black/10 fill-black/10 w-5 h-5"} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-[20px] text-black mt-1">{name}</h4>
        {verified && <VerifiedIcon />}
      </div>
      <p className="text-black/60 text-base leading-[22px]">
        "{content}"
      </p>
    </div>
  )
}
