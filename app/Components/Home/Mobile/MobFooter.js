import Image from "next/image"
import Link from "next/link"
import MainLogo from "@/public/image/MobileImage/Footer/Logo.png";
import link from "@/public/image/MobileImage/Footer/Link.png";
import you from "@/public/image/MobileImage/Footer/Youtube.png";
import face from "@/public/image/MobileImage/Footer/Facebook.png";
import x from "@/public/image/MobileImage/Footer/X.png";
import location from "@/public/image/MobileImage/Footer/Location.png";
import Phone from "@/public/image/MobileImage/Footer/Phone.png";
import Mail from "@/public/image/MobileImage/Footer/Mail.png";
import FooterSub from "./FooterSub";


export default function MobFooter() {
    
    return (
        <div className="bg-[#185BD8] py-3 flex justify-center">
            <div className="w-[95%]">
                <Image src={MainLogo} className="w-[40vw] lg:w-[30vw]" alt="Footer Image" />
                <h1 className="mt-3 text-[5vw] lg:text-[4vw] font-body text-white">Subscribe to our newsletter</h1>
                <p className=" text-[3vw] lg:text-[2vw] font-body text-white">Subscribe to our newsletter
                    and stay updated</p>

                <FooterSub />
                <div >
                    <div className="w-[50%] md:w-[25%] mt-5 flex justify-between">
                        <Link href={"https://facebook.com"}><Image src={face} alt="N?A" /></Link>
                        <Link href={"https://twiter.com"}><Image src={x} alt="N?A" /></Link>
                        <Link href={"https://youtube.com"}><Image src={you} alt="N?A" /></Link>
                        <Link href={"https://linkedin.com"}><Image src={link} alt="N?A" /></Link>
                    </div>
                </div>
                <div className="grid mt-5 grid-cols-2">
                    <div>
                        <ul className="text-white">
                            <li><h1 className="font-heading mt-3 text-[5vw] md:text-[3vw]">Quick Links</h1></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>About us </Link></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>Services</Link></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>Blogs</Link></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-white">
                            <li><h1 className="font-heading mt-3 text-[5vw] md:text-[3vw]">Company</h1></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>Terms & Conditions</Link></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>Privacy Policy</Link></li>
                            <li className="mt-5 font-body text-[3.5vw] md:text-[2vw]" ><Link href={"/"}>FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <ul className="text-white">
                        <li><h1 className="font-heading mt-3 text-[5vw] md:text-[3vw]">Get in  touch</h1></li>
                        <li className="mt-5" >
                            <div className="grid grid-cols-12">
                                <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                    <Image src={location} alt="Location Image" />
                                </div>
                                <div className="col-span-10 md:col-span-11 font-body md:text-[1.8vw]">NO.2211, 2/1149/I 100, HILITE BUSINESS PARK, Kozhikode 673014, Kerala, India</div>
                            </div>
                        </li>
                        <li className="mt-5" >
                            <div className="grid grid-cols-12">
                                <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                    <Image src={Phone} alt="Location Image" />
                                </div>
                                <div className="col-span-10 md:col-span-11 font-body text-[4vw] md:text-[1.8vw]">+91 96454 93245 </div>
                            </div>
                        </li>
                        <li className="mt-5" >
                            <div className="grid grid-cols-12 ">
                                <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                    <Image src={Mail} alt="Location Image" />
                                </div>
                                <div className="col-span-10 md:text-[1.8vw] font-body md:col-span-11">info@astraliva.com</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
