"use client"

import Image from "next/image";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import box_bg_img from "@/public/image/Home/why_box_bg_image.png";

export default function () {
    return (
        <div className="bg-[#185BD8] w-[100%] mt-24 flex justify-center">
            <div className="w-[90%] grid grid-cols-3">
                <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
                    <Image
                        src={box_bg_img}
                        alt="Box background"
                        className="absolute top-0 left-0"
                    />
                    <div className="text-[#185BD8] font-black text-[4vw]">5+</div>
                    <div className="text-center text-[1.5vw] mt-6">Global Presence</div>
                </div>
                <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
                    <Image
                        src={box_bg_img}
                        alt="Box background"
                        className="absolute top-0 left-0"
                    />
                    <div className="text-[#185BD8] font-black text-[4vw]">30+</div>
                    <div className="text-center text-[1.5vw] mt-6">
                        Trusted Companies
                    </div>
                </div>
                <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
                    <Image
                        src={box_bg_img}
                        alt="Box background"
                        className="absolute top-0 left-0"
                    />
                    <div className="text-[#185BD8] font-black text-[4vw]">99%</div>
                    <div className="text-center text-[1.5vw] mt-6">
                        Client Retention Rate
                    </div>
                </div>
            </div>
        </div>
    )
}
