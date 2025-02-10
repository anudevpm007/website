
import Menu from "../Components/Home/Menu";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import QA from "./QA";
import BtnArrow from "@/public/image/MobileHomebody/BtnArrow.png"
import Shild from "@/public/image/MobileHomebody/Shild.png"
import EleBg from "@/public/image/MobileHomebody/Mask_group.png"
import Head_img from "@/public/image/Services/Header.png";

import EventSym from "@/public/image/Home_1/EventSymbol.png";
import MobileMenu from "../Components/Home/MobileMenu";
import MobFooter from "../Components/Home/Mobile/MobFooter";
import EventBg from "@/public/image/Home_1/EventBG.png";
import QAdb from "./QAdb";
import dbServices from "../db/dbServices";
import { notFound } from "next/navigation";
import SerPage from "../db/dbPageServ";
import Link from "next/link";
import GetBtn from "./GetBtn";


const Card = ({ Heading, Peragra }) => {
  return (
    <div className="xl:w-[95%] w-[100%] rounded-lg shadow-md shadow-[#0000002E] xl:py-10 py-6 px-5 xl:mb-10 mb-6">
      <div>
        <h1 className="font-heading xl:text-[1.5vw] text-[2.4vw]">{Heading}</h1>
        <div className="h-1 bg-[#185BD8] xl:w-24 lg:w-20 md:w-16 sm:w-16 w-14 mt-3 mb-3"></div>
        <p className="xl:text-[1vw] text-[2vw] font-body">{Peragra}</p>
      </div>
    </div>
  )
}


export default async function page({ searchParams }) {
  let id;
  let i;

  var ref = 1
  try {
    var indexValue = await searchParams; 
    if(indexValue.id!==undefined || indexValue.id!== null || (indexValue.id).length!==0){
      if(indexValue.i!==undefined || indexValue.i!== null || (indexValue.i).length!==0){
        ref=1
        id = indexValue.id
        i = indexValue.i
        
      }else{
        ref=0
        console.log("wrong");
      }

      
    }else{
      console.log("wrong");
      ref=0
    }
    
  } catch (error) {
    ref=0
    notFound();
  }

  
  if (ref === 1) {
    return (
      <div>
        <Menu />
        <MobileMenu />
        <div className="relative">
          <Image src={Head_img} alt="Heading Image" />
          <div className="absolute top-[35%] left-[8%]">
            <div className="text-[6.4vw] xl:text-[5.4vw] font-heading leading-tight text-[#0858ED]">
              {
                (dbServices[id].content)[i].heading1
              }
            </div>
            <div className="text-[5vw] md:text-[4vw] font-body">
              {
                (dbServices[id].content)[i].heading2
              }
            </div>
            <p className="xl:text-[1.5vw] text-[2.1vw] font-body">
              Discover and fix critical vulnerabilities before they impact your
              business.
            </p>
          </div>
        </div>
        <div id="bodySec">
          <div className="bg-[#185BD8] flex justify-center">
            <div className="w-[85%] mt-10">
              <div className="text-white text-[3.5vw] xl:text-[3vw] font-body">
                {
                  SerPage[id][i].Heading1
                }
              </div>
              <p className="text-white xl:text-[1.1vw] text-[2vw] font-body mt-4 xl:mt-5">
                {
                  SerPage[id][i].H1Pera
                }
              </p>
              <div className="bg-white rounded-md flex items-center mt-8 xl:mt-10 flex-col xl:mb-10 mb-8">
                <div className="flex justify-center xl:text-[3vw] text-[4vw] mt-4 xl:mt-5 font-heading text-[#185BD8]">
                  What We Focus On
                </div>
                <div className="xl:w-[85%] w-[90%] xl:mt-10 mt-5 xl:mb-10 mb-5 text-[#185BD8] font-headingSemiBold text-center xl:text-[1.5vw] text-[2.3vw]">
                  {
                    SerPage[id][i].WWF
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <div className="w-[85%]">
              <div className="xl:text-[3vw] text-[3.2vw]  font-body">
                {
                  SerPage[id][i].Heading2
                }
                <span className="text-[#185BD8] font-heading">{(dbServices[id].content)[i].heading1}</span>
              </div>
              <div className="text-[#185BD8] xl:text-[3vw] text-[3.2vw] font-heading">
                {(dbServices[id].content)[i].heading2}
              </div>
              <p className="mt-5 xl:text-[1.1vw] text-[2.1vw]">
                {
                  SerPage[0][0].H2Pera
                }
              </p>
              <div className="mt-10 mb-10">
                <div className="flex justify-center flex-col items-center">
                  {
                    (SerPage[id][i].List).map((Data, Index) => {
                      return (
                        <Card key={Index} Heading={Data.heading} Peragra={Data.Pera} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 flex xl:hidden justify-center relative ">
            <Image src={EleBg} className="w-full md:hidden" alt="Back Ground IMage" />
            <div className="flex justify-center absolute md:relative md:bg-[#185BD8] md:py-10 w-full">
              <div className="w-[80%]">
                <div className="flex justify-center">
                  <Image className="md:hidden" src={Shild} alt="Shild Image" />
                </div>
                <h1 className="flex justify-center font-heading text-white text-[6.4vw] md:text-[6vw]">Take the Next Step. </h1>
                <p className="flex justify-center  text-white text-[4.5vw] md:text-[4vw] text-center mt-4" >Get in Touch to discuss your business
                  challenges and explore our
                  specialized solutions.</p>
                <div className="flex justify-center">
                  <Link href={"/Registration"} className="bg-white rounded-md mt-4 w-fit px-4 py-2 flex items-center justify-center">
                    Get started
                    <Image src={BtnArrow} className="ml-2 " alt="Btn Arrow Image" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="hidden xl:flex justify-center relative bg-transparent mt-28">
            <Image className="absolute h-full -z-10" src={EventBg} alt="N?A" />
            <div className=" flex w-[60%] justify-end">
              <Image
                className=" object-contain ml-10 right-80"
                src={EventSym}
                alt="N?A"
              />
            </div>
            <div className="absolute scrollSettings animate-fade_left w-[90%] ">
              <div className="text-white text-[2.2vw] mt-20 font-bold">
                Take the Next Step.{" "}
              </div>
              <div className="text-white text-[1.8vw] mt-8 mb-12 font-normal">
                Get in Touch to discuss your business challenges
                <br />
                and explore our specialized solutions.
              </div>
              <GetBtn />

            </div>
          </div>
          <div>
            <div className="flex justify-center bg-[#F1F5F7]">
              <div className="md:w-[85%] w-[95%] ">
                <div className="text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] mt-10 mb-20 font-body">
                  Why Choose
                  <span className="font-heading text-[#185BD8]">Astraliva</span> for
                  Your App's Security
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 xl:gap-8 mt-10 mb-16">
                  <div className="md:px-10 px-3 md:py-8 lg:py-10 py-6 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading lg:text-[1.3vw] md:text-[1.6vw] text-[2.6vw]">Trusted Experts </h2>
                    <div className="md:w-[28%] w-[26%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body text-[3vw] md:text-[2vw] lg:text-[1.4vw] mt-8">
                      Skilled professionals with proven experience in tackling
                      advanced security threats.
                    </p>
                  </div>
                  <div className="md:px-10 px-3 md:py-8 lg:py-10 py-6 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading lg:text-[1.3vw] md:text-[1.6vw] text-[2.6vw]">
                      Customized Testing
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body text-[3vw] md:text-[2vw] lg:text-[1.4vw] mt-8">
                      Security tests tailored to your app’s unique needs.
                    </p>
                  </div>
                  <div className="md:px-10 px-3 md:py-8 lg:py-10 py-6 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading lg:text-[1.3vw] md:text-[1.6vw] text-[2.6vw]">
                      Complete Coverage{" "}
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body text-[3vw] md:text-[2vw] lg:text-[1.4vw] mt-8">
                      Comprehensive testing using both manual and automated methods.
                    </p>
                  </div>
                  <div className="md:px-10 px-3 md:py-8 lg:py-10 py-6 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading lg:text-[1.3vw] md:text-[1.6vw] text-[2.6vw]">
                      Industry Standards
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body text-[3vw] md:text-[2vw] lg:text-[1.4vw] mt-8">
                      We follow global best practices like OWASP ASVS for strong
                      security.
                    </p>
                  </div>
                  <div className="md:px-10 px-3 md:py-8 lg:py-10 py-6 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading lg:text-[1.3vw] md:text-[1.6vw] text-[2.6vw]">
                      Customized Testing{" "}
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body text-[3vw] md:text-[2vw] lg:text-[1.4vw] mt-8">
                      Easy-to-understand reports with actionable steps to fix
                      issues.
                    </p>
                  </div>
                  <div className="md:px-10 px-3 md:py-8 lg:py-10 py-6 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading lg:text-[1.3vw] md:text-[1.6vw] text-[2.6vw]">
                      Support for Compliance
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body text-[3vw] md:text-[2vw] lg:text-[1.4vw] mt-8">
                      Help with meeting security standards and certifications like
                      PCI-DSS, GDPR, and ISO 27001.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:w-[85%] w-[90%]">
              <div className="font-body lg:text-[3vw] md:text-[2.6vw] text-[4.5vw] mt-10">
                Frequently Asked Questions
              </div>
              <div className="flex justify-center">
                <div className="md:w-[95%] w-[100%]">
                  {
                    QAdb.map((data, index) => {
                      return (
                        <QA Q={data.Q} A={data.A} key={data.id} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
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
  else {
    notFound();
  }
}
