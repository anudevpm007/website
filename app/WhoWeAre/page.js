import Menu from "../Components/Home/Menu"
import GetInTouch from "../Components/GetInTouch/GetInTouch"
import Image from "next/image"
import Footer from "../Components/Footer/Footer"
import AimLogo from "@/public/image/WhoAreWe/AimLogo.png"
import EyeLogo from "@/public/image/WhoAreWe/EyeLogo.png"
import Img1 from "@/public/image/WhoAreWe/Maskgroup.png"
import Icon1 from "@/public/image/WhoAreWe/Icon/Icon1.png"
import CyberImg from "@/public/image/WhoAreWe/CyberImg.png"

export default function Page() {
  return (
    <div>

      <Menu />
      <GetInTouch />
      <div id="bodySec" >
      <div className="relative">
        <div className="absolute -z-10 w-full h-[1000px] Gradient"></div>
        <div className="pt-40">
          <div className="flex justify-center font-headingHeavy text-[6vw] text-black">WHO <span className="ml-3 text-[#185BD8]">WE ARE?</span></div>
          <div className="flex justify-center">
            <p className="font-body text-[1.2vw] w-[45%] text-center">Astraliva is a leading cybersecurity company committed to safeguarding
              digital assets and ensuring resilience against ever evolving threats.</p></div>
        </div>
      </div>
        <div className="flex justify-center mt-60">
          <div className="grid grid-cols-2 gap-14 w-[85%]">
            <div>
              <div className="text-[3.1vw] w-[90%]">How and Why <br />We Founded Astraliva</div>
              <p className="text-justify text-[1.25vw] mt-5">
                Astraliva was born from a deep-seated concern: the escalating frequency and sophistication of cyberattacks. Witnessing how these attacks not only disrupted businesses but also threatened individuals, a group of passionate cybersecurity professionals felt compelled to act. We recognized a critical need for a more proactive and effective approach to cybersecurity.
              </p>
              <br />
              <p className="text-justify text-[1.25vw]">
                Our journey began with a belief in the power of knowledge. We pioneered "research-driven trainings" that emphasized hands-on experience and the exploration of emerging vulnerabilities. This innovative approach not only enhanced the skills of aspiring cybersecurity professionals but also fostered a deeper understanding of the evolving threat landscape, empowering them to become the next generation of cyber defenders.
              </p>
            </div>
            <div>
              <Image src={Img1} alt="Image1" />
            </div>
          </div>
        </div>
        <div className="bg-[#185BD8] mt-28 flex justify-center">
          <div className="w-[85%] text-white grid grid-cols-2 gap-36 py-20">
            <div>
              <div className="flex justify-center">
                <Image src={AimLogo} alt="Eye Image" />
              </div>
              <div className="flex justify-center font-semibold text-[3vw]">
                Mission
              </div>
              <div className="flex justify-center">
                <p className="text-center mt-5 text-[1.4vw] w-[90%]">
                  We uphold the highest ethical standards in every interaction, ensuring transparency and trustworthiness in all we do.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <Image src={EyeLogo} alt="Eye Image" />
              </div>
              <div className="flex justify-center font-semibold text-[3vw]">
                Vission
              </div>
              <div className="flex justify-center">
                <p className="text-center mt-5 text-[1.4vw] w-[90%]">
                  We uphold the highest ethical standards in every interaction, ensuring transparency and trustworthiness in all we do.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="my-20 flex justify-center font-body text-[3vw]">The Pillars of Astraliva</div>
          <div className="flex justify-center">
            <div className="grid gap-10 grid-cols-2 w-[85%]">
              <div>
                <Image src={CyberImg} alt="Cyber Image" />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <div className="grid grid-cols-12 gap-2 m-8">
                    <div className="col-span-2 flex justify-center items-center">
                      <div className="flex justify-center items-center rounded-full p-1 bg-[#185BD8]" >
                        <Image src={Icon1} alt="shiled icon" />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <div className="flex justify-start flex-col">
                        <h1 className="font-headingSemiBold text-[1.4vw]">Visionary Exploration</h1>
                        <p className="font-body text-[0.9vw] mt-2">We dare to dream beyond boundaries, pioneering new possibilities for a transformative future.</p>
                      </div>
                    </div>
                  </div>


                  {/* Image */}


                  <div className="grid grid-cols-12 gap-2 m-8">
                    <div className="col-span-2 flex justify-center items-center">
                      <div className="flex justify-center items-center rounded-full p-1 bg-[#185BD8]" >
                        <Image src={Icon1} alt="shiled icon" />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <div className="flex justify-start flex-col">
                        <h1 className="font-headingSemiBold text-[1.4vw]">Visionary Exploration</h1>
                        <p className="font-body text-[0.9vw] mt-2">We dare to dream beyond boundaries, pioneering new possibilities for a transformative future.</p>
                      </div>
                    </div>
                  </div>


                  {/* Image */}


                  <div className="grid grid-cols-12 gap-2 m-8">
                    <div className="col-span-2 flex justify-center items-center">
                      <div className="flex justify-center items-center rounded-full p-1 bg-[#185BD8]" >
                        <Image src={Icon1} alt="shiled icon" />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <div className="flex justify-start flex-col">
                        <h1 className="font-headingSemiBold text-[1.4vw]">Visionary Exploration</h1>
                        <p className="font-body text-[0.9vw] mt-2">We dare to dream beyond boundaries, pioneering new possibilities for a transformative future.</p>
                      </div>
                    </div>
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
