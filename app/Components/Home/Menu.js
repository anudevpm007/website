import Logo from "@/public/image/Home/Main_Logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
        <div className=" p-5 py-8 flex columns-2 justify-between items-center border-b-2 border-[#6161618f] bg-transparent"  >
            <div>
                <Link href={"/"}><Image src={Logo} alt="Logo" className="w-[12vw]" /></Link>
            </div>
            <div className="flex columns-5 justify-around w-1/2">

                <div><Link className="opacity-75" href={"/"}>What we do</Link></div>
                <div><Link className="opacity-75" href={"/services"}>Resources</Link></div>
                <div><Link className="opacity-75" href={"/"}>Events</Link></div>
                <div><Link className="opacity-75" href={"/carrier"}>Careers</Link></div>
                <div><Link className="bg-blue-900 text-white pt-4 pb-4 pl-20 pr-20 rounded-full" href={"/"}>Get in touch</Link></div>
            </div>
        </div>
    );
}