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
                <div className="col-span-2 md:col-span-1 flex justify-center  ">
                    <Image src={img} alt="k" className="bg-[#0858ED] w-full h-[10.5vw] rounded-md p-1 " />
                </div>
                <h1 className="text-[#0858ED] font-heading text-[4.5vw] md:text-[3vw] md:col-span-9 col-span-8 md:ml-5 flex items-center">{heading}</h1>
                <button onClick={Show} className="col-span-2 md:col-span-1 flex justify-center">
                    
                    {
                        SVisible?
                        <Image src={Arrow} alt="k" className=" rotate-180 w-full md:w-[5vw]" />
                        :
                        <Image src={Arrow} alt="k" className=" w-full md:w-[5vw]" />
                    }
                </button>

            </div>
            {
                SVisible ?
                    <p id="peraSt" className=" py-1 px-3 text-justify font-body">{pera}</p>
                    : null
            }

        </div>
    )
}
