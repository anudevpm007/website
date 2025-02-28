"use client";

import { useEffect, useRef, useState } from "react";
var count = 0
export default function HomeCountMobile() {
    const countSec = useRef();

    const [GP, setGP] = useState(5)
    const [TC, setTC] = useState(30)
    const [CRR, setCRR] = useState(99)

    var com = [false, false, false]
    var com2 = [false, false, false]

    const Increament = () => {

        const timeOut = setTimeout(() => {
            count = count + 1
            if (count <= 5) {
                setGP(count)
            } else {
                com[0] = true
            }
            if (count <= 30) {
                setTC(count)
            } else {
                com[1] = true
            }
            if (count <= 99) {
                setCRR(count)
            } else {
                com[2] = true
            }
        }, 5)

        if (com[0] === true && com[1] === true && com[2] === true) {
            clearTimeout(timeOut)
            com = [false, false, false]
        }
    }


   

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                Increament();
            }
        }, {
            threshold: 0,
        })

        observer.observe(countSec.current)
    })
    return (
        <div ref={countSec} className="flex justify-center py-5 md:py-8 mt-4 bg-[#0858ED]">
            <div className="w-[90%] md:w-[85%]">
                <div className="grid grid-cols-12 rounded-md bg-white">
                    <div className="col-span-4 md:col-span-3 flex justify-center items-center font-heading text-[12vw] md:text-[8vw] text-[#0858ED]">{GP}+</div>
                    <div className="col-span-8 md:col-span-9 text-[4vw] md:text-[2.5vw] flex items-center font-headingSemiBold ">Global Presence</div>
                </div>
                <div className="grid grid-cols-12 mt-5 rounded-md bg-white">
                    <div className="col-span-4 md:col-span-3 flex justify-center items-center font-heading text-[12vw] md:text-[8vw] text-[#0858ED]">{TC}+</div>
                    <div className="col-span-8 md:col-span-9 text-[4vw] md:text-[2.5vw] flex items-center font-headingSemiBold ">Trusted Companies</div>
                </div>
                <div className="grid grid-cols-12 mt-5 rounded-md bg-white">
                    <div className="col-span-4 md:col-span-3 flex justify-center items-center font-heading text-[12vw] md:text-[8vw] text-[#0858ED]">{CRR}%</div>
                    <div className="col-span-8 md:col-span-9 text-[4vw] md:text-[2.5vw] flex items-center font-headingSemiBold ">Client Retention Rate</div>
                </div>
            </div>
        </div>
    )
}
