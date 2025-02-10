"use client"
import BTN_Arrow from "@/public/image/Home_1/BTN_Arrow.png";
import Image from "next/image";
import Link from "next/link";

export default function GetBtn() {

    function handleOn() {
        document.getElementById("bodySec").style.display = "none";
        document.getElementById("InputSec").style.display = "block";
        console.log("Hello");

    }

    return (

        <Link href={"/Registration"} className="flex justify-center p-3 px-10 w-[250px] rounded-lg mt-6 items-center bg-white">
            Get started
            <span className="ml-2">
                <Image src={BTN_Arrow} alt="N?A" />
            </span>
        </Link>
    )
}
