import Image from "next/image"
import Link from "next/link"

export default function CardS({ img, ids,i, heading }) {
    return (
        <Link href={{
            pathname:"/"+heading,
            query:{
                id:ids,
                i:i
            }
        }} className="flex flex-col bg-white items-center p-3 rounded-lg">
            <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                <Image src={img} alt="ImageCard" />
            </div>
            <p className="text-black text-center">
                {heading}
            </p>
        </Link>
    )
}
