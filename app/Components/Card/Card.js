import Image from "next/image";

import Link from "next/link";

export default function Card({image}) {
  return (
    <div className="w-[30vw] rounded-2xl border-[#F1F1F1] border-[1px]">
      <div>
        <Image src={image} alt="N?A" className="" />
      </div>
      <div className="p-5">
        <div className="mt-5 text-[2vw]">Hello Hackers</div>
        <p className="text-justify mt-6">
          In this write-up, well explore the fundamentals of game hacking using
          Assault Cube as our target. Well start by learning how to identify
          dynamic addresses for elements like health and ammo and then progress
          to finding their static counterparts. Once we have the addresses, well
          create a simple Lua script to automate value manipulation.
        </p>
        <div className="mt-9 flex justify-end">
          <Link href={"/Blog"} className="rounded-lg bg-[#185BD8] px-8 py-2 text-white">Read More</Link>
        </div>
      </div>
    </div>
  );
}
