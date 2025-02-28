"use client";
import gsap from "gsap";
import parse from "html-react-parser";
// import quetes from "@/public/image/Home/quetes.png";
// import Right_BT from "@/public/image/Home/Right_BT.png";
// import Left_BT from "@/public/image/Home/Left_BT.png";
// import Image from "next/image";
import {useState, useRef, useEffect } from "react";





export default function () {
    const [changeP, setChangeP] = useState(0)
    const pera = useRef()
    const word = useRef()
    const box = useRef()

    let toop
    

    useEffect(()=>{
        function timeO() {
            toop = setTimeout(() => {
                gsap.to(pera.current, { duration: 0.1, opacity: 0, ease: "bounce.inOut" })
                gsap.to(word.current, { duration: 0.1, opacity: 0, ease: "bounce.inOut" })
                
                setTimeout(()=>{
                    if (changeP === 0) {
                        setChangeP(changeP + 1)
                        
                    } else {
                        setChangeP(0)
                        
                    }
                },250)
                
            }, 3000)
        }
        setTimeout(() => {
        
        
            clearTimeout(toop)
            gsap.to(pera.current, { duration: 0.1, opacity: 1, ease: "bounce.inOut" })
            gsap.to(word.current, { duration: 0.1, opacity: 1, ease: "bounce.inOut" })
            timeO();
            
        },500)
    })

    const data = [
        "We were really impressed with how professional and responsive the team at Astraliva was. They were always there to answer our questions and help us out whenever we needed it. Their expertise in penetration testing helped us identify and address some serious security vulnerabilities ",
        "Astraliva has provided outstanding cloud solutions, enabling seamless scalability and security. Their technical expertise and proactive approach have greatly enhanced our operations, helping us achieve significant improvements in performance and efficiency",
    ]

    const data2 = [
        "OpusNexus – Sophia Joseph ","Densewave Networks- Nihal Asker"
    ]

    return (
        <div>
            <div className="scrollSettings animate-fade_left flex justify-center mt-12">
                <div  className="w-[85%]">
                    <div className="text-[2.5vw]">
                        What <span className="text-[#185BD8]">Our Clients</span> Say
                    </div>
                    <div   className="flex justify-center mt-10">
                        <div className="w-[92%] items-center relative flex justify-center">
                            <div ref={box} className="  bg-[#185BD8] p-[70px] py-[50px] w-[92%] rounded-lg">
                                <div className="flex justify-center">
                                    <p ref={pera} className="transition-opacity opacity-100  text-justify mt-8 px-4 leading-[50px] font-body   text-white text-[1.2vw]">
                                        {
                                            parse(data[changeP])
                                        }
                                    </p>
                                </div>
                                <div ref={word} className="mt-10 font-heading text-[1.6vw] text-white w-[100%] flex justify-end p-3">
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
        </div>
    )
}
