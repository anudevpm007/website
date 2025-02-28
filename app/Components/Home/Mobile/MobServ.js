"use client";

import Image from "next/image";
import Link from "next/link";
import dbServices from "@/app/db/dbServices";
import parse  from "html-react-parser";





export default function MobServ() {






    return (
        <div className=" py-5 bg-[#0858ED]">
            <div  className="grid grid-flow-col scrollbar-hide overflow-scroll ">
                {
                    dbServices.map((Data, Index) => {
                        return (
                            <div key={Index} className="w-[84vw] mr-4 ml-4 p-3  md:px-8 md:py-5 rounded-md bg-white">
                                <div>
                                    <h1 className="text-[6vw] md:text-[4vw] lg:text-[3.5vw] font-heading text-[#0858ED]">{Data.Main}</h1>
                                    <p className=" text-justify tracking-tight text-[3vw] md:text-[2vw] lg:text-[1.8vw] mt-4">{parse(Data.pera)}</p>

                                    <ul className="mt-4 ">
                                        {
                                            Data.content.map((data, index) => {
                                                return (
                                                    <li className="mb-2" key={index}>
                                                        <Link className="grid grid-cols-10 md:grid-cols-12 gap-2" href={{
                                                            pathname:"/"+data.heading,
                                                            query:{
                                                                id:Index,
                                                                i:index
                                                            }
                                                        }}>
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
