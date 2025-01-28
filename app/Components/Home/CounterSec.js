"use client"

import Image from "next/image";
import { gsap, ScrollTrigger } from "gsap/all";
import { useState } from "react";
import box_bg_img from "@/public/image/Home/why_box_bg_image.png";


var count = 0;
export default function () {
    const [GP, setGP] = useState(0);
    const [TC, setTC] = useState(0);
    const [CRR, setCRR] = useState(0);

    var clrefDe = [false, false, false];
    var clref = [false, false, false];



    const increaseCount = () => {
        const intervalCount = setInterval(() => {
            count = count + 1
            if (count <= 99) {
                setCRR(count);
            } else {
                clref[0] = true;
            }
            if (count <= 30) {
                setTC(count);
            } else {
                clref[1] = true;
            }
            if (count <= 5) {
                setGP(count);
            } else {
                clref[2] = true;
            }
        }, 70);
        if (clref[0] === true && clref[1] === true && clref[2] === true) {
            clearInterval(intervalCount)
        }
    }

    gsap.registerPlugin(ScrollTrigger)

    gsap.to({}, {
        scrollTrigger: {
            trigger: "#Triggger1",
            start: "bottom 90%",
            end: "top 10%",
            onEnter: () => {

                increaseCount();


            }
        }
    }
    )
    return (
        <div id="Triggger1" className="bg-[#185BD8] w-[100%] mt-24 flex justify-center">
            <div className="w-[90%] grid grid-cols-3">
                <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
                    <Image
                        src={box_bg_img}
                        alt="Box background"
                        className="absolute top-0 left-0"
                    />
                    <div className="text-[#185BD8] font-black text-[4vw]">{GP}+</div>
                    <div className="text-center text-[1.5vw] mt-6">Global Presence</div>
                </div>
                <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
                    <Image
                        src={box_bg_img}
                        alt="Box background"
                        className="absolute top-0 left-0"
                    />
                    <div className="text-[#185BD8] font-black text-[4vw]">{TC}+</div>
                    <div className="text-center text-[1.5vw] mt-6">
                        Trusted Companies
                    </div>
                </div>
                <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
                    <Image
                        src={box_bg_img}
                        alt="Box background"
                        className="absolute top-0 left-0"
                    />
                    <div className="text-[#185BD8] font-black text-[4vw]">{CRR}%</div>
                    <div className="text-center text-[1.5vw] mt-6">
                        Client Retention Rate
                    </div>
                </div>
            </div>
        </div>
    )
}
