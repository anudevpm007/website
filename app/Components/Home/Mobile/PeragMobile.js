"use client";

import quetes from "@/public/image/Home/quetes.png";
import Right_BT from "@/public/image/Home/Right_BT.png";
import Left_BT from "@/public/image/Home/Left_BT.png";
import EleBg from "@/public/image/MobileHomebody/Mask_group.png"
import BtnArrow from "@/public/image/MobileHomebody/BtnArrow.png"
import Shild from "@/public/image/MobileHomebody/Shild.png"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";





export default function PeragMobile() {
    const [changeP, setChangeP] = useState(0)

    const Change = () => {
        if (changeP === 0) {
            setChangeP(1);
        } else {
            setChangeP(0);
        }
    }

    const data = [
        "We were really impressed with how professional and responsive the team at Astraliva was. They were always there to answer our questions and help us out whenever we needed it. Their expertise in penetration testing helped us identify and address some serious security vulnerabilities --OpusNexus",
        "Astraliva has provided outstanding cloud solutions, enabling seamless scalability and security. Their technical expertise and proactive approach have greatly enhanced our operations, helping us achieve significant improvements in performance and efficiency",
    ]
    const data2 = [
        "Sophia Joseph ( Director)","Densewave Networks- Nihal Asker"
    ]

    return (
        <div>
            <div className=" flex justify-center mt-10">
                <div className="w-[90%]">
                    <div className="text-[5vw] md:text-[4vw] lg:text-[3vw]">
                        What <span className="text-[#185BD8] font-heading">Our Clients</span> Say
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-[100%] items-center relative flex justify-center">
                            <div className=" bg-[#185BD8] p-[20px] py-[15px] w-[92%] rounded-lg">
                                <div className="flex justify-center">
                                    <span>
                                        <Image className="w-[20vw]" src={quetes} alt="N?A" />
                                    </span>
                                    <p className="text-justify mt-8 px-4  text-white text-[2.3vw] md:text-[2vw] lg:text-[1.8vw]">
                                        {


                                            data[changeP]
                                        }
                                        <span>

                                            <Image
                                                className=" mt-3 float-right ml-4 w-[4vw] rotate-180"
                                                src={quetes}
                                                alt="Nothing"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-5 text-[2vw] text-white w-[100%] flex justify-end p-3">
                                    {
                                        data2[changeP]
                                    }
                                </div>
                            </div>
                            <div className=" absolute  bg-[#185BD833]  w-[98%] h-[80%] -z-10 rounded-lg"></div>
                            <div className="flex absolute justify-center  h-[90%] bg-[#185BD880] -z-20  w-[95%] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-end w-[90%] mt-5">
                <button onClick={Change} className=" bg-white p-1 ml-1 rounded-md border-[#00000080] border-[1px] flex justify-center items-center">
                    <Image src={Left_BT} alt="Botton" />
                </button>
                <button onClick={Change} className="bg-[#185BD8] p-1 ml-1 rounded-md flex justify-center items-center">
                    <Image src={Right_BT} alt="Botton" />
                </button>
            </div>

            <div className=" mt-5 flex justify-center relative ">
                <Image src={EleBg} className="w-full md:hidden" alt="Back Ground IMage" />
                <div className="flex justify-center absolute md:relative md:bg-[#185BD8] md:py-10 w-full">
                    <div className="w-[80%]">
                        <div className="flex justify-center">
                            <Image className="md:hidden" src={Shild} alt="Shild Image" />
                        </div>
                        <h1 className="flex justify-center font-heading text-white text-[6.4vw] md:text-[6vw]">Take the Next Step. </h1>
                        <p className="flex justify-center  text-white text-[4.5vw] md:text-[4vw] text-center mt-4" >Get in Touch to discuss your business
                            challenges and explore our
                            specialized solutions.</p>
                        <div className="flex justify-center">
                            <Link href={"/Registration"} className="bg-white rounded-md mt-4 w-fit px-4 py-2 flex items-center justify-center">
                                Get started
                                <Image src={BtnArrow} className="ml-2 " alt="Btn Arrow Image" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
