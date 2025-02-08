import Link from "next/link"

export default function ExpoBtnMob() {
    return (
        <div className="flex justify-center mt-10">
            <Link href={"/Registration"} className="bg-[#185BD8] py-4 px-6 rounded-lg font-body text-white" >Explore Solutions</Link>
        </div>
    )
}
