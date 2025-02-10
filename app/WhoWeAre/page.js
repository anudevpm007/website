import Menu from "../Components/Home/Menu"
import MobFooter from "../Components/Home/Mobile/MobFooter"
import MobileMenu from "../Components/Home/MobileMenu"
import Image from "next/image"
import Footer from "../Components/Footer/Footer"
import AimLogo from "@/public/image/WhoAreWe/AimLogo.png"
import EyeLogo from "@/public/image/WhoAreWe/EyeLogo.png"
import Icon1 from "@/public/image/WhoAreWe/Icon/Icon1.png"

import box_bg_img from "@/public/image/Home/why_box_bg_image.png";

export default function Page() {
  return (
    <div>

      <Menu />
      <MobileMenu />
      <div id="bodySec" >
        <div className="relative">
          <div className="absolute -z-10 w-full h-[400px] sm:h-[500px] md:h-[800px] lg:h-[1000px] Gradient"></div>
          <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40 ">
            <div className="flex justify-center font-headingHeavy xl:text-[6vw] lg:text-[6.5vw] md:text-[7vw] text-[8.4vw]  text-black">WHO <span className="ml-3 text-[#185BD8]">WE ARE?</span></div>
            <div className="flex justify-center">
              <p className="font-body xl:text-[1.2vw] lg:text-[1.8vw] sm:text-[2vw] xl:w-[45%] lg:w-[60%] sm:w-[65%] w-[95%] text-center">Astraliva is a leading cybersecurity company committed to safeguarding
                digital assets and ensuring resilience against ever evolving threats.</p></div>
          </div>
        </div>
        <div className="flex justify-center lg:mt-60 md:mt-52 sm:mt-40 mt-24">
          <div className="grid grid-cols-1 gap-14 w-[85%]">
            <div>
              <div className="text-[5vw] md:text-[4vw] lg:text-[3.1vw] lg:w-[90%] w-[95%]">How and Why <br />We Founded Astraliva</div>
              <p className="text-justify lg:text-[1.25vw] md:text-[1.7vw] sm:text-[2vw] text-[2.5vw] mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                Astraliva was born from a deep-seated concern: the escalating frequency and sophistication of cyberattacks. Witnessing how these attacks not only disrupted businesses but also threatened individuals, a group of passionate cybersecurity professionals felt compelled to act. We recognized a critical need for a more proactive and effective approach to cybersecurity.
              </p>
              <br />
              <p className="text-justify lg:text-[1.25vw] md:text-[1.7vw] sm:text-[2vw] text-[2.5vw]">
                Our journey began with a belief in the power of knowledge. We pioneered "research-driven trainings" that emphasized hands-on experience and the exploration of emerging vulnerabilities. This innovative approach not only enhanced the skills of aspiring cybersecurity professionals but also fostered a deeper understanding of the evolving threat landscape, empowering them to become the next generation of cyber defenders.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#185BD8] lg:mt-28 md:mt-20 mt-14  flex justify-center">
          <div className="w-[85%] text-white grid grid-cols-2 xl:gap-36 lg:gap-28 md:gap-20 gap-16 lg:py-20 md:py-16 sm:py-12 py-10">
            <div>
              <div className="flex justify-center">
                <Image src={AimLogo} className=" sm:w-1/2 w-1/2 mb-3" alt="Eye Image" />
              </div>
              <div className="flex justify-center font-semibold lg:text-[3vw] md:text-[4vw] text-[5vw]">
                Mission
              </div>
              <div className="flex justify-center">
                <p className="text-center mt-5 lg:text-[1.4vw] md:text-[2vw] text-[2.5vw] md:w-[90%] w-[100%]">
                  We uphold the highest ethical standards in every interaction, ensuring transparency and trustworthiness in all we do.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <Image src={EyeLogo} className=" sm:w-1/2 w-1/2 mb-3" alt="Eye Image" />
              </div>
              <div className="flex justify-center font-semibold lg:text-[3vw] md:text-[4vw] text-[5vw]">
                Vission
              </div>
              <div className="flex justify-center">
                <p className="text-center mt-5 lg:text-[1.4vw] md:text-[2vw] text-[2.5vw] md:w-[90%] w-[100%]">
                  We uphold the highest ethical standards in every interaction, ensuring transparency and trustworthiness in all we do.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20 flex flex-col items-center justify-center ">
          <div className="my-12 md:my-16 lg:my-20 flex justify-start w-[90%] md:w-[85%] font-body lg:text-[3vw] md:text-[4vw] text-[5vw]">The Pillars of Astraliva</div>
          <div className="flex justify-center">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[85%]">
              <div className="flex justify-center ">
                <div className="p-6 md:p-4 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={Icon1} alt="Nothing" />
                  </div>
                  <div className="lg:text-[1.5vw] md:text-[2vw] xl:text-[1.2vw] 2xl:xl:text-[1vw] text-[2.5vw] mb-5">Visionary Exploration </div>
                  <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.4vw] lg:mb-5">
                    We dare to dream beyond boundaries, pioneering new possibilities for a transformative future,
                  </p>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="p-6 md:p-4 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={Icon1} alt="Nothing" />
                  </div>
                  <div className="lg:text-[1.5vw] md:text-[2vw] xl:text-[1.2vw] 2xl:xl:text-[1vw] text-[2.5vw] mb-5">Collective Brilliance</div>
                  <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.4vw] lg:mb-5">
                    We thrive on the strength of unity, where diverse ideas come together to create extraordinary solutions
                  </p>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="p-6 md:p-4 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={Icon1} alt="Nothing" />
                  </div>
                  <div className="lg:text-[1.5vw] md:text-[2vw] xl:text-[1.2vw] 2xl:xl:text-[1vw] text-[2.5vw] mb-5">Leadership</div>
                  <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.4vw] lg:mb-5">
                    We lead with integrity and purpose, inspiring others to reach their fullest potential and drive collective success,
                  </p>
                </div>
              </div>
              {/* <div className="flex justify-center">
                <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={Icon1} alt="Nothing" />
                  </div>
                  <div className="text-[1.5vw] mb-5">Collective Brilliance </div>
                  <p>
                    We thrive on the strength of unity, where diverse ideas come together to create extraordinary solutions
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="p-6 border-[rgba(0,0,0,0.36)] border-[1px] relative rounded-xl">
                  <Image
                    src={box_bg_img}
                    alt="Nothing"
                    className="absolute w-[100%] top-0 left-0 rounded-xl"
                  />
                  <div className="rounded-lg my-8 bg-[#185BD8] p-2 w-fit">
                    <Image className="w-10" src={Icon1} alt="Nothing" />
                  </div>
                  <div className="text-[1.5vw] mb-5">Leadership </div>
                  <p>
                    We lead with integrity and purpose, inspiring others to reach their fullest potential and drive collective success,
                  </p>
                </div>
              </div> */}
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
  )
}
