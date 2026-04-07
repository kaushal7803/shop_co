"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Vector as BannerStar } from "../../src/assets/icons/BannerStar"
import { CountUp } from "@/components/ui/count-up"
import heroImage from "../../src/assets/images/hero/person.jpeg"

export function HeroSection() {
  return (
    <section className="bg-[#F2F0F1] pt-10 md:pt-[50px] overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:items-end gap-0 lg:gap-8 xl:gap-14">

        {/* Left Content */}
        <div className="
          w-full lg:w-[48%] xl:w-auto xl:flex-1
          flex flex-col items-center lg:items-start
          text-center lg:text-left
          relative z-10
          sm:pb-8 lg:pb-16 xl:pb-20
          pt-2 lg:pt-10
        ">
          <h1 className="
            text-4xl lg:text-[48px] xl:text-[64px]
            font-extrabold leading-[1] tracking-tighter
            text-black uppercase font-integral
            mb-5 lg:mb-6 xl:mb-8
            max-w-[500px] lg:max-w-[420px] xl:max-w-[577px]
          ">
            Find clothes that matches your style
          </h1>
          <p className="text-black/60 text-sm lg:text-[13px] xl:text-base leading-relaxed max-w-[500px] lg:max-w-[380px] xl:max-w-[545px] mb-6 lg:mb-7 xl:mb-8">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <Button size="default" className="w-full md:w-auto mb-8 lg:mb-10 xl:mb-12 rounded-full py-[16px] px-[54px] bg-black text-white hover:bg-black/80 transition-colors h-auto">
            Shop Now
          </Button>

          <div className="flex flex-wrap sm:flex-nowrap items-start justify-center lg:justify-start gap-x-5 gap-y-4 sm:gap-x-5 lg:gap-x-6 xl:gap-x-10 w-full">
            <div className="flex flex-col border-r border-black/10 pr-5 lg:pr-6 xl:pr-10">
              <CountUp end={200} suffix="+" className="text-[24px] lg:text-[32px] xl:text-[40px] font-bold text-black leading-none mb-1" />
              <span className="text-[10px] lg:text-xs xl:text-sm text-black/60">International Brands</span>
            </div>
            <div className="flex flex-col sm:border-r border-black/10 px-5 sm:px-5 lg:px-6 xl:px-10">
              <CountUp end={2000} suffix="+" separator="," className="text-[24px] lg:text-[32px] xl:text-[40px] font-bold text-black leading-none mb-1" />
              <span className="text-[10px] lg:text-xs xl:text-sm text-black/60">High-Quality Products</span>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:pl-5 lg:pl-6 xl:pl-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-black/10">
              <CountUp end={30000} suffix="+" separator="," className="text-[24px] lg:text-[32px] xl:text-[40px] font-bold text-black leading-none mb-1" />
              <span className="text-[10px] lg:text-xs xl:text-sm text-black/60">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="
          w-full lg:w-[52%] xl:w-auto xl:flex-1
          flex justify-center lg:justify-end
          mt-8 lg:mt-0
          relative
          self-end
        ">
          <BannerStar className="absolute left-4 lg:-left-6 top-[35%] lg:top-1/3 w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] xl:w-[56px] xl:h-[56px] z-20 text-black animate-pulse" />
          <BannerStar className="absolute right-4 lg:right-6 xl:right-8 top-10 lg:top-8 xl:top-14 w-[70px] h-[70px] lg:w-[88px] lg:h-[88px] xl:w-[104px] xl:h-[104px] z-20 text-black animate-pulse" />

          <div className="relative w-full max-w-[600px] lg:max-w-none xl:max-w-[700px] aspect-[4/4.2] xl:aspect-[4/4.2] overflow-hidden">
            <Image
              src={heroImage}
              alt="Hero Fashion Models"
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 700px"
              priority
              fetchPriority="high"
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
