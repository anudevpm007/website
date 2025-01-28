"use client";


export default function GetInTouch() {
    function handle() {
        document.getElementById("bodySec").style.display = "block";
        document.getElementById("InputSec").style.display = "none";
    }
    return (
        <div id="InputSec" className=" hidden absolute backdrop-blur-sm z-10  bg-[rgba(0,0,0,0.5)] h-[1200px] w-full ">
            <div className="w-full h-screen flex justify-center  relative">
                <button className=" w-full h-full " onClick={handle}></button>
                <div className="absolute z-[1] flex justify-center w-[55%] py-14 rounded-xl bg-white mt-10">
                    <div className="w-[80%]">
                        <div className=" text-[2vw] font-headingSemiBold text-[#185BD8]">
                            Let's Partner in Cybersecurity
                        </div>
                        <p className="mb-20">
                            We believe in collaborative defense. Connect with our team of experts to discuss your unique security challenges and find the right solutions.
                        </p>
                        <div>
                            <form method="post">
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[1vw] font-body">Enter your Name</label>
                                    <input className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[1vw] font-body">Enter your Email</label>
                                    <input className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="email" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[1vw] font-body">Enter your Phone Number</label>
                                    <input className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="number" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[1vw] font-body">Enter your Company Name</label>
                                    <input className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[1vw] font-body">Enter your Designation</label>
                                    <input className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Name" />
                                </div>
                                <div>
                                    <button className="mt-16 bg-[#185BD8] py-3 text-[1.1vw] text-white font-body px-14" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
