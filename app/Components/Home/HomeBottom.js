"use client"

import Image from "next/image";
import BTN_Arrow from "@/public/image/Home_1/BTN_Arrow.png";
import EventSym from "@/public/image/Home_1/EventSymbol.png";
import EventBg from "@/public/image/Home_1/EventBG.png";
import Footer from "../Footer/Footer";
import BlogSlider from "./blogSlider";
import Link from "next/link";
import { usePathname } from "next/navigation";




export default function HomeBottom() {
  const pathName = usePathname();
  return (
    <div>
      
      <div className="flex justify-center w-full relative bg-transparent py-4 mt-28">
        <Image className="absolute h-full w-full object-fill -z-10" src={EventBg} alt="N?A" />
        <Image
          className="absolute  scale-[0.9] flex w-[300px]  h-full right-60 xl:right-80"
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
          <Link href={{
                    pathname:"/Registration",
                    query:{
                        PrePath:pathName
                    }
                }} className="hover:w-[220px] duration-150 w-[200px] flex justify-center p-3 px-10 rounded-lg mt-6 items-center bg-white">
            Get started
            <span className="ml-2">
              <Image src={BTN_Arrow} alt="N?A" />
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-52 flex justify-center">
        <div className="w-[85%] scrollSettings animate-fade">
          <div className="text-[2.5vw] mb-4">
            The Astraliva{" "}
            <span className="text-[#185BD8]">Security Library</span>
          </div>
          <div className="text-[#303030] w-full text-[1.4vw]">
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
