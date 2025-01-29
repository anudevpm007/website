"use client";
import { useState } from "react";
import Image from "next/image";
import arrow_left from "@/public/image/Home/arrow_left.png";
import dbServices from "@/app/db/dbServices";
import CardS from "../cards/cardS";

export default function HomeSerBox() {
    
    const [Index,setIndex] = useState(0);

    const rightInc=()=>{
        if(Index<=2 && Index>=1){
            document.getElementById("SerLeft").style.opacity = "0.55";
            document.getElementById("SerRight").style.opacity = "1";
        }
        if(Index<2 && Index>=0){
            setIndex(Index+1);
            
        }
        
        console.log("Index Value",Index)
    }

    const leftInc=()=>{
        console.log("Index Value",Index)

        if(Index<=1 && Index>=0){
            document.getElementById("SerRight").style.opacity = "0.55";
            document.getElementById("SerLeft").style.opacity = "1";
        }
        if(Index<3 && Index>=1){
            setIndex(Index-1);
            console.log("Index Value",Index)
        }
    }

    return (
        <div >
            <div className="flex -mt-[200px] justify-center h-fit animate-fade_left scrollSettings2 anim bg-[#185BD8] ">
                <div  className="w-[85%] pt-14">
                    <div className="animate-fade_left scrollSettings">
                        <h2 className="text-[2.2vw] text-white font-[400] font-sans">
                            Services
                        </h2>
                        <p className="text-white pt-2 text-[3vw] font-thin">
                            Comprehensive Cybersecurity Solutions for Your Business.
                        </p>
                        <p className="text-white text-[1.2vw] pt-6">
                            Protect your business with a comprehensive suite of cybersecurity
                            solutions designed to meet your unique needs and exceed your
                            expectations.
                        </p>
                    </div>
                    <div className="grid gap-24 grid-cols-12 mt-32 mb-14">
                        <div className=" col-span-5">
                            <h1 className="text-[50px] font-medium text-white ">
                            {
                                dbServices[Index].Main
                            }
                            </h1>
                            <p className="mt-14 text-white leading-[38px] text-justify">
                                Our experts deliver advanced application security testing,
                                identifying critical vulnerabilities like CVEs and business
                                logic flaws to protect your application and protect your
                                brand's reputation
                            </p>
                            <div className="flex justify-end mt-10">
                                <div className="flex justify-center w-fit">
                                    <button onClick={leftInc}>
                                        <Image src={arrow_left} id="SerRight"  className=" opacity-55 rotate-180" alt="Arrow" />
                                    </button>
                                    <button onClick={rightInc}>
                                        <Image src={arrow_left} id="SerLeft" alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="  col-span-7">
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    (dbServices[Index].content).map((Data, index) => {
                                        return (
                                            <CardS img={Data.img} id={2} heading={Data.heading} key={index} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
