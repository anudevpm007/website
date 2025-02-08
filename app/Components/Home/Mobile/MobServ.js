"use client";

import Image from "next/image";
import Link from "next/link";
import img0 from "@/public/image/Home/image0.png";
import dbServices from "@/app/db/dbServices";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";





export default function MobServ() {






    return (
        <div className=" py-5 bg-[#0858ED]">
            <div  className="grid grid-flow-col gap-5 scrollbar-hide overflow-scroll ">
                {
                    dbServices.map((Data, Index) => {
                        return (
                            <div key={Index} className="w-[100vw] p-3 md:px-8 md:py-5 rounded-md bg-white">
                                <div>
                                    <h1 className="text-[6vw] md:text-[4vw] lg:text-[3.5vw] font-heading text-[#0858ED]">{Data.Main}</h1>
                                    <p className="text-[3vw] md:text-[2vw] lg:text-[1.8vw] mt-4">Our experts deliver advanced application security testing, identifying critical vulnerabilities like CVEs and business logic flaws to protect your application and protect your brand's reputation.</p>

                                    <ul className="mt-4 ">
                                        {
                                            Data.content.map((data, Index) => {
                                                return (
                                                    <li className="mb-2" key={Index}>
                                                        <Link className="grid grid-cols-10 md:grid-cols-12 gap-2" href={"/" + 0 + " " + data.heading}>
                                                            <Image src={data.img} className="bg-[#0858ED] p-1 rounded-md col-span-1 " alt="Nothing" />
                                                            <p className="col-span-9 md:col-span-11 flex items-center justify-start font-heading text-[#0858ED]">{data.heading}</p>
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div >
    )
}
