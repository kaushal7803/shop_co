"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import logo1 from "../../src/assets/images/LogosMarquee/logo1.png"
import logo2 from "../../src/assets/images/LogosMarquee/logo2.png"
import logo3 from "../../src/assets/images/LogosMarquee/logo3.png"
import logo4 from "../../src/assets/images/LogosMarquee/logo4.png"
import logo5 from "../../src/assets/images/LogosMarquee/logo5.png"

export function BrandsBanner() {
  const logos = [
    { src: logo1, alt: "Versace" },
    { src: logo2, alt: "Zara" },
    { src: logo3, alt: "Gucci" },
    { src: logo4, alt: "Prada" },
    { src: logo5, alt: "Calvin Klein" },
  ];

  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-black py-8 lg:py-[42px] overflow-hidden flex items-center relative z-20">
      <motion.div
        className="flex w-max items-center gap-10 md:gap-16 lg:gap-24 opacity-90 pr-10 md:pr-16 lg:pr-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {marqueeLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-6 md:h-8 lg:h-[34px] w-auto object-contain flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  )
}
