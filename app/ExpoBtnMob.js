"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ExpoBtnMob() {
    const pathName = usePathname();
    return (
        <div className="flex justify-center mt-10">
            <Link href={{
                    pathname:"/Registration",
                    query:{
                        PrePath:pathName
                    }
                }} className="bg-[#185BD8] py-4 px-6 rounded-lg font-body text-white" >Explore Solutions</Link>
        </div>
    )
}
