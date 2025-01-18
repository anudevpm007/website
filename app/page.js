import Menu from "./Components/Home/Menu";
import Image from "next/image";
import Header_img from "@/public/image/Home/banner_main.jpg";
import Link from "next/link";
import img0 from "@/public/image/Home/image0.png";
import img1 from "@/public/image/Home/image1.png";
import img2 from "@/public/image/Home/image2.png";
import img3 from "@/public/image/Home/image3.png";
import img4 from "@/public/image/Home/image4.png";
import img5 from "@/public/image/Home/image5.png";
import arrow_right from "@/public/image/Home/arrow_right.png";
import arrow_left from "@/public/image/Home/arrow_left.png";
import img0_0 from "@/public/image/Home/image0_0.png";
import img0_1 from "@/public/image/Home/image0_1.png";
import img0_2 from "@/public/image/Home/image0_2.png";
import img0_3 from "@/public/image/Home/image0_3.png";
import img0_4 from "@/public/image/Home/image0_4.png";
import img0_5 from "@/public/image/Home/image0_5.png";
import box_bg_img from "@/public/image/Home/why_box_bg_image.png";
import quetes from "@/public/image/Home/quetes.png";
import Right_BT from "@/public/image/Home/Right_BT.png";
import Left_BT from "@/public/image/Home/Left_BT.png";
import HomeBottom from "./Components/Home/HomeBottom";







export default function Home() {
  return (
    <div className="relative">
      <Menu />
      <Image
        src={Header_img}
        alt="Header Image"
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center h-auto">
        <div className="bg-transparent h-[350px] flex justify-center items-center">
          <div>
            <ul className="mb-6 mt-[200px]">
              <li className="flex justify-center items-center">
                <div className="font-[200] text-[2vw]">Next-Generation </div>
                <span className="ml-2 text-[4.2vw] font-bold text-blue-700">
                  CYBER SECURITY
                </span>
              </li>
              <li className="flex justify-center text-[2vw]">
                Solutions For Your Business
              </li>
            </ul>
            <div className="flex justify-center">
              <p className="w-[80%] text-center mt-8">
                Astraliva delivers next-generation cybersecurity solutions
                through customized strategies and research-oriented approach. We
                protect your entire digital ecosystem, from your core network to
                cloud infrastructure and all connected devices with proactive
                threat intelligence and robust security measures. Empower your
                business with the confidence to focus on achieving your core
                objectives. Explore our solutions.
              </p>
            </div>
            <div className="flex justify-center mt-[30px]">
              <Link
                className="px-10 py-3 rounded-md bg-blue-700 text-white"
                href={"/"}
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-fit bg-[#185BD8] mt-[300px]">
        <div className="w-[85%] pt-14">
          <h2 className="text-[2.2vw] text-white font-[400] font-sans">
            Services
          </h2>
          <p className="text-white pt-2 text-[3vw] font-thin">
            Comprehensive Cybersecurity Solutions for Your Business.
          </p>
          <p className="text-white text-[1.2vw] pt-6">
            Protect your business with a comprehensive suite of cybersecurity
            solutions designed to meet your unique needs and exceed your
            expectations.
          </p>
          <div className="grid gap-24 grid-cols-12 mt-32 mb-14">
            <div className=" col-span-5">
              <h1 className="text-[50px] font-medium text-white ">
                Application Security
              </h1>
              <p className="mt-14 text-white leading-[38px] text-justify">
                Our experts deliver advanced application security testing,
                identifying critical vulnerabilities like CVEs and business
                logic flaws to protect your application and protect your
                brand's reputation
              </p>
              <div className="flex justify-end mt-10">
                <div className="flex justify-center w-fit">
                  <button>
                    <Image src={arrow_right} alt="Arrow" />
                  </button>
                  <button>
                    <Image src={arrow_left} alt="Arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="  col-span-7">
              <div className="grid grid-cols-3 gap-10">
                <div className="flex flex-col bg-white items-center p-3 rounded-lg">
                  <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                    <Image src={img0} alt="Nothing" />
                  </div>
                  <p className="text-black text-center">
                    Web Application Security Testing
                  </p>
                </div>
                <div className="flex flex-col bg-white items-center p-3 rounded-lg">
                  <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                    <Image src={img1} alt="Nothing" />
                  </div>
                  <p className="text-black text-center">
                    API Application Security Testing
                  </p>
                </div>
                <div className="flex flex-col bg-white items-center p-3 rounded-lg">
                  <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                    <Image src={img2} alt="Nothing" />
                  </div>
                  <p className="text-black text-center">
                    Mobile Application Security Testing
                  </p>
                </div>
                <div className="flex flex-col bg-white items-center p-3 rounded-lg">
                  <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                    <Image src={img3} alt="Nothing" />
                  </div>
                  <p className="text-black text-center">
                    Thick Client Application Security Testing
                  </p>
                </div>
                <div className="flex flex-col bg-white items-center p-3 rounded-lg">
                  <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                    <Image src={img4} alt="Nothing" />
                  </div>
                  <p className="text-black text-center">Secure Coding Review</p>
                </div>
                <div className="flex flex-col bg-white items-center p-3 rounded-lg">
                  <div className="p-2 bg bg-[#185BD8] w-max m-5 rounded-lg">
                    <Image src={img5} alt="Nothing" />
                  </div>
                  <p className="text-black text-center">
                    POS Application Testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-[85%] ">
          <div className="text-[2.2vw]">
            Why <span className="text-[#185BD8] font-[600]">ASTRALIVA</span>{" "}
            Stands Outs
          </div>
          <div className="text-[1.2vw] mt-5">
            Astraliva delivers comprehensive cybersecurity solutions designed
            for your unique needs and customized to perfectly fit your business.
          </div>
          <div className="grid gap-10 grid-cols-3 mt-20 ">
            <div className="flex justify-center">
              <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                <Image
                  src={box_bg_img}
                  alt="Nothing"
                  className="absolute w-[100%] top-0 left-0 rounded-xl"
                />
                <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                  <Image className="w-10" src={img0_0} alt="Nothing" />
                </div>
                <div className="text-[1.5vw] mb-5">To Your Business Needs</div>
                <p>
                  We understand your specific security challenges and customize
                  our testing approach to fit your business perfectly
                </p>
              </div>
            </div>
            <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
              <Image
                src={box_bg_img}
                alt="Nothing"
                className="absolute w-[100%] top-0 left-0 rounded-xl"
              />
              <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                <Image src={img0_1} className="w-10" alt="Nothing" />
              </div>
              <div className="text-[1.5vw] mb-5">Expert Security Teams</div>
              <p>
                Our team of experience cybersecurity professionals combines
                years of expertise with the latest industry insights to ensure
                your application remains secure
              </p>
            </div>
            <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
              <Image
                src={box_bg_img}
                alt="Nothing"
                className="absolute w-[100%] top-0 left-0 rounded-xl"
              />
              <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                <Image className="w-10" src={img0_2} alt="Nothing" />
              </div>
              <div className="text-[1.5vw] mb-5">Next Gen Security</div>
              <p>
                Our security professionals use advanced techniques and thorough
                research to uncover hidden vulnerabilities, including CVEs,
                business logic flaws, and sophisticated attack strategies
              </p>
            </div>
            <div className="flex justify-center">
              <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                <Image
                  src={box_bg_img}
                  alt="Nothing"
                  className="absolute w-[100%] top-0 left-0 rounded-xl"
                />
                <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                  <Image className="w-10" src={img0_3} alt="Nothing" />
                </div>
                <div className="text-[1.5vw] mb-5">To Your Business Needs</div>
                <p>
                  We understand your specific security challenges and customize
                  our testing approach to fit your business perfectly
                </p>
              </div>
            </div>
            <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
              <Image
                src={box_bg_img}
                alt="Nothing"
                className="absolute w-[100%] top-0 left-0 rounded-xl"
              />
              <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                <Image className="w-10" src={img0_4} alt="Nothing" />
              </div>
              <div className="text-[1.5vw] mb-5">Expert Security Teams</div>
              <p>
                Our team of experience cybersecurity professionals combines
                years of expertise with the latest industry insights to ensure
                your application remains secure
              </p>
            </div>
            <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
              <Image
                src={box_bg_img}
                alt="Nothing"
                className="absolute w-[100%] top-0 left-0 rounded-xl"
              />
              <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                <Image className="w-10" src={img0_5} alt="Nothing" />
              </div>
              <div className="text-[1.5vw] mb-5">Next Gen Security</div>
              <p>
                Our security professionals use advanced techniques and thorough
                research to uncover hidden vulnerabilities, including CVEs,
                business logic flaws, and sophisticated attack strategies
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#185BD8] w-[100%] mt-24 flex justify-center">
        <div className="w-[90%] grid grid-cols-3">
          <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
            <Image
              src={box_bg_img}
              alt="Box background"
              className="absolute top-0 left-0"
            />
            <div className="text-[#185BD8] font-black text-[4vw]">5+</div>
            <div className="text-center text-[1.5vw] mt-6">Global Presence</div>
          </div>
          <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
            <Image
              src={box_bg_img}
              alt="Box background"
              className="absolute top-0 left-0"
            />
            <div className="text-[#185BD8] font-black text-[4vw]">30+</div>
            <div className="text-center text-[1.5vw] mt-6">
              Trusted Companies
            </div>
          </div>
          <div className="bg-white m-10 relative rounded-lg flex items-center flex-col p-8">
            <Image
              src={box_bg_img}
              alt="Box background"
              className="absolute top-0 left-0"
            />
            <div className="text-[#185BD8] font-black text-[4vw]">99%</div>
            <div className="text-center text-[1.5vw] mt-6">
              Client Retention Rate
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="w-[85%]">
          <div className="text-[2.5vw]">
            What <span className="text-[#185BD8]">Our Clients</span> Say
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-[92%] items-center relative flex justify-center">
              <div className=" bg-[#185BD8] p-[70px] py-[50px] w-[92%] rounded-lg">
                <div className="flex justify-center">
                  <span>
                    <Image className="w-[10vw]" src={quetes} alt="N?A" />
                  </span>
                  <p className="text-justify mt-8 px-4 leading-[50px]  text-white text-[1.3vw]">
                    We were really impressed with how professional and
                    responsive the team at Astraliva was. They were always there
                    to answer our questions and help us out whenever we needed
                    it. Their expertise in penetration testing helped us
                    identify and address some serious security vulnerabilities
                    --{" "}
                    <span>
                      OpusNexus{" "}
                      <Image
                        className=" mt-3 float-right ml-4 w-[3.1vw] rotate-180"
                        src={quetes}
                        alt="Nothing"
                      />
                    </span>
                  </p>
                </div>
                <div className="mt-10 text-[1.6vw] text-white w-[100%] flex justify-end p-3">
                  Sophia Joseph ( Director)
                </div>
              </div>
              <div className=" absolute  bg-[#185BD833]  w-[98%] h-[80%] -z-10 rounded-lg"></div>
              <div className="flex absolute justify-center  h-[90%] bg-[#185BD880] -z-20  w-[95%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[90%] mt-10">
        <button className=" bg-white p-1 ml-1 rounded-md border-[#00000080] border-[1px] flex justify-center items-center">
          <Image src={Left_BT} alt="Botton" />
        </button>
        <button className="bg-[#185BD8] p-1 ml-1 rounded-md flex justify-center items-center">
          <Image src={Right_BT} alt="Botton" />
        </button>
      </div>
      <div className="w-[100%] flex justify-center">
        <div className="w-[85%]">
          <div className="text-[1.8vw] mb-4 mt-28">
            Astraliva Security <span className="text-[#185BD8]">Summits & Webinars</span>
          </div>
          <div className="text-[1.2vw]">
            Join the Astraliva community. Learn, connect, and grow with industry
            leaders at our Security Summits & Webinars.
          </div>
        </div>
      </div>
      <HomeBottom/>
    </div>
  );
}
