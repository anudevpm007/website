import Image from "next/image";
import Bimg1 from "@/public/image/Blog_images/img_1.png";
import Bimg2 from "@/public/image/Blog_images/img_2.png";
import Bimg3 from "@/public/image/Blog_images/img_3.png";


const MobCard = () => {
    return (
        <div className="w-[400px] md:w-[600px] lg:w-[800px]  border-[#0000006b] border-[2px] rounded-2xl md:rounded-3xl lg:rounded-[40px] ">
            <Image src={Bimg1} alt="IMage 1 Blog" className="w-full" />
            <div className="p-5 md:p-10">
                <h1 className="text-[6vw] md:text-[5.4vw] lg:text-[4.8vw] font-heading ">Hello Hackers</h1>
                <p className="font-body text-[3.4vw] md:text-[2.8vw] lg:text-[2.3vw] text-justify">In this write-up, well explore the fundamentals of game hacking using Assault Cube as our target. Well start by learning how to identify dynamic addresses for elements like health and ammo and then progress to finding their static counterparts. Once we have the addresses, well create a simple Lua script to automate value manipulation.</p>
            </div>
        </div>
    )
}

export default function BlogSlideMobile() {
    return (
        <div>
            <div className="mt-8 mb-10 flex justify-end">
                <div className="w-[95%] scrollbar-hide grid gap-5 grid-flow-col overflow-scroll">

                    <MobCard/>
                    <MobCard/>
                    <MobCard/>
                    <MobCard/>
                    <MobCard/>

                </div>
            </div>
        </div>
    )
}

