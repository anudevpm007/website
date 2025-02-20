import Image from "next/image";

import Link from "next/link";

export default function Card({image,heading,pera,index}) {
  return (
    <div className="relative w-[30vw] h-full rounded-2xl border-[#F1F1F1] border-[1px]">
      <div>
        <Image src={image} alt="N?A" className="rounded-t-2xl" />
      </div>
      <div className=" h-[350px] mb-16 p-5">
        <div className="mt-5 text-[2vw]">{heading}</div>
        <p className="overflow-hidden text-justify mt-6">
         {pera}
        </p>
      </div>
      <Link href={{
            pathname:"/Blog/"+heading,
            query:{
              Index:index
            }
          }} className="absolute bottom-3 right-4 rounded-lg  bg-[#185BD8] hover:py-3 duration-150 px-8 py-2 text-white">Read More</Link>
    </div>
  );
}
