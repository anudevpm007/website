import Menu from "./Components/Home/Menu";
import Image from "next/image";
import Header_img from "@/public/image/Home/banner_main.jpg";
import Link from "next/link";
import HomeSerBox from "./Components/Home/HomeSerBox";
import img0_0 from "@/public/image/Home/image0_0.png";
import img0_1 from "@/public/image/Home/image0_1.png";
import img0_2 from "@/public/image/Home/image0_2.png";
import img0_3 from "@/public/image/Home/image0_3.png";
import img0_4 from "@/public/image/Home/image0_4.png";
import img0_5 from "@/public/image/Home/image0_5.png";
import box_bg_img from "@/public/image/Home/why_box_bg_image.png";
import quetes from "@/public/image/Home/quetes.png";
import Right_BT from "@/public/image/Home/Right_BT.png";
import Left_BT from "@/public/image/Home/Left_BT.png";
import HomeBottom from "./Components/Home/HomeBottom";

import CounterSec from "./Components/Home/CounterSec";
import GetInTouch from "./Components/GetInTouch/GetInTouch";







export default function Home() {
  return (
    <div className="over relative">
      <GetInTouch />
      <Menu />
      <div className="relative h-[100%]">
        <div className="absolute top-[20%]">
          <div className="grid grid-cols-10 gap-2">
            <div className="flex justify-end items-center text-[2.5vw] col-span-4 font-body">Next-Generation </div>
            <div className="font-heading text-[5vw] col-span-6 text-[#0858ED]">CYBER SECURITY</div>
          </div>
          <div className="flex justify-center text-[2.5vw] font-body">
            Solutions For Your Business
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-center w-[80%]">
              Astraliva delivers next-generation cybersecurity solutions through customized strategies and research-oriented approach. We protect your entire digital ecosystem, from your core network to cloud infrastructure and all connected devices with proactive threat intelligence and robust security measures. Empower your business with the confidence to focus on achieving your core objectives. Explore our solutions.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Link className="bg-[#185BD8] py-4 px-6 rounded-lg font-body text-white" href={"/"}>Explore Solutions</Link>
          </div>
        </div>
        <Image src={Header_img} className="" alt="Header Image" />
      </div>
      <div id="bodySec">
        <HomeSerBox/>
        <div className="flex justify-center mt-20">
          <div className="w-[85%] ">
            <div className="scrollSettings animate-fade_left text-[2.2vw]">
              Why <span className="text-[#185BD8] font-[600]">ASTRALIVA</span>{" "}
              Stands Outs
            </div>
            <div className="text-[1.2vw] scrollSettings animate-fade_left mt-5">
              Astraliva delivers comprehensive cybersecurity solutions designed
              for your unique needs and customized to perfectly fit your business.
            </div>
            <div className="scrollSettings animate-fade grid gap-10 grid-cols-3 mt-20 ">
              <div className="flex justify-center">
                <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={img0_0} alt="Nothing" />
                  </div>
                  <div className="text-[1.5vw] mb-5">To Your Business Needs</div>
                  <p>
                    We understand your specific security challenges and customize
                    our testing approach to fit your business perfectly
                  </p>
                </div>
              </div>
              <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                <Image
                  src={box_bg_img}
                  alt="Nothing"
                  className="absolute w-[100%] top-0 left-0 rounded-xl"
                />
                <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                  <Image src={img0_1} className="w-10" alt="Nothing" />
                </div>
                <div className="text-[1.5vw] mb-5">Expert Security Teams</div>
                <p>
                  Our team of experience cybersecurity professionals combines
                  years of expertise with the latest industry insights to ensure
                  your application remains secure
                </p>
              </div>
              <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                <Image
                  src={box_bg_img}
                  alt="Nothing"
                  className="absolute w-[100%] top-0 left-0 rounded-xl"
                />
                <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                  <Image className="w-10" src={img0_2} alt="Nothing" />
                </div>
                <div className="text-[1.5vw] mb-5">Next Gen Security</div>
                <p>
                  Our security professionals use advanced techniques and thorough
                  research to uncover hidden vulnerabilities, including CVEs,
                  business logic flaws, and sophisticated attack strategies
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={img0_3} alt="Nothing" />
                  </div>
                  <div className="text-[1.5vw] mb-5">To Your Business Needs</div>
                  <p>
                    We understand your specific security challenges and customize
                    our testing approach to fit your business perfectly
                  </p>
                </div>
              </div>
              <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                <Image
                  src={box_bg_img}
                  alt="Nothing"
                  className="absolute w-[100%] top-0 left-0 rounded-xl"
                />
                <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                  <Image className="w-10" src={img0_4} alt="Nothing" />
                </div>
                <div className="text-[1.5vw] mb-5">Expert Security Teams</div>
                <p>
                  Our team of experience cybersecurity professionals combines
                  years of expertise with the latest industry insights to ensure
                  your application remains secure
                </p>
              </div>
              <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                <Image
                  src={box_bg_img}
                  alt="Nothing"
                  className="absolute w-[100%] top-0 left-0 rounded-xl"
                />
                <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                  <Image className="w-10" src={img0_5} alt="Nothing" />
                </div>
                <div className="text-[1.5vw] mb-5">Next Gen Security</div>
                <p>
                  Our security professionals use advanced techniques and thorough
                  research to uncover hidden vulnerabilities, including CVEs,
                  business logic flaws, and sophisticated attack strategies
                </p>
              </div>
            </div>
          </div>
        </div>
        <CounterSec />
        <div className="flex justify-center mt-12">
          <div className="w-[85%]">
            <div className="text-[2.5vw]">
              What <span className="text-[#185BD8]">Our Clients</span> Say
            </div>
            <div className="flex justify-center mt-10">
              <div className="w-[92%] items-center relative flex justify-center">
                <div className=" bg-[#185BD8] p-[70px] py-[50px] w-[92%] rounded-lg">
                  <div className="flex justify-center">
                    <span>
                      <Image className="w-[10vw]" src={quetes} alt="N?A" />
                    </span>
                    <p className="text-justify mt-8 px-4 leading-[50px]  text-white text-[1.3vw]">
                      We were really impressed with how professional and
                      responsive the team at Astraliva was. They were always there
                      to answer our questions and help us out whenever we needed
                      it. Their expertise in penetration testing helped us
                      identify and address some serious security vulnerabilities
                      --{" "}
                      <span>
                        OpusNexus{" "}
                        <Image
                          className=" mt-3 float-right ml-4 w-[3.1vw] rotate-180"
                          src={quetes}
                          alt="Nothing"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="mt-10 text-[1.6vw] text-white w-[100%] flex justify-end p-3">
                    Sophia Joseph ( Director)
                  </div>
                </div>
                <div className=" absolute  bg-[#185BD833]  w-[98%] h-[80%] -z-10 rounded-lg"></div>
                <div className="flex absolute justify-center  h-[90%] bg-[#185BD880] -z-20  w-[95%] rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-[90%] mt-10">
          <button className=" bg-white p-1 ml-1 rounded-md border-[#00000080] border-[1px] flex justify-center items-center">
            <Image src={Left_BT} alt="Botton" />
          </button>
          <button className="bg-[#185BD8] p-1 ml-1 rounded-md flex justify-center items-center">
            <Image src={Right_BT} alt="Botton" />
          </button>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="w-[85%]">
            <div className="text-[1.8vw] mb-4 mt-28">
              Astraliva Security <span className="text-[#185BD8]">Summits & Webinars</span>
            </div>
            <div className="text-[1.2vw]">
              Join the Astraliva community. Learn, connect, and grow with industry
              leaders at our Security Summits & Webinars.
            </div>
          </div>
        </div>
        <HomeBottom />
      </div>
    </div>
  );
}
