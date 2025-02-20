import Image from "next/image";

import BlogDataCard from "@/app/db/DBCardData";
import Link from "next/link";


const MobCard = ({heading, pera, image , index }) => {
    return (
        <div className="w-[400px] md:w-[600px] lg:w-[800px]  border-[#0000006b] border-[2px] rounded-2xl md:rounded-3xl lg:rounded-[40px] ">
            <Image src={image} alt="IMage 1 Blog" className="w-full" />
            <div className="p-5 md:p-10">
                <h1 className="text-[5vw] md:text-[5.4vw] lg:text-[4.8vw] font-heading ">{heading}</h1>
                <p className="mb-12 font-body text-[3vw] md:text-[2.8vw] lg:text-[2.3vw] text-justify">{pera}</p>
                <Link href={{
            pathname:"/Blog/"+heading,
            query:{
              Index:index
            }
          }} className=" lg:rounded-lg md:rounded-md rounded-sm bg-[#185BD8] px-8 py-2 text-white">Read More</Link>
            </div>
           
        </div>
    )
}

export default function BlogSlideMobile() {
    return (
        <div>
            <div className="mt-8 mb-10 flex justify-end">
                <div className="w-[95%] scrollbar-hide grid gap-5 grid-flow-col overflow-scroll">
                    {
                        BlogDataCard.map((data,index)=>{
                            return(
                                <MobCard heading={data.Heading} image={data.img} index={index} pera={data.pera} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

