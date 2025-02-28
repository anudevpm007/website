"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import arrow_left from "@/public/image/Home/arrow_left.png";
import dbServices from "@/app/db/dbServices";
import CardS from "../cards/cardS";
import parse from "html-react-parser"

export default function HomeSerBox() {
    var count =0

    var [indexs,setindex] = useState(0)

    useEffect(()=>{
        
    })

    const rightInc = () => {
        if(indexs<4){
            setindex(indexs+1)
            document.getElementById("SerLeft").style.opacity = "0.55";
            document.getElementById("SerRight").style.opacity = "1";
        }
        if(indexs<3 && indexs>=0){
            console.log("In the middle");
            document.getElementById("SerLeft").style.opacity = "1";
            document.getElementById("SerRight").style.opacity = "1";
            
            
        }
    }

    const leftInc = () => {
        if(indexs>0){
            setindex(indexs-1)
            document.getElementById("SerLeft").style.opacity = "1";
            document.getElementById("SerRight").style.opacity = "0.55";
        }
        if(indexs<5 && indexs>1){
            console.log("In the middle2");
            document.getElementById("SerLeft").style.opacity = "1";
            document.getElementById("SerRight").style.opacity = "1";
            
            
        }
        
    }

    return (
        <div className=" hidden xl:block">
            <div className="flex -mt-[200px] justify-center h-fit animate-fade_left scrollSettings2 anim bg-[#185BD8] ">
                <div className="w-[85%] pt-14">
                    <div className="animate-fade_left scrollSettings">
                        <h2 className="text-[2.2vw] text-white font-[400] font-body">
                            Services
                        </h2>
                        <p className="text-white pt-2 text-[3vw] font-body">
                            Comprehensive Cybersecurity Solutions for Your Business.
                        </p>
                        <p className="text-white text-[1.2vw] font-body pt-6">
                            Protect your business with a comprehensive suite of cybersecurity
                            solutions designed to meet your unique needs and exceed your
                            expectations.
                        </p>
                    </div>
                    <div className="grid gap-24 grid-cols-12 mt-32 mb-14">
                        <div className=" col-span-5">
                            <h1 className="text-[50px] font-headingSemiBold text-white ">
                                {
                                    dbServices[indexs].Main
                                }
                            </h1>
                            <p className="mt-14 text-white font-body leading-[38px] tracking-tight text-justify">
                                {
                                    parse(dbServices[indexs].pera)
                                }
                            </p>
                            <div className="flex justify-end mt-10">
                                <div className="flex justify-center w-fit">
                                    <button onClick={leftInc}>
                                        <Image src={arrow_left} id="SerRight" className=" opacity-55 rotate-180" alt="Arrow" />
                                    </button>
                                    <button onClick={rightInc}>
                                        <Image src={arrow_left} id="SerLeft" alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="  col-span-7">
                            <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1  gap-10">
                                {
                                    
                                    
                                    (dbServices[indexs].content).map((Data, index) => {
                                        console.log(indexs);
                                        return (
                                            <CardS img={Data.img} ids={indexs} i={index} heading={Data.heading} key={index} />
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
