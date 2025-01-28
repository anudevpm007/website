
import GetInTouch from "../Components/GetInTouch/GetInTouch";
import Menu from "../Components/Home/Menu";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import AimImg from "@/public/image/carrier/trance.png";
import BagIcon from "@/public/image/carrier/BagIcon.png";
import NoteIcon from "@/public/image/carrier/NoteIcon.png";
import Location from "@/public/image/carrier/ListIcon/Location.png";
import Bag from "@/public/image/carrier/ListIcon/Mail.png";
import Phone from "@/public/image/carrier/ListIcon/Phone.png";

export default function carrier() {
  

  return (
    <div className="relative">
      
      <GetInTouch/>
      <Menu />
      <div className="py-36">
        <div className="text-[8vw] font-body flex justify-center">
          JOIN <span className="ml-4  text-[#185BD8] font-heading">OUR TEAM</span>
        </div>
        <div className="flex justify-center">
          <p className="flex justify-center w-[69%] text-[1.3vw] mt-0 text-center">
            At Astraliva, we are shaping the future of cybersecurity with
            innovation, passion, and expertise. If you're looking to make an
            impact in the world of digital security, you’ve come to the right
            place.
          </p>
        </div>
      </div>
      
      <div id="bodySec">
      <div className="flex justify-center bg-[#2f80ed] py-16">
        <div className="w-[85%] grid grid-cols-3 gap-20">
          <div>
            <div className="flex justify-center">
              <Image src={AimImg} className="w-[30%]" alt="N?A" />
            </div>
            <div className=" font-body flex justify-center text-[3.2vw] text-white">
              Mission
            </div>
            <p className="font-body flex justify-center text-[1.2vw] mt-2 text-white text-center">
              By prioritizing cybersecurity for businesses globally, we aim to
              enhance safety for all individuals. Utilizing our research and
              innovation, we seek to enhance the safety of all individuals in
              the digital realm. A fresh cohort of cybersecurity professionals
              will be trained to defend against possible risks.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <Image src={AimImg} className="w-[30%]" alt="N?A" />
            </div>
            <div className="font-body flex justify-center text-[3.2vw] text-white">
              Vision
            </div>
            <p className="font-body flex justify-center text-[1.2vw] mt-2 text-white text-center">
              Our mission is to protect businesses from online threats by
              offering expert security assessments, creating innovative
              solutions, ensuring compliance, and educating future cybersecurity
              professionals. We identify vulnerabilities, provide cutting edge
              solutions, and foster collaboration through conferences to stay
              ahead of evolving risks and protect organizations.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <Image src={AimImg} className="w-[30%]" alt="N?A" />
            </div>
            <div className="font-body flex justify-center text-[3.2vw] text-white">
              Purpose
            </div>
            <p className="font-body flex justify-center text-[1.2vw] mt-2 text-white text-center">
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
          <div className="w-[85%]">
            <div className="font-body text-[2.4vw] font-light">
              A company as unique as you
            </div>
            <p className="font-body mt-10 text-[1.1vw] text-[#303030]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-3 mt-10 gap-10">
              <div className="py-4 rounded-2xl px-8 border-black border-[1px]">
                <div>
                  <div className="bg-[#185BD8] rounded-md p-1 my-5  w-fit">
                    <Image src={BagIcon} alt="N?A" />
                  </div>
                </div>
                <div className="text-[1.3vw] font-bold">No Hierarchy</div>
                <p className="mt-5">
                  We understand your specific security challenges and customize
                  our testing approach to fit your business perfectly
                </p>
              </div>
              <div className="py-4 rounded-2xl px-8 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-1 my-5  w-fit">
                      <Image src={BagIcon} alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[1.3vw] font-bold">
                    Flexible Working Hours
                  </div>
                  <p className="mt-5">
                    Our team of experience cybersecurity professionals combines
                    years of expertise with the latest industry insights to ensure
                    your application remains secure
                  </p>
                </div>
              </div>
              <div className="py-4 rounded-2xl px-8 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-1 my-5  w-fit">
                      <Image src={BagIcon} alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[1.3vw] font-bold">
                    Health and Wellness
                  </div>
                  <p className="mt-5">
                    Our security professionals use advanced techniques and
                    thorough research to uncover hidden vulnerabilities, including
                    CVEs, business logic flaws, and sophisticated attack
                    strategies
                  </p>
                </div>
              </div>
              <div className="py-4 rounded-2xl px-8 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-1 my-5  w-fit">
                      <Image src={BagIcon} alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[1.3vw] font-bold">
                    Recognition and Rewards
                  </div>
                  <p className="mt-5">
                    Astraliva helps you meet key industry standards like
                    GDPR,PCI-DSS,and HIPAA ensuring your app stays compliant and
                    avoids costly fines
                  </p>
                </div>
              </div>
              <div className="py-4 rounded-2xl px-8 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-1 my-5  w-fit">
                      <Image src={BagIcon} alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[1.3vw] font-bold">Work Life Balance</div>
                  <p className="mt-5">
                    We don’t just identify vulnerabilities we collaborate with you
                    to implement strategies that prevent future threats and
                    strengthen your overall security
                  </p>
                </div>
              </div>
              <div className="py-4 rounded-2xl px-8 border-black border-[1px]">
                <div>
                  <div>
                    <div className="bg-[#185BD8] rounded-md p-1 my-5  w-fit">
                      <Image src={BagIcon} alt="N?A" />
                    </div>
                  </div>
                  <div className="text-[1.3vw] font-bold">
                    Respectful Workspace
                  </div>
                  <p className="mt-5">
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
          <div className="w-[85%]">
            <div className=" font-body text-[3vw] font-light">Open Positions</div>
            <p className="font-body mt-8 text-[1.4vw] text-[#383838be]">
              Explore our current opportunities and find the role that fits your
              skills and aspirations:
            </p>
            <div className="mt-10">
              <div className="grid grid-cols-12 gap-5 py-5 rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="col-span-2 flex items-center justify-center">
                  <div className="bg-[#185BD8] rounded-xl w-[7vw] h-[7vw] flex justify-center items-center">
                    <Image className="w-[90%]" src={NoteIcon} alt="N?A" />
                  </div>
                </div>
                <div className="col-span-7">
                  <div>
                    <div className="text-[1.8vw] font-bold">
                      Associate Consultant Audit
                    </div>
                    <div className="grid grid-cols-3 w-[60%] pr-3 mt-5">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
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
                    <Image className="w-[90%]" src={NoteIcon} alt="N?A" />
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
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
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
                    <Image className="w-[90%]" src={NoteIcon} alt="N?A" />
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
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
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
                    <Image className="w-[90%]" src={NoteIcon} alt="N?A" />
                  </div>
                </div>
                <div className="col-span-7">
                  <div>
                    <div className="text-[1.8vw] font-bold">Anaylist</div>
                    <div className="grid grid-cols-3 w-[60%] pr-3 mt-5">
                      <div className="flex items-center p-0 -ml-1">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div> 3-5 years</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
                          alt="N?A"
                        />
                        <div>Calicut</div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Location}
                          className="w-[1.8vw] m-0 p-0"
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
          </div>
        </div>
        <div className="flex justify-center text-center text-[8vw] font-bold text-[#185BD8] leading-none mt-20 font-headingHeavy">BUILD THE FUTURE,<br />TOGETHER</div>
        <Footer />
      </div>

    </div>
  );
}
