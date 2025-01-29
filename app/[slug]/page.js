
import Menu from "../Components/Home/Menu";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import QA from "./QA";
import Head_img from "@/public/image/Services/Header.png";
import BTN_Arrow from "@/public/image/Home_1/BTN_Arrow.png";
import EventSym from "@/public/image/Home_1/EventSymbol.png";
import FLowChart from "@/public/image/Services/FlowChart.png";
import EventBg from "@/public/image/Home_1/EventBG.png";
import QAdb from "./QAdb";
import dbServices from "../db/dbServices";
import { notFound } from "next/navigation";
import GetInTouch from "../Components/GetInTouch/GetInTouch";



export default async function page({ params }) {
  var ref = 0;
  var i;

  var { slug } = await params
  slug = slug.replaceAll("%20", " ")
  var id = (slug.split(" "))[0]
  slug = slug.replace("2", "")
  slug = slug.replace(" ", "")
  
  console.log(id);
  
  (dbServices[parseInt(id)].content).map((data, index) => {
    if (data.heading === slug && ref === 0) {
      ref = 1
      i = index;
    }
  })
  if (ref===1 ){
    return (
      <div>
        <GetInTouch />
        <Menu />
        <div className="relative">
          <Image src={Head_img} alt="Heading Image" />
          <div className="absolute top-[35%] left-[8%]">
            <div className="text-[5.4vw] font-heading leading-tight text-[#0858ED]">
              {
                (dbServices[id].content)[i].heading1
              }
            </div>
            <div className="text-[4vw] font-body">
              {
                (dbServices[id].content)[i].heading2
              }
            </div>
            <p className="text-[1.5vw] font-body">
              Discover and fix critical vulnerabilities before they impact your
              business.
            </p>
          </div>
        </div>
        <div id="bodySec">
          <div className="bg-[#185BD8] flex justify-center">
            <div className="w-[85%] mt-10">
              <div className="text-white text-[3vw] font-body">
                Why is <span className="font-heading">Web Application</span>{" "}
                Security Matters
              </div>
              <p className="text-white text-[1.1vw] font-body mt-5">
                Web application security is crucial for protecting your business
                from cyber threats. Vulnerabilities in your web app can lead to data
                breaches, financial loss, and damage to your reputation. By securing
                your web applications, you safeguard sensitive data, maintain
                customer trust, and ensure business continuity.
              </p>
              <div className="bg-white rounded-md flex items-center mt-10 flex-col mb-10">
                <div className="flex justify-center text-[3vw] mt-5 font-heading text-[#185BD8]">
                  What We Focus On
                </div>
                <div className="w-[85%] mt-10 mb-10 text-[#185BD8] font-headingSemiBold text-center text-[1.5vw]">
                  We specialize in securing business logic, CVE vulnerabilities, and
                  component-based vulnerabilities, setting Astraliva apart from
                  traditional security methods.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <div className="w-[85%]">
              <div className="text-[3vw] font-body">
                Unlock Limitless Security with Astra’s{" "}
                <span className="text-[#185BD8] font-heading">Web Application</span>
              </div>
              <div className="text-[#185BD8] text-[3vw] font-heading">
                Penetration Testing
              </div>
              <p className="mt-5 text-[1.1vw]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <div className="mt-10 mb-10">
                <Image src={FLowChart} alt="FLowChart" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center relative bg-transparent mt-28 mb-[72px]">
              <Image
                className="absolute object-fill -z-10"
                src={EventBg}
                alt="N?A"
              />
              <Image
                className="absolute scale-90 right-80"
                src={EventSym}
                alt="N?A"
              />
              <div className="w-[85%] ">
                <div className="text-white text-[2.2vw] mt-20 font-heading">
                  Request Early Access to Get Started
                </div>
                <div className="text-white text-[2.2vw] mt-5 font-body">
                  Register today & start exploring the endless
                  <br />
                  possibilities.
                </div>
                <button className="font-body flex justify-center p-3 px-10 rounded-lg mt-6 items-center bg-white">
                  Get started
                  <span className="ml-2">
                    <Image src={BTN_Arrow} alt="N?A" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center bg-[#F1F5F7]">
              <div className="w-[85%] ">
                <div className="text-[2.5vw] mt-10 mb-20 font-body">
                  Why Choose
                  <span className="font-heading text-[#185BD8]">Astraliva</span> for
                  Your App's Security
                </div>
                <div className="grid grid-cols-3 gap-8 mt-10 mb-16">
                  <div className="px-10 py-10 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading text-[1.3vw]">Trusted Experts </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body mt-8">
                      Skilled professionals with proven experience in tackling
                      advanced security threats.
                    </p>
                  </div>
                  <div className="px-10 py-10 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading text-[1.3vw]">
                      Customized Testing
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body mt-8">
                      Security tests tailored to your app’s unique needs.
                    </p>
                  </div>
                  <div className="px-10 py-10 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading text-[1.3vw]">
                      Complete Coverage{" "}
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body mt-8">
                      Comprehensive testing using both manual and automated methods.
                    </p>
                  </div>
                  <div className="px-10 py-10 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading text-[1.3vw]">
                      Industry Standards
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body mt-8">
                      We follow global best practices like OWASP ASVS for strong
                      security.
                    </p>
                  </div>
                  <div className="px-10 py-10 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading text-[1.3vw]">
                      Customized Testing{" "}
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body mt-8">
                      Easy-to-understand reports with actionable steps to fix
                      issues.
                    </p>
                  </div>
                  <div className="px-10 py-10 rounded-xl border-[#BBBBBB] border-[0.5px] shadow-[5px_6px_5px_1px_rgba(0,0,0,0.18)]">
                    <h2 className="font-heading text-[1.3vw]">
                      Support for Compliance
                    </h2>
                    <div className="w-[30%] h-1 bg-[#185BD8] mt-5 mb-5"></div>
                    <p className="font-body mt-8">
                      Help with meeting security standards and certifications like
                      PCI-DSS, GDPR, and ISO 27001.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[85%]">
              <div className="font-body text-[3vw] mt-10">
                Frequently Asked Questions
              </div>
              <div className="flex justify-center">
                <div className="w-[95%]">
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
          <Footer />
        </div>
      </div>
    );
  }
   else {
    notFound();
  }
}
