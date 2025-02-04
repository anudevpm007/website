"use client";
import Image from "next/image";
import Arrow from "@/public/image/MobileHomebody/Arrow_b.png"
import img1 from "@/public/image/Home/image1.png";

export default function StandMobile() {
    return (
        <div className="grid grid-cols-1 mt-6">
            <div className="border-[#00000086] rounded-md  p-5 border-[1px] grid grid-cols-12">
                <Image src={img1} alt="k" className="bg-[#0858ED] rounded-md p-1 col-span-2" />
                <h1 className="text-[#0858ED] font-heading text-[4.5vw] col-span-9 flex items-center">To Your Business Needs</h1>
                <Image src={Arrow} alt="k" className=" w-[7vw] col-span-1" />
                {/* <p >We understand your specific security challenges and customize our testing approach to fit your
                business perfectly</p> */}
            </div>
        </div>
    )
}
