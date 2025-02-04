import ExpoBtn from "@/app/ExpoBtn"
import Image from "next/image"
import PeragMobile from "./PeragMobile";
import HomeCountMobile from "./HomeCountMobile";
import StandMobile from "./StandMobile";
import img0 from "@/public/image/Home/image0.png";
import img1 from "@/public/image/Home/image1.png";
import img2 from "@/public/image/Home/image2.png";
import img3 from "@/public/image/Home/image3.png";
import img4 from "@/public/image/Home/image4.png";
import img5 from "@/public/image/Home/image5.png";

export default function HomeMobileBody() {
  return (
    <div>
      <div className=" h-[600px] flex items-center">
        <div className="top-[20%]">
          <div className="grid grid-cols-10 gap-2">
            <div className="flex justify-end items-center text-[3.5vw] col-span-4 font-body">Next-Generation </div>
            <div className="font-heading text-[6vw] col-span-6 text-[#0858ED]">CYBER SECURITY</div>
          </div>
          <div className="flex justify-center text-[3.5vw] font-body">
            Solutions For Your Business
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-center text-[2.5vw] w-[85%]">
              Astraliva delivers next-generation cybersecurity solutions through customized strategies and research-oriented approach. We protect your entire digital ecosystem, from your core network to cloud infrastructure and all connected devices with proactive threat intelligence and robust security measures. Empower your business with the confidence to focus on achieving your core objectives. Explore our solutions.
            </p>
          </div>
          <ExpoBtn />
        </div>
      </div>
      <div className=" flex justify-center py-5 bg-[#0858ED]">
        <div className="w-[90%]">
          <h1 className="text-white text-[7vw]">Services</h1>
          <h2 className="text-white text-[4vw] mt-5">Comprehensive Cybersecurity Solutions for Your Business.</h2>
          <p className="text-white text-[3vw] mt-5">Protect your business with a comprehensive suite of cybersecurity solutions designed to meet your unique needs and exceed your expectations.</p>
        </div>
      </div>
      <div className=" flex justify-center py-5 bg-[#0858ED]">
        <div className="w-[90%] p-3 rounded-md bg-white">
          <div>
            <h1 className="text-[6vw] font-heading text-[#0858ED]">Application Security</h1>
            <p className="text-[3vw] mt-4">Our experts deliver advanced application security testing, identifying critical vulnerabilities like CVEs and business logic flaws to protect your application and protect your brand's reputation.</p>

            <ul className="mt-4 ">
              <li >
                <div className="grid grid-cols-10 gap-2">
                  <Image src={img0} className="bg-[#0858ED] p-1 rounded-md col-span-1 " alt="Nothing" />
                  <p className="col-span-9 flex items-center font-heading text-[#0858ED]">Web Application Security Testing</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%]">
          <div>
            <div className="font-body text-[5vw] mt-6">Why <span className="text-[#0858ED] font-heading">ASTRALIVA</span> Stands Outs </div>
            <p className="mt-4 text-center">Astraliva delivers comprehensive cybersecurity solutions designed for your unique needs and customized to perfectly fit your business.</p>
          </div>
          <StandMobile/>
        </div>
      </div>
      <HomeCountMobile/>
      <PeragMobile/>
    </div>
  )
}
