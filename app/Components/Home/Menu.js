"use client";

import Logo from "@/public/image/Home/Main_Logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    function handleOn() {
        document.getElementById("bodySec").style.display = "none";
        document.getElementById("InputSec").style.display = "block";
        console.log("Hello");
        
    }
    return (
        <div className="  w-full p-5 py-4 flex columns-2 justify-between items-center border-b-2 border-[#6161618f] bg-white"  >
            <div>
                <Link href={"/"}><Image src={Logo} alt="Logo" className="w-[12vw]" /></Link>
            </div>
            <div className="flex columns-5 justify-around w-1/2">
                <div className="flex font-body items-center"><Link className="opacity-75 " href={"/WhoWeAre"}>Who we are</Link></div>
                <div className="flex font-body items-center"><Link className="opacity-75" href={"/"}>What we do</Link></div>
                <div className="flex font-body items-center"><Link className="opacity-75" href={"/Blog"}>Resources</Link></div>
                <div className="flex font-body items-center"><Link className="opacity-75" href={"/"}>Events</Link></div>
                <div className="flex font-body items-center"><Link className="opacity-75" href={"/carrier"}>Careers</Link></div>
                <button  className="bg-[#185BD8] py-3 px-14 rounded-full text-white font-body" onClick={handleOn}>Get in Touch</button>
            </div>
        </div>
    );
    
}