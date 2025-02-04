"use client";

export default function HomeCountMobile() {
    return (
        <div className="flex justify-center py-5 mt-4 bg-[#0858ED]">
            <div className="w-[90%]">
                <div className="grid grid-cols-12 mt-5 rounded-md bg-white">
                    <div className="col-span-4 flex justify-center items-center font-heading text-[12vw] text-[#0858ED]">5+</div>
                    <div className="col-span-8 flex items-center font-headingSemiBold ">Global Presence</div>
                </div>
                <div className="grid grid-cols-12 mt-5 rounded-md bg-white">
                    <div className="col-span-4 flex justify-center items-center font-heading text-[12vw] text-[#0858ED]">30+</div>
                    <div className="col-span-8 flex items-center font-headingSemiBold ">Trusted Companies</div>
                </div>
                <div className="grid grid-cols-12 mt-5 rounded-md bg-white">
                    <div className="col-span-4 flex justify-center items-center font-heading text-[12vw] text-[#0858ED]">99%</div>
                    <div className="col-span-8 flex items-center font-headingSemiBold ">Client Retention Rate</div>
                </div>
            </div>
        </div>
    )
}
