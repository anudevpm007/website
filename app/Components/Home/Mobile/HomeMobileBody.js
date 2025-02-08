import ExpoBtnMob from "@/app/ExpoBtnMob";
import Image from "next/image"
import PeragMobile from "./PeragMobile";
import HomeCountMobile from "./HomeCountMobile";
import StandMobile from "./StandMobile";
import BlogSlideMobile from "./BlogSlideMobile";
import MobFooter from "./MobFooter";
import MobServ from "./MobServ";



export default function HomeMobileBody() {
  return (
    <div className="xl:hidden">
      <div className=" h-[600px] flex items-center">
        <div className="top-[20%]">
          <div className="flex justify-center">
            <div className=" text-[3.6vw] lg:text-[3vw] md:text-[3.2vw] font-body flex items-center">Next-Generation </div>
            <div className=" text-[#0858ED] text-[4.4vw] font-heading ml-3 lg:text-[4vw] md:text-[4.2vw]">CYBER SECURITY</div>
          </div>
          <div className="flex justify-center text-[3.5vw] md:text-[3.1vw] lg:text-[2.7vw] font-body">
            Solutions For Your Business
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-center text-[2.5vw] md:text-[2.2vw] lg:text-[2vw] w-[85%]">
              Astraliva delivers next-generation cybersecurity solutions through customized strategies and research-oriented approach. We protect your entire digital ecosystem, from your core network to cloud infrastructure and all connected devices with proactive threat intelligence and robust security measures. Empower your business with the confidence to focus on achieving your core objectives. Explore our solutions.
            </p>
          </div>
          <ExpoBtnMob />
        </div>
      </div>
      <div id="bodySec1" className=" flex justify-center py-5 bg-[#0858ED]">
        <div className="w-[90%]">
          <h1 className="text-white text-[7vw] md:text-[5.5vw] lg:text-[5vw]">Services</h1>
          <h2 className="text-white text-[4vw] md:text-[3.5vw] lg:text-[3vw] mt-5">Comprehensive Cybersecurity Solutions for Your Business.</h2>
          <p className="text-white text-[3vw] md:text-[2.5vw] lg:text-[2vw] mt-5">Protect your business with a comprehensive suite of cybersecurity solutions designed to meet your unique needs and exceed your expectations.</p>
        </div>
      </div>

      <MobServ />

      <div className="flex justify-center">
        <div className="w-[90%]">
          <div>
            <div className="font-body text-[5vw] md:text-[4vw] lg:text-[3vw] mt-6">Why <span className="text-[#0858ED] font-heading">ASTRALIVA</span> Stands Outs </div>
            <p className="mt-4 text-[3vw] md:text-[1.9vw] lg:text-[1.6vw] text-center">Astraliva delivers comprehensive cybersecurity solutions designed for your unique needs and customized to perfectly fit your business.</p>
          </div>
          <StandMobile />
        </div>
      </div>
      <HomeCountMobile />
      <PeragMobile />
      <div className="flex justify-center">
        <div className="w-[90%]">
          <h1 className="font-body mt-8 text-[5vw] md:text-[4vw] lg:text-[3vw] ">The Astraliva <span className="text-[#0858ED] font-heading">Security Library</span></h1>
          <p className="font-body mt-4 text-[3.5vw] md:text-[1.9vw]">The Astraliva Security Library: Your trusted source for cybersecurity information. The Security Library offers a wealth of information on the latest threats, trends, and best practices.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%]"></div>
      </div>
      <BlogSlideMobile />
      <MobFooter />
    </div>
  )
}
