import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/image/Footer/Logo.png";
import link from "@/public/image/Footer/Link.png";
import you from "@/public/image/Footer/Youtube.png";
import face from "@/public/image/Footer/Facebook.png";
import x from "@/public/image/Footer/X.png";
import location from "@/public/image/Footer/Location.png";
import Phone from "@/public/image/Footer/Phone.png";
import Mail from "@/public/image/Footer/Mail.png";

export default function Footer() {
  return (
    <div className="w-[100%] bg-[#185BD8] mt-20 px-20 pb-10">
      <div className=" w-[100%] h-[100%] grid grid-cols-12">
        <div className="m-10 my-20 col-span-4">
          <Image src={Logo} alt="N?A" className="w-[18vw]" />
          <div className="flex justify-start px-5 gap-4">
            <Image src={face} alt="N?A" />
            <Image src={x} alt="N?A" />
            <Image src={you} alt="N?A" />
            <Image src={link} alt="N?A" />
          </div>
        </div>
        <div className="flex justify-end col-span-8">
          <div className="w-fit h-fit my-14">
            <div className="text-white font-medium text-[1.5vw]">
              Subscribe to our newsletter
            </div>
            <div className="text-white font-light mt-2 text-[1.1vw]">
              Subscribe to our newsletter and stay updated
            </div>
            <div className="h-fit mt-4">
              <input
                type="text"
                placeholder="Enter your mail ID"
                className=" rounded-s-md p-2 w-[20vw] px-4"
              />
              <button className="bg-[#10377F] h-full px-10 py-2 text-white rounded-e-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end col-span-12 ">
          <div className="flex justify-around w-8/12">
            <div>
              <ul   className="grid grid-rows-5 gap-5">
                <li className="text-white font-medium text-[1.4vw]">
                  Quick Links
                </li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="grid grid-rows-4 gap-5">
                <li className="text-white font-medium text-[1.4vw]">Company</li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-white text-[1.2vw]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="grid grid-rows-1 gap-8">
                <li className="text-white h-fit font-medium text-[1.4vw]">Company</li>
                <li className="flex justify-start">
                  <div>
                    <Image alt="N?A" src={location} />
                  </div>
                  <Link href={"/"} className="text-white text-justify ml-4 w-72 text-[1.2vw]">
                    DOOR NO.2211, 2/1149/I 100, HILITE BUSINESS PARK, Kozhikode-
                    673014, Kerala, India
                  </Link>
                </li>
                <li className="flex justify-start">
                  <div>
                    <Image alt="N?A" src={Phone} />
                  </div>
                  <Link href={"/"} className="text-white text-[1.2vw] ml-4">
                  +91 96454 93245 
                  </Link>

                </li>
                <li className="flex justify-start">
                  <div>
                    <Image alt="N?A" src={Mail} />
                  </div>
                  <Link href={"/"} className="text-white text-[1.2vw] ml-4">
                  info@astraliva.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
