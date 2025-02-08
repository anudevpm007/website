"use client";
import { redirect } from "next/navigation";

import Logo from "@/public/image/Home/Main_Logo.png"
import Menu_bar from "@/public/image/MoMenuImage/menu-bar.png"
import Menu_cross from "@/public/image/MoMenuImage/menu-cross.png"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileMenu() {
    var i = 0
    const [isClien, setIsClient] = useState(false)

    var Iclose = true


    if (typeof window !== "undefined") {
        var inHandle = document.getElementById("handle")
        if (inHandle) {
            inHandle.addEventListener("click", handleOn)
        }
        if (i === 1 && Iclose === false) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto"
            console.log("hidden");
            
        }

    }



    const close = () => {
        Iclose = true
        if (i === 1) {
            i = 0
            console.log(i);

        }
        document.getElementById("MenuPart").style.display = "none"
        document.body.style.overflowY = "auto"
    }

    const open = () => {
        Iclose = false
        if (i === 0) {
            i = 1
            console.log(i);

        }
        document.body.style.overflowY = "hidden"
        document.getElementById("MenuPart").style.display = "flex"
    }

    // const closeWha = () => {
    //     Iclose = true
    //     if (i === 1) {
    //         i = 0
    //         console.log(i);

    //     }
    //     document.getElementById("MenuPart").style.display = "none"
    //     document.body.style.overflowY = "auto"
    //     redirect("/?info=true");
    // }


    useEffect(() => {
        setIsClient(true)
    }, [])

    return (

        <div className=" block xl:hidden h-20 relative">
            <div className="absolute h-20  flex w-full  p-5 py-4 xl:hidden columns-2 justify-between items-center border-b-2 border-[#6161618f] bg-white"  >
                <div>
                    <Link href={"/"}><Image src={Logo} alt="Logo" className="w-[35vw] sm:w-[20vw] md:w-[18vw] lg:w-[16vw] xl:w-[12vw]" /></Link>
                </div>
                <div>
                    <button onClick={open}>
                        <Image src={Menu_bar} className="w-[8vw] h-[6vw]" alt="Menu bar image" />
                    </button>
                </div>

            </div>
            <div id="MenuPart" className=" absolute w-full z-20 hidden justify-end h-screen backdrop-blur-sm bg-[#000000b0]">
                <button className="sm:w-[50%] w-[35%] h-screen " onClick={close} >

                </button>
                <div className="px-4 py-4 w-3/4 md:w-1/2 lg:w-[40%] duration-75 h-full bg-white">

                    <div className="flex flex-col justify-between h-1/2 mt-5 ml-4">
                        <div className="flex text-[4.2vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] font-body items-center"><Link className="opacity-75  hover:text-[#185BD8] duration-150 hover:ml-1 " href={"/WhoWeAre"}>Who we are</Link></div>
                        <div className="flex text-[4.2vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] font-body items-center"><Link className="opacity-75  hover:text-[#185BD8] duration-150 hover:ml-1" href={"/?info=false"}>What we do</Link></div>
                        <div className="flex text-[4.2vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] font-body items-center"><Link className="opacity-75  hover:text-[#185BD8] duration-150 hover:ml-1" href={"/Blog"}>Resources</Link></div>
                        {/* <div className="flex text-[4.2vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] font-body items-center"><Link className="opacity-75  hover:text-[#185BD8] duration-150 hover:ml-1" href={"/"}>Events</Link></div> */}
                        <div className="flex text-[4.2vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] font-body items-center"><Link className="opacity-75  hover:text-[#185BD8] duration-150 hover:ml-1" href={"/carrier"}>Careers</Link></div>

                        <div>
                            <Link href={"/Registration"} className="bg-[#185BD8] text-[4.2vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] flex justify-start py-3 px-14 hover:px-16 duration-150 rounded-full text-white font-body">Get in Touch</Link>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
