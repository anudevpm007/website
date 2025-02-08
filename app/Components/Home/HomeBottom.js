"use client"

import Event_img from "@/public/image/Home_1/events 1.png";
import Image from "next/image";
import BTN_Arrow from "@/public/image/Home_1/BTN_Arrow.png";
import Right_BT from "@/public/image/Home/Right_BT.png";
import Left_BT from "@/public/image/Home/Left_BT.png";
import EventSym from "@/public/image/Home_1/EventSymbol.png";
import EventBg from "@/public/image/Home_1/EventBG.png";
import Footer from "../Footer/Footer";
import BlogSlider from "./blogSlider";


function handleOn() {
  document.getElementById("bodySec").style.display = "none";
  document.getElementById("InputSec").style.display = "block";
  console.log("Hello");
  
}

export default function HomeBottom() {
  return (
    <div>
      
      <div className="scrollSettings animate-fade flex justify-center mt-24">
        <div className="w-[85%] rounded-3xl grid gap-16 grid-cols-2 bg-[#E1E1E1]">
          <Image src={Event_img} alt="N/A" />
          <div className="py-[60px] relative">
            <div className="absolute flex justify-center flex-col items-center top-0 right-0 m-6 bg-[#185BD8] px-12  rounded-lg">
              <span className="text-white mt-2">Nov</span>
              <span className="text-white text-[3.4vw] font-semibold mb-1">
                12
              </span>
            </div>
            <div className="mt-6 text-[#185BD8] font-bold text-[3.9vw]">
              Cybersecurity
              <br />
              Workshop
            </div>
            <div className="mt-8 text-[1.1vw] pr-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </div>
            <div>
              <button className="bg-[#10377F] absolute bottom-0 right-0 m-6 text-white rounded-xl mt-8 p-4 px-16">
                Click Now
              </button>
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
      <div className="flex justify-center relative bg-transparent mt-28">
        <Image className="absolute object-fill -z-10" src={EventBg} alt="N?A" />
        <Image
          className="absolute scale-90 right-80"
          src={EventSym}
          alt="N?A"
        />
        <div className="scrollSettings animate-fade_left w-[85%] ">
          <div className="text-white text-[2.2vw] mt-20 font-bold">
            Take the Next Step.{" "}
          </div>
          <div className="text-white text-[2.2vw] mt-5 font-normal">
            Get in Touch to discuss your business challenges
            <br />
            and explore our specialized solutions.
          </div>
          <button onClick={handleOn} className="flex justify-center p-3 px-10 rounded-lg mt-6 items-center bg-white">
            Get started
            <span className="ml-2">
              <Image src={BTN_Arrow} alt="N?A" />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-52 flex justify-center">
        <div className="w-[85%] scrollSettings animate-fade">
          <div className="text-[2.5vw] mb-4">
            The Astraliva{" "}
            <span className="text-[#185BD8]">Security Library</span>
          </div>
          <div className="text-[#303030] text-[1.5vw]">
            The Astraliva Security Library: Your trusted source for
            cybersecurity information. The Security Library offers a wealth of
            information on the latest threats, trends, and best practices.
          </div>
        </div>
      </div>
      <BlogSlider />
      <Footer />
    </div>
  );
}
