import Link from "next/link"
import Image from "next/image"
import BagIcon from "@/public/image/carrier/ListIcon/BagIcon.png";
import CaleIcon from "@/public/image/carrier/ListIcon/cale.png";
import NoteIcon from "@/public/image/carrier/NoteIcon.png";
import Location from "@/public/image/carrier/ListIcon/Location.png";

export default function Open({heading,year,loc,day,id}) {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-12 md:gap-5 gap-2 py-5 rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="col-span-2 flex items-center justify-center">
                    <div className="bg-[#185BD8] rounded-xl w-[10vw] md:w-[7vw] h-[10vw] md:h-[7vw] flex justify-center items-center">
                        <Image className="w-[80%]" src={NoteIcon} alt="N?A" />
                    </div>
                </div>
                <div className="md:col-span-7 col-span-5">
                    <div>
                        <div className="text-[3vw] md:text-[1.8vw] font-bold">
                            {heading}
                        </div>
                        <div className="md:grid grid-cols-3 w-[60%] pr-3 md:mt-5 mt-1">
                            <div className="flex items-center p-0 -ml-1">
                                <Image
                                    src={BagIcon}
                                    className=" m-0 p-0 w-[15%] sm:w-[15%] md:w-1/4"
                                    alt="N?A"
                                />
                                <div className="text-[3vw] md:text-[20px] font-body"> {year}</div>
                            </div>
                            <div className="hidden md:flex items-center">
                                <Image
                                    src={Location}
                                    className=" m-0 p-0 w-[15%] sm:w-[15%] md:w-1/4"
                                    alt="N?A"
                                />
                                <div className="text-[3vw] md:text-[20px] font-body">{loc}</div>
                            </div>
                            <div className="hidden md:flex items-center">
                                <Image
                                    src={CaleIcon}
                                    className=" m-0 mr-2 p-0 w-[15%] sm:w-[15%] md:w-[20%]"
                                    alt="N?A"
                                />
                                <div className="text-[3vw] md:text-[20px] font-body">{day}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 md:col-span-3 flex justify-center items-center">
                    <Link href={"/carrier/"+id} className="bg-[#185BD8] md:px-14 px-10 py-3 md:text-[1.4vw] text-[2.4vw] font-semibold text-white rounded-md">
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    )
}
