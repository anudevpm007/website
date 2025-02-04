"use client";

import quetes from "@/public/image/Home/quetes.png";
import Right_BT from "@/public/image/Home/Right_BT.png";
import Left_BT from "@/public/image/Home/Left_BT.png";
import Image from "next/image";
import { useState } from "react";





export default function () {
    const [changeP, setChangeP] = useState(0)

    const Change = () =>{
        if(changeP===0){
            setChangeP(1);
        }else{
            setChangeP(0);
        }
    }

    const data = [
        "We were really impressed with how professional and responsive the team at Astraliva was. They were always there to answer our questions and help us out whenever we needed it. Their expertise in penetration testing helped us identify and address some serious security vulnerabilities --OpusNexus",
        "Astraliva has provided outstanding cloud solutions, enabling seamless scalability and security. Their technical expertise and proactive approach have greatly enhanced our operations, helping us achieve significant improvements in performance and efficiency",
    ]

    return (
        <div>
            <div className="scrollSettings animate-fade_left flex justify-center mt-12">
                <div className="w-[85%]">
                    <div className="text-[2.5vw]">
                        What <span className="text-[#185BD8]">Our Clients</span> Say
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-[92%] items-center relative flex justify-center">
                            <div className=" bg-[#185BD8] p-[70px] py-[50px] w-[92%] rounded-lg">
                                <div className="flex justify-center">
                                    <span>
                                        <Image className="w-[10vw]" src={quetes} alt="N?A" />
                                    </span>
                                    <p className="text-justify mt-8 px-4 leading-[50px]  text-white text-[1.3vw]">
                                        {
                                            
                                            
                                            data[changeP]
                                        }
                                        <span>

                                            <Image
                                                className=" mt-3 float-right ml-4 w-[3.1vw] rotate-180"
                                                src={quetes}
                                                alt="Nothing"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-10 text-[1.6vw] text-white w-[100%] flex justify-end p-3">
                                    Sophia Joseph ( Director)
                                </div>
                            </div>
                            <div className=" absolute  bg-[#185BD833]  w-[98%] h-[80%] -z-10 rounded-lg"></div>
                            <div className="flex absolute justify-center  h-[90%] bg-[#185BD880] -z-20  w-[95%] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollSettings animate-fade flex justify-end w-[90%] mt-10">
                <button onClick={Change} className=" bg-white p-1 ml-1 rounded-md border-[#00000080] border-[1px] flex justify-center items-center">
                    <Image src={Left_BT} alt="Botton" />
                </button>
                <button onClick={Change} className="bg-[#185BD8] p-1 ml-1 rounded-md flex justify-center items-center">
                    <Image src={Right_BT} alt="Botton" />
                </button>
            </div>
        </div>
    )
}
