"use client";

import Logo from "@/public/image/Home/Main_Logo.png"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Menu() {
    if (typeof window !== "undefined") {

        document.body.style.overflowY = "auto"
    }
    useEffect(() => {
        if (screen.width >= 1280) {
            console.log("Okay");

        }
    })
    function handleOn() {
        document.getElementById("bodySec").style.display = "none";
        document.getElementById("InputSec").style.display = "block";
        console.log("Hello");

    }
    return (
        <div className="hidden  w-full p-5 py-4 xl:flex columns-2 justify-between items-center border-b-2 border-[#6161618f] bg-white"  >
            <div>
                <Link href={"/"}><Image src={Logo} alt="Logo" className="w-[35vw] sm:w-[20vw] md:w-[18vw] lg:w-[16vw] xl:w-[12vw]" /></Link>
            </div>
            <div className="hidden md:flex columns-5 justify-around 2xl:w-1/2 md:w-9/12 xl:w-2/3">
                <div className="flex font-body items-center"><Link className="opacity-75 md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1.1vw] hover:text-[#185BD8]" href={"/WhoWeAre"}>Who we are</Link></div>
                <div className="flex font-body items-center"><Link className="opacity-75 md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1.1vw] hover:text-[#185BD8]" href={
                    {
                        pathname: "/", query: {
                            info: true
                        }
                    }
                }>What we do</Link></div>
                <div className="flex font-body items-center"><Link className="opacity-75 md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1.1vw] hover:text-[#185BD8]" href={"/Blog"}>Resources</Link></div>
                {/* <div className="flex font-body items-center"><Link className="opacity-75 md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1.1vw] hover:text-[#185BD8]" href={"/"}>Events</Link></div> */}
                <div className="flex font-body items-center"><Link className="opacity-75 md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1.1vw] hover:text-[#185BD8]" href={"/carrier"}>Careers</Link></div>
                {/* <button className="bg-[#185BD8] py-3 px-14 hover:px-16 duration-150 rounded-full md:text-[1.4vw] text-white font-body" onClick={handleOn}>Get in Touch</button> */}
                <Link className="bg-[#185BD8] py-3 px-14 hover:px-16 duration-150 rounded-full md:text-[1.4vw] text-white font-body" href={"/Registration"}>Get in Touch</Link>
            </div>
        </div>
    );

}