import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

import { Logotwitter2 as TwitterIcon } from "../../src/assets/icons/Twitter"
import { Logofbsimple2 as FacebookIcon } from "../../src/assets/icons/Facebook"
import { Logoinstagram1 as InstagramIcon } from "../../src/assets/icons/Insta"
import { Logogithub1 as GitHubIcon } from "../../src/assets/icons/GitHub"

import visa from "../../src/assets/images/footer/Visa.png"
import mastercard from "../../src/assets/images/footer/Mastercard.png"
import paypal from "../../src/assets/images/footer/Paypal.png"
import applePay from "../../src/assets/images/footer/ApplePay.png"
import gPay from "../../src/assets/images/footer/GPay.png"

export function Footer() {
  return (
    <footer className="bg-[#F0F0F0] pt-[140px] pb-8 px-4 lg:px-0 mt-40 relative">
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[1400px] bg-black rounded-[20px] p-6 lg:px-16 lg:py-9 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 z-10 mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-white leading-[1.1] lg:max-w-[550px] uppercase font-integral w-full">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full lg:w-[350px] flex flex-col gap-3.5">
            <div className="w-full h-12 bg-white rounded-full flex items-center px-4 gap-3">
              <Mail className="w-5 h-5 text-black/40" />
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-transparent outline-none w-full placeholder:text-black/40 text-black text-sm lg:text-base"
              />
            </div>
            <button className="w-full h-12 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors text-sm lg:text-base">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 border-b border-black/10 pb-12 mt-8 lg:mt-0">
          <div className="col-span-2 lg:col-span-1 lg:pr-12">
            <Link href="/" className="font-extrabold text-[28px] lg:text-[33px] mb-6 block">
              SHOP.CO
            </Link>
            <p className="text-black/60 text-sm leading-[22px] mb-8">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-white border border-black/20 flex items-center justify-center hover:bg-black text-black hover:text-white transition-colors [&_path]:fill-current">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white border border-black/20 flex items-center justify-center hover:bg-black text-black hover:text-white transition-colors [&_path]:fill-current">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white border border-black/20 flex items-center justify-center hover:bg-black text-black hover:text-white transition-colors [&_path]:fill-current">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="GitHub" className="w-7 h-7 rounded-full bg-white border border-black/20 flex items-center justify-center hover:bg-black text-black hover:text-white transition-colors [&_path]:fill-current">
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-medium tracking-[3px] text-black uppercase mb-2 text-sm lg:text-base">Company</h4>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">About</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Features</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Works</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Career</Link>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-medium tracking-[3px] text-black uppercase mb-2 text-sm lg:text-base">Help</h4>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Customer Support</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Delivery Details</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Terms & Conditions</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Privacy Policy</Link>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-medium tracking-[3px] text-black uppercase mb-2 text-sm lg:text-base">FAQ</h4>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Account</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Manage Deliveries</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Orders</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Payments</Link>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-medium tracking-[3px] text-black uppercase mb-2 text-sm lg:text-base">Resources</h4>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Free eBooks</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Development Tutorial</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">How to - Blog</Link>
            <Link href="#" className="text-black/60 hover:text-black text-sm lg:text-base">Youtube Playlist</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-black/60 text-sm xl:text-base">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2.5">
            <span className="w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.38px] flex items-center justify-center overflow-hidden">
              <Image src={visa} alt="Visa" className="w-full h-full object-contain p-1" />
            </span>
            <span className="w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.38px] flex items-center justify-center overflow-hidden">
              <Image src={mastercard} alt="Mastercard" className="w-full h-full object-contain p-1" />
            </span>
            <span className="w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.38px] flex items-center justify-center overflow-hidden">
              <Image src={paypal} alt="Paypal" className="w-full h-full object-contain p-1.5" />
            </span>
            <span className="w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.38px] flex items-center justify-center overflow-hidden">
              <Image src={applePay} alt="Apple Pay" className="w-full h-full object-contain p-1.5" />
            </span>
            <span className="w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.38px] flex items-center justify-center overflow-hidden">
              <Image src={gPay} alt="Google Pay" className="w-full h-full object-contain p-1.5" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
