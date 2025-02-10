
import GetInTouch from "../Components/GetInTouch/GetInTouch";
import Menu from "../Components/Home/Menu";
import MobFooter from "../Components/Home/Mobile/MobFooter";
import MobileMenu from "../Components/Home/MobileMenu";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import AimImg from "@/public/image/carrier/MVP/trance.png";
import EyeImg from "@/public/image/carrier/MVP/Eye.png";
import TargetImg from "@/public/image/carrier/MVP/target.png";
import Open from "./Open";
import IMG1 from "@/public/image/carrier/Unique/IMG1.png";
import IMG2 from "@/public/image/carrier/Unique/IMG2.png";
import IMG3 from "@/public/image/carrier/Unique/IMG3.png";
import IMG4 from "@/public/image/carrier/Unique/IMG4.png";
import IMG5 from "@/public/image/carrier/Unique/IMG5.png";
import IMG6 from "@/public/image/carrier/Unique/IMG6.png";
import Banner from "@/public/image/carrier/CarrierBanner.png";
import openData from "./openData";
import Link from "next/link";


export default function carrier() {


  return (
    <div className="relative">
      <Menu />
      <MobileMenu />
      <div className="py-36">
        <div className="text-[8vw] font-body flex justify-center">
          JOIN <span className="ml-4  text-[#185BD8] font-heading">OUR TEAM</span>
        </div>
        <div className="flex justify-center">
          <p className="flex justify-center w-[80%] xl:w-[69%] text-[2.6vw] sm:text-[2vw] xl:text-[1.3vw] mt-0 text-center">
            At Astraliva, we are shaping the future of cybersecurity with
            innovation, passion, and expertise. If you're looking to make an
            impact in the world of digital security, you’ve come to the right
            place.
          </p>
        </div>
      </div>

      <div id="bodySec">
        <div className="flex justify-center items-center flex-col lg:flex-row bg-[#2f80ed] py-16">
          <div className="w-[85%] grid grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-20">
            <div>
              <div className="flex justify-center">
                <Image src={AimImg} className="w-[90%] md:w-[50%] xl:w-[50%]" alt="N?A" />
              </div>
              <div className=" font-body  flex justify-center text-[5.2vw] md:text-[4.2vw] lg:text-[3.2vw] text-white">
                Mission
              </div>
              <p className="font-body flex justify-center text-[2.4vw] md:text-[1.5vw] lg:text-[1.2vw]  mt-2 text-white text-center">
                By prioritizing cybersecurity for businesses globally, we aim to
                enhance safety for all individuals. Utilizing our research and
                innovation, we seek to enhance the safety of all individuals in
                the digital realm. A fresh cohort of cybersecurity professionals
                will be trained to defend against possible risks.
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <Image src={EyeImg} className="w-[90%] md:w-[50%] xl:w-[50%]" alt="N?A" />
              </div>
              <div className="font-body flex justify-center text-[5.2vw] md:text-[4.2vw] lg:text-[3.2vw] text-white">
                Vision
              </div>
              <p className="font-body flex justify-center text-[2.4vw] md:text-[1.5vw] lg:text-[1.2vw]  mt-2 text-white text-center">
                Our mission is to protect businesses from online threats by
                offering expert security assessments, creating innovative
                solutions, ensuring compliance, and educating future cybersecurity
                professionals. We identify vulnerabilities, provide cutting edge
                solutions, and foster collaboration through conferences to stay
                ahead of evolving risks and protect organizations.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center">
                <Image src={TargetImg} className="w-[90%] md:w-[50%] xl:w-[50%]" alt="N?A" />
              </div>
              <div className="font-body flex justify-center text-[5.2vw] md:text-[4.2vw] lg:text-[3.2vw] text-white">
                Purpose
              </div>
              <p className="font-body flex  justify-center text-[1.9vw] md:text-[1.5vw] lg:text-[1.2vw]  mt-2 text-white text-center">
                Astraliva's mission is to safeguard businesses in the digital
                realm. We achieve this by Continually researching and developing
                new defences against internet attacks. delivering trustworthy
                (Fanatics) assistance to organizations when needed. enlightening
                and inspiring the next generation of cybersecurity experts.
              </p>
            </div>

          </div>
          
        </div>
        <div className="flex justify-center py-10">
          <div className="w-[95%] lg:w-[85%]">
            <div className="font-body text-[5vw] md:text-[3vw] xl:text-[3vw] font-light">
              A company as unique as you
            </div>
            <p className="font-body mt-8 xl:text-[1.4vw] text-[2.8vw] md:text-[1.8vw] text-[#383838be]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-3 xl:gap-10">
              <div className="py-2 xl:py-4 rounded-2xl xl:px-8 px-5 border-black border-[1px]">
                <div>
                  <div className="bg-[#185BD8] rounded-md p-[2px] xl:my-5 my-3 xl:mb-8 mb-4 w-fit">
                    <Image src={IMG1} alt="N?A" className="sm:w-[6vw] w-[8vw] md:w-[5vw] lg:w-[4vw] xl:lg:w-[3vw]" />
                  </div>
                </div>
                <div className="text-[3.5vw] sm:text-[1.6vw] lg:text-[2vw]  xl:text-[1.3vw] font-headingSemiBold">No Hierarchy</div>
                <p className="mt-3 md:mt-4 xl:mt-5 text-[2.2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-body">
                  We understand your specific security challenges and customize
                  our testing approach to fit your business perfectly
                </p>
              </div>
              <div className="py-2 xl:py-4 rounded-2xl xl:px-8 px-5 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-[2px] xl:my-5 my-3 xl:mb-8 mb-4 w-fit">
                      <Image src={IMG2} className="sm:w-[6vw] w-[8vw] md:w-[5vw] lg:w-[4vw] xl:lg:w-[3vw]" alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[3.5vw] sm:text-[1.6vw] lg:text-[2vw]  xl:text-[1.3vw] font-headingSemiBold">
                    Flexible Working Hours
                  </div>
                  <p className="mt-3 md:mt-4 xl:mt-5 text-[2.2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-body">
                    Our team of experience cybersecurity professionals combines
                    years of expertise with the latest industry insights to ensure
                    your application remains secure
                  </p>
                </div>
              </div>
              <div className="py-2 xl:py-4 rounded-2xl xl:px-8 px-5 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-[2px] xl:my-5 my-3 xl:mb-8 mb-4 w-fit">
                      <Image src={IMG3} className="sm:w-[6vw] w-[8vw] md:w-[5vw] lg:w-[4vw] xl:lg:w-[3vw]" alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[3.5vw] sm:text-[1.6vw] lg:text-[2vw]  xl:text-[1.3vw] font-headingSemiBold">
                    Health and Wellness
                  </div>
                  <p className="mt-3 md:mt-4 xl:mt-5 text-[2.2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-body">
                    Our security professionals use advanced techniques and
                    thorough research to uncover hidden vulnerabilities, including
                    CVEs, business logic flaws, and sophisticated attack
                    strategies
                  </p>
                </div>
              </div>
              <div className="py-2 xl:py-4 rounded-2xl xl:px-8 px-5 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-[2px] xl:my-5 my-3 xl:mb-8 mb-4 w-fit">
                      <Image src={IMG4} className="sm:w-[6vw] w-[8vw] md:w-[5vw] lg:w-[4vw] xl:lg:w-[3vw]" alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[3.5vw] sm:text-[1.6vw] lg:text-[2vw]  xl:text-[1.3vw] font-headingSemiBold">
                    Recognition and Rewards
                  </div>
                  <p className="mt-3 md:mt-4 xl:mt-5 text-[2.2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-body">
                    Astraliva helps you meet key industry standards like
                    GDPR,PCI-DSS,and HIPAA ensuring your app stays compliant and
                    avoids costly fines
                  </p>
                </div>
              </div>
              <div className="py-2 xl:py-4 rounded-2xl xl:px-8 px-5 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-[2px] xl:my-5 my-3 xl:mb-8 mb-4 w-fit">
                      <Image src={IMG5} className="sm:w-[6vw] w-[8vw] md:w-[5vw] lg:w-[4vw] xl:lg:w-[3vw]" alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[3.5vw] sm:text-[1.6vw] lg:text-[2vw]  xl:text-[1.3vw] font-headingSemiBold">Work Life Balance</div>
                  <p className="mt-3 md:mt-4 xl:mt-5 text-[2.2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-body">
                    We don’t just identify vulnerabilities we collaborate with you
                    to implement strategies that prevent future threats and
                    strengthen your overall security
                  </p>
                </div>
              </div>
              <div className="py-2 xl:py-4 rounded-2xl xl:px-8 px-5 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-[2px] xl:my-5 my-3 xl:mb-8 mb-4 w-fit">
                      <Image src={IMG6} className="sm:w-[6vw] w-[8vw] md:w-[5vw] lg:w-[4vw] xl:lg:w-[3vw]" alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[3.5vw] sm:text-[1.6vw] lg:text-[2vw]  xl:text-[1.3vw] font-headingSemiBold">
                    Respectful Workspace
                  </div>
                  <p className="mt-3 md:mt-4 xl:mt-5 text-[2.2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-body">
                    Recive clear detailed reports with our observation and
                    customized recommendations on fixing vulnerabilities making it
                    easy to understand and act upon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <div className="w-[95%] xl:w-[85%]">
            <div className=" font-body text-[5vw] md:text-[4vw] xl:text-[3vw] font-light">Open Positions</div>
            <p className="font-body mt-8 xl:text-[1.4vw] text-[2.8vw] md:text-[2vw] text-[#383838be]">
              Explore our current opportunities and find the role that fits your
              skills and aspirations:
            </p>
            {
              openData.map((data,index)=>{
                return(
                  <Open heading={data.head} year={data.year} day={data.day} id={data.id} loc={data.loc} key={index}/>
                );
              })
            }
            
            {/* <div className="mt-10">
              <div className="grid grid-cols-12 md:gap-5 gap-2 py-5 rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="col-span-2 flex items-center justify-center">
                  <div className="bg-[#185BD8] rounded-xl w-[10vw] md:w-[7vw] h-[10vw] md:h-[7vw] flex justify-center items-center">
                    <Image className="w-[80%]" src={NoteIcon} alt="N?A" />
                  </div>
                </div>
                <div className="md:col-span-7 col-span-5">
                  <div>
                    <div className="text-[3vw] md:text-[1.8vw] font-bold">
                      Associate Consultant Audit
                    </div>
                    <div className="md:grid grid-cols-3 w-[60%] pr-3 md:mt-5 mt-1">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={BagIcon}
                          className=" m-0 p-0 w-[15%] sm:w-[15%] md:w-1/4"
                          alt="N?A"
                        />
                        <div className="text-[3vw] md:text-[20px] font-body"> 3-5 years</div>
                      </div>
                      <div className="hidden md:flex items-center">
                        <Image
                          src={Location}
                          className=" m-0 p-0 w-[15%] sm:w-[15%] md:w-1/4"
                          alt="N?A"
                        />
                        <div className="text-[3vw] md:text-[20px] font-body">Calicut</div>
                      </div>
                      <div className="hidden md:flex items-center">
                        <Image
                          src={CaleIcon}
                          className=" m-0 mr-2 p-0 w-[15%] sm:w-[15%] md:w-[20%]"
                          alt="N?A"
                        />
                        <div className="text-[3vw] md:text-[20px] font-body">2 Day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 md:col-span-3 flex justify-center items-center">
                  <button className="bg-[#185BD8] md:px-14 px-10 py-3 md:text-[1.4vw] text-[2.4vw] font-semibold text-white rounded-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
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
                      Associate Consultant Audit
                    </div>
                    <div className="md:grid grid-cols-3 w-[60%] pr-3 md:mt-5 mt-1">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={BagIcon}
                          className=" m-0 p-0 w-[15%] sm:w-[15%] md:w-1/4"
                          alt="N?A"
                        />
                        <div className="text-[3vw] md:text-[20px] font-body"> 3-5 years</div>
                      </div>
                      <div className="hidden md:flex items-center">
                        <Image
                          src={Location}
                          className=" m-0 p-0 w-[15%] sm:w-[15%] md:w-1/4"
                          alt="N?A"
                        />
                        <div className="text-[3vw] md:text-[20px] font-body">Calicut</div>
                      </div>
                      <div className="hidden md:flex items-center">
                        <Image
                          src={CaleIcon}
                          className=" m-0 mr-2 p-0 w-[15%] sm:w-[15%] md:w-[20%]"
                          alt="N?A"
                        />
                        <div className="text-[3vw] md:text-[20px] font-body">2 Day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 md:col-span-3 flex justify-center items-center">
                  <button className="bg-[#185BD8] md:px-14 px-10 py-3 md:text-[1.4vw] text-[2.4vw] font-semibold text-white rounded-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div> */}


            {/* <div className="mt-10">
              <div className="grid grid-cols-12 gap-5 py-5 rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="col-span-2 flex items-center justify-center">
                  <div className="bg-[#185BD8] rounded-xl w-[7vw] h-[7vw] flex justify-center items-center">
                    <Image className="w-[80%]" src={NoteIcon} alt="N?A" />
                  </div>
                </div>
                <div className="col-span-7">
                  <div>
                    <div className="text-[1.8vw] font-bold">
                      Associate Consultant Appsec
                    </div>
                    <div className="grid grid-cols-3 w-[60%] pr-3 mt-5">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={BagIcon}
                          className="m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={CaleIcon}
                          className="m-0 mr-2 p-0"
                          alt="N?A"
                        />
                        <div>2 Day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <button className="bg-[#185BD8] px-14 py-3 text-[1.4vw] font-semibold text-white rounded-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-12 gap-5 py-5 rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="col-span-2 flex items-center justify-center">
                  <div className="bg-[#185BD8] rounded-xl w-[7vw] h-[7vw] flex justify-center items-center">
                    <Image className="w-[80%]" src={NoteIcon} alt="N?A" />
                  </div>
                </div>
                <div className="col-span-7">
                  <div>
                    <div className="text-[1.8vw] font-bold">
                      Associate Consultant Network Security
                    </div>
                    <div className="grid grid-cols-3 w-[60%] pr-3 mt-5">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={BagIcon}
                          className="m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={CaleIcon}
                          className="mr-2 m-0 p-0"
                          alt="N?A"
                        />
                        <div>2 Day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <button className="bg-[#185BD8] px-14 py-3 text-[1.4vw] font-semibold text-white rounded-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-12 gap-5 py-5 rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="col-span-2 flex items-center justify-center">
                  <div className="bg-[#185BD8] rounded-xl w-[7vw] h-[7vw] flex justify-center items-center">
                    <Image className="w-[80%]" src={NoteIcon} alt="N?A" />
                  </div>
                </div>
                <div className="col-span-7">
                  <div>
                    <div className="text-[1.8vw] font-bold">Anaylist</div>
                    <div className="grid grid-cols-3 w-[60%] pr-3 mt-5">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={BagIcon}
                          className="m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={CaleIcon}
                          className="mr-2 m-0 p-0"
                          alt="N?A"
                        />
                        <div>2 Day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <button className="bg-[#185BD8] px-14 py-3 text-[1.4vw] font-semibold text-white rounded-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        <div className="flex mt-7 justify-center">
          <div className="bg-[#185BD8] py-6 rounded-md    w-[95%]  md:w-[85%] relative">
            <Image className="hidden md:block w-full" src={Banner} alt="Carrier Banner" />
            <div className="md:absolute w-full top-[25%] justify-center flex flex-col items-center">
              <h1 className="font-headingSemiBold text-[7vw] md:text-[3vw] text-white">Join our Community</h1>
              <p className="font-body text-[2.6vw] md:text-[1.6vw] text-white">Register today & start exploring the endless possibilities.</p>
              <Link href={"https://whatsapp.com"} className="font-body  md:text-[1.5vw] text-[4vw] px-16 mt-5 rounded-md py-1 md:py-2 bg-white text-black">
                Join
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center text-[7vw] font-bold text-[#185BD8] leading-none mt-20 mb-8 md:mb-0 font-headingHeavy">BUILD THE FUTURE,<br />TOGETHER</div>
        <div className="hidden md:block">
          <Footer />
        </div>
        <div className="md:hidden">
          <MobFooter />
        </div>
      </div>

    </div>
  );
}
