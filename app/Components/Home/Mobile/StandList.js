"use client";
import Image from "next/image";
import { useState } from "react";
import Arrow from "@/public/image/MobileHomebody/Arrow_b.png"


export default function StandList({ heading, pera, img }) {
    const [SVisible, setSVisible] = useState(false);
    const [rotate, setRotate] = useState("rotate(0deg)");

    const Show = () => {
        if (SVisible) {
            setSVisible(false)
            setRotate("rotate(0deg)")
           
        } else {

            setSVisible(true)
            setRotate("rotate(180deg)")
        }
        console.log(SVisible);

    };
    return (
        <div className="border-[#00000081] rounded-md border-[1px] mb-2">
            <div className=" gap-4   p-5  grid grid-cols-12">
                <div className="col-span-2 md:col-span-1 flex justify-center items-center  ">
                    <Image src={img} alt="k" className="bg-[#0858ED] w-full h-[10.5vw] sm:h-[7vw] sm:w-[8.5vw] md:h-[6vw] rounded-md p-1 " />
                </div>
                <h1 className="text-[#0858ED] font-heading text-[3vw] md:text-[2.5vw] md:col-span-9 col-span-8 md:ml-5 flex items-center">{heading}</h1>
                <button onClick={Show} className="col-span-2 md:col-span-1 flex items-center justify-center">
                    
                    {
                        SVisible?
                        <Image src={Arrow} alt="k" className=" rotate-180 w-full md:h-[5vw] md:w-[5vw] sm:w-[6vw] sm:h-[6vw]" />
                        :
                        <Image src={Arrow} alt="k" className=" w-full md:h-[5vw] md:w-[5vw] sm:w-[6vw] sm:h-[6vw]" />
                    }
                </button>

            </div>
            {
                SVisible ?
                    <div className="flex justify-center">
                        <p id="peraSt" className=" py-1 px-3 tracking-tight text-justify w-[90%] font-body">{pera}</p>
                    </div>
                    : null
            }

        </div>
    )
}
