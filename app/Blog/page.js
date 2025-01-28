import Menu from "../Components/Home/Menu"
import GetInTouch from "../Components/GetInTouch/GetInTouch"
import BannerImg from "@/public/image/BlogPage/blogsBannner.png"
import img1 from "@/public/image/BlogPage/img_1.png"
import img2 from "@/public/image/BlogPage/img_2.png"
import img3 from "@/public/image/BlogPage/img_3.png"
import img4 from "@/public/image/BlogPage/img_4.png"
import img5 from "@/public/image/BlogPage/img_5.png"
import img1_1 from "@/public/image/BlogPage/BlogBottom/img1.png"
import img1_2 from "@/public/image/BlogPage/BlogBottom/img2.png"
import img1_3 from "@/public/image/BlogPage/BlogBottom/img3.png"
import Footer from "../Components/Footer/Footer"
import Link from "next/link"
import Image from "next/image"

export default function page() {
  return (
    <div>
      <GetInTouch />
      <Menu />
      
      <div id="bodySec">
      <div className="relative">
        <Image  src={BannerImg} alt="Blog Banner" />
        <div className="absolute bottom-[40%] flex justify-center">
          <div className="w-[85%]">
            <h1 className="text-[3.2vw] font-body">Stay Tuned For Our Next <span className="font-heading text-[#0858ED]">Blog !!</span></h1>
            <p className="w-[40%] font-body text-[1vw] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
        </div>
      </div>
        <div className="flex justify-center bg-[#F1F5F7] py-16" >
          <div className="w-[85%]">
            <h1 className="font-heading text-[2.6vw] mt-10">Trending blogs</h1>
            <p className="font-body text-[1vw] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className="grid grid-cols-2 mt-10 gap-12">
              <div>
                <Image src={img1} alt="Image1" className="w-[100%]" />
                <div className="flex justify-center items-center flex-col mt-5">
                  <div className="w-[95%] flex justify-between">
                    <div className="text-[1.1vw] font-body">Hello Hackers</div>
                    <div className="text-[1.1vw] font-body">24-02-2024</div>
                  </div>
                  <div className="w-[95%] mt-10">
                    <p className="text-[1.3vw] font-body text-justify">
                      In this write-up, well explore the fundamentals of game hacking using Assault Cube as our target. Well start by learning how to identify dynamic addresses for elements like health and ammo and then progress to finding their static counterparts. Once we have the addresses, well create a simple Lua script to automate value manipulation.
                    </p>
                  </div>
                  <div className="w-[95%] flex justify-end mt-10">
                    <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row mb-5">
                  <Image src={img2} alt="Image 2" className="w-[12.5vw] rounded-xl" />
                  <div className="ml-5" >
                    <h1 className=" font-heading text-[1.6vw] mt-2">GPT-3 and Open AI is the future. </h1>
                    <p className=" font-body text-[1vw] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex justify-center">
                      <div className="flex justify-end w-[70%]">
                        <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mb-5">
                  <Image src={img3} alt="Image 2" className="w-[12.5vw] rounded-xl" />
                  <div className="ml-5" >
                    <h1 className=" font-heading text-[1.6vw] mt-2">GPT-3 and Open AI is the future. </h1>
                    <p className=" font-body text-[1vw] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex justify-center">
                      <div className="flex justify-end w-[70%]">
                        <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mb-5">
                  <Image src={img4} alt="Image 2" className="w-[12.5vw] rounded-xl" />
                  <div className="ml-5" >
                    <h1 className=" font-heading text-[1.6vw] mt-2">GPT-3 and Open AI is the future. </h1>
                    <p className=" font-body text-[1vw] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex justify-center">
                      <div className="flex justify-end w-[70%]">
                        <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mb-5">
                  <Image src={img5} alt="Image 2" className="w-[12.5vw] rounded-xl" />
                  <div className="ml-5" >
                    <h1 className=" font-heading text-[1.6vw] mt-2">GPT-3 and Open AI is the future. </h1>
                    <p className=" font-body text-[1vw] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex justify-center">
                      <div className="flex justify-end w-[70%]">
                        <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-10 justify-center">
          <div className="w-[85%]">
            <h1 className="text-[2.5vw] font-body">The Astraliva <span className="text-[#175BD8]">Security Library</span></h1>
            <p className="text-[1.2vw] mt-5 font-body">The Astraliva Security Library: Your trusted source for cybersecurity information. The Security Library offers a wealth of information on the latest threats, trends, and best practices.</p>
          </div>
        </div>
        <div className="flex py-10 justify-center">
          <div className="w-[85%] grid grid-cols-3 gap-4">
            <div className="bg-[#00000017] rounded-2xl">
              <Image src={img1_1} alt="Bottom Image" className="w-[100%]" />
              <div className="px-2 pb-10 ">
                <h1 className="mt-14 text-[1.5vw]">GPT-3 and Open AI is the future. </h1>
                <div className="flex justify-center mt-28">
                  <div className="flex justify-end w-[95%]">
                    <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#00000017] rounded-2xl">
              <Image src={img1_2} alt="Bottom Image" className="w-[100%]" />
              <div className="px-2 pb-10 ">
                <h1 className="mt-14 text-[1.5vw]">GPT-3 and Open AI is the future. </h1>
                <div className="flex justify-center mt-28">
                  <div className="flex justify-end w-[95%]">
                    <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00000017] rounded-2xl">
              <Image src={img1_3} alt="Bottom Image" className="w-[100%]" />
              <div className="px-2 pb-10 ">
                <h1 className="mt-14 text-[1.5vw]">GPT-3 and Open AI is the future. </h1>
                <div className="flex justify-center mt-28">
                  <div className="flex justify-end w-[95%]">
                    <Link href={"/"} className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
