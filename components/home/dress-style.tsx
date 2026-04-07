import Image from "next/image"
import Link from "next/link"
import casualImg from "../../src/assets/images/styles/casual.png"
import formalImg from "../../src/assets/images/styles/formal.png"
import partyImg from "../../src/assets/images/styles/party.png"
import gymImg from "../../src/assets/images/styles/gym.png"

export function DressStyleSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="bg-[#F0F0F0] rounded-[40px] py-10 px-6 md:py-[70px] md:px-[64px] flex flex-col items-center">
          <h2 className="text-[32px] md:text-[48px] font-extrabold text-black uppercase font-integral tracking-tighter mb-10 md:mb-16 text-center lg:max-w-[700px] leading-[1.1]">
            BROWSE BY dress STYLE
          </h2>

          <div className="w-full flex flex-col gap-4 md:gap-5">
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 h-auto md:h-[289px]">
              <Link href="/shop/casual" className="relative group overflow-hidden rounded-[20px] bg-white h-[190px] md:h-full md:flex-[0.4] cursor-pointer">
                <span className="absolute top-6 left-6 md:top-8 md:left-9 z-10 text-[24px] md:text-[36px] font-bold text-black">Casual</span>
                <Image src={casualImg} alt="Casual Style" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-right md:object-center transition-transform duration-300 group-hover:scale-105" />
              </Link>
              <Link href="/shop/formal" className="relative group overflow-hidden rounded-[20px] bg-white h-[190px] md:h-full md:flex-[0.6] cursor-pointer">
                <span className="absolute top-6 left-6 md:top-8 md:left-9 z-10 text-[24px] md:text-[36px] font-bold text-black">Formal</span>
                <Image src={formalImg} alt="Formal Style" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover object-right md:object-center transition-transform duration-300 group-hover:scale-105" />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-5 h-auto md:h-[289px]">
              <Link href="/shop/party" className="relative group overflow-hidden rounded-[20px] bg-white h-[190px] md:h-full md:flex-[0.6] cursor-pointer">
                <span className="absolute top-6 left-6 md:top-8 md:left-9 z-10 text-[24px] md:text-[36px] font-bold text-black">Party</span>
                <Image src={partyImg} alt="Party Style" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover object-right md:object-center transition-transform duration-300 group-hover:scale-105" />
              </Link>
              <Link href="/shop/gym" className="relative group overflow-hidden rounded-[20px] bg-white h-[190px] md:h-full md:flex-[0.4] cursor-pointer">
                <span className="absolute top-6 left-6 md:top-8 md:left-9 z-10 text-[24px] md:text-[36px] font-bold text-black">Gym</span>
                <Image src={gymImg} alt="Gym Style" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-right md:object-center transition-transform duration-300 group-hover:scale-105" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
