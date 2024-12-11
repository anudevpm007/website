import React from 'react'
import "./MainServices.css"
import HomeMenu from '../Home/Home_menu/HomeMenu'
import HomeFooter from '../Home/Home_footer/HomeFooter'


const MainSerBlogSmallSec = () => {
  return (
      <div id='MainSerBlogSmallSec' className='col-lg-5'>
          <img src={require("../MainServices/image/img2.png")} alt="N?A" />
          <div id='MainSerBlogSmallSec_TextCon'>
              <div id='MainSerBlogSmallSec_Date' >Sep 26, 2021</div>
              <div id='MainSerBlogSmallSec_heading' >GPT-3 and Open AI is the future. Let us exlore how it is?</div>
              <div id='MainSerBlogSmallSec_Read'>Read Full Article</div>
          </div>
      </div>
  );
}


export default function MainServices() {
  return (
    <div style={{ backgroundColor: "#040C18" }}>
      <div>
        <HomeMenu colorOut={"white"} />
      </div>
      <div id='HeaderMainSer'>
        <div>
          <div id='HeaderMainSerBigHead'>Web Application Penetration Testing</div>
          <div id='HeaderMainSerHead1'>In-Depth Security Assessment of Your Web Application to Identify Vulnerabilities.</div>
          <div id='HeaderMainSerHead2'><div>Our Web Application Penetration Testing service provides a comprehensive security assessment to identify and exploit vulnerabilities within your web application. Using advanced testing techniques, we simulate real-world attacks to uncover weaknesses, helping you protect sensitive data, ensure compliance, and strengthen your defenses against potential security breaches.</div></div>
        </div>
      </div>
      <div id='HeaderMainSerForm'>
        <div>
          <div className='row'>
            <div id='HeaderMainSerInput1' className="col-7">
              <input type="text" placeholder='Your Email Address' />
            </div>
            <div id='HeaderMainSerInput2' className="col-4">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
      {/* Body section */}
      <div id='MainSerBody'>
        <div id='MainCardSer'>
          <div>
            <div id='MainCardSer_List1'>
              <div className='MainCardSer_Bar'></div>
              <div id='MainCardSer_heading1'>What is webapplication  Security</div>
              <div id='MainCardSer_Pera1'>Web application security involves protecting your website or web app from cyber threats by identifying and fixing vulnerabilities. It includes measures like data encryption, secure authentication, input validation, and regular testing to safeguard against attacks and ensure safe user experiences.</div>
            </div>
            <div id='MainCardSer_BigHeading'>
              The Roadmap of the Web Application Security Testing
            </div>
            <div id='MainCardSer_Lists' >
              <div className='row'>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Scope Definition & Planning</div>
                  <div className='MainSubCardSer_Pera'>Align security objectives, identify key assets, and define testing boundaries to ensure comprehensive and targeted assessments for optimal results.</div>
                </div>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Secure Communication Protocol</div>
                  <div className='MainSubCardSer_Pera'>Set up encrypted communication channels to ensure confidential, real-time collaboration and seamless information exchange throughout the engagement.</div>
                </div>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Penetration Testing</div>
                  <div className='MainSubCardSer_Pera'>Simulate advanced attack techniques to identify critical vulnerabilities in your web application, infrastructure, and network, providing actionable insights for improved security posture.</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Scope Definition & Planning</div>
                  <div className='MainSubCardSer_Pera'>Align security objectives, identify key assets, and define testing boundaries to ensure comprehensive and targeted assessments for optimal results.</div>
                </div>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Secure Communication Protocol</div>
                  <div className='MainSubCardSer_Pera'>Set up encrypted communication channels to ensure confidential, real-time collaboration and seamless information exchange throughout the engagement.</div>
                </div>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Penetration Testing</div>
                  <div className='MainSubCardSer_Pera'>Simulate advanced attack techniques to identify critical vulnerabilities in your web application, infrastructure, and network, providing actionable insights for improved security posture.</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Scope Definition & Planning</div>
                  <div className='MainSubCardSer_Pera'>Align security objectives, identify key assets, and define testing boundaries to ensure comprehensive and targeted assessments for optimal results.</div>
                </div>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Secure Communication Protocol</div>
                  <div className='MainSubCardSer_Pera'>Set up encrypted communication channels to ensure confidential, real-time collaboration and seamless information exchange throughout the engagement.</div>
                </div>
                <div className='col-4'>
                  <div className='MainCardSer_Bar'></div>
                  <div className='MainSubCardSer_Heading'>Penetration Testing</div>
                  <div className='MainSubCardSer_Pera'>Simulate advanced attack techniques to identify critical vulnerabilities in your web application, infrastructure, and network, providing actionable insights for improved security posture.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id='MainSerBodySec'>
        <div className='row'>
          <div className='col-4'>
            <div className='MainSerBodySec_Heading'>
              Why Choose Astraliva for Web Application Security Testing?
            </div>
            <div className='MainSerBodySec_Heading'>
              Unlock Limitless Security with Astra’s Web Application Penetration Testing
            </div>
            <div className='MainSerBodySec_Pera'>
              Your web application is more than just a tool—it’s the backbone of your business. At Astra, we push the boundaries of what’s possible in security, identifying hidden vulnerabilities and ensuring your digital assets are protected from evolving threats.
            </div>
            <div className='MainSerBodySec_Pera'>
              With our expert penetration testing services, we don’t just find weaknesses; we provide actionable insights that empower you to strengthen your defences. Experience the peace of mind that comes with knowing your application is secure, resilient, and ready to face any challenge.
            </div>
          </div>
          <div className='col-6'>
            <div id='MainSerBodySec_Table'>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'>Top-Notch Security</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>We deliver industry-leading security, ensuring your web application is protected against the latest threats with high-class defence strategies.</div>
              </div>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'>Expert Security Team</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>Our skilled team of cybersecurity experts brings years of experience and cutting-edge knowledge to keep your application secure.</div>
              </div>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'>Exceeding Client Expectations</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>We go beyond standard testing, providing tailored solutions that meet and exceed your unique security needs.</div>
              </div>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'>Helping You Achieve Compliance</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>Astraliva helps you meet key industry standards like GDPR, PCI-DSS, and HIPAA, ensuring your app stays compliant and avoids costly fines.</div>
              </div>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'> Risk Mitigation</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>We don’t just find vulnerabilities—we work with you to prevent future threats, building a resilient security posture for your business.</div>
              </div>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'>Clear, Actionable Reporting</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>Receive straightforward, detailed reports with clear recommendations on fixing vulnerabilities, making it easy to understand and act.</div>
              </div>
              <div className='row'>
                <div className='col-5' id=''>
                  <div className='MainCardSer_Bar'></div>
                  <div id='MainSerBodySec_TableHeading'>To Your Business Needs</div>
                </div>
                <div id='MainSerBodySec_TablePera' className='col-6'>We understand your specific security challenges and customize our testing approach to fit your business and application perfectly.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='MainSerBodyThird'>
        <div className='row'>
          <div className='col-8' id='MainSerBodyThird_Book'>
            <div id='MainSerBodyThird_BookH1'>Request Early Access to Get Started</div>
            <div id='MainSerBodyThird_BookH2'>Register today & start exploring the endless possibilities.</div>
          </div>
          <div className="col" id='MainSerBodyThird_BookIn' >
            <a href='/Bookingconselting'>Book Your free consultency</a>
          </div>
        </div>
      </div>
      <div id='MainSerBody4'>
        <div id='MainSerBody4_BigHeading'>
          <div id='MainSerBody4_H1'>
            Hacker's Journal
          </div>
          <div id='MainSerBody4_H2'>
            Astraliva
          </div>
        </div>
      </div>
      <div id='MainSerBlog'>
        <div className='row'>
          <div className='col-5' id='MainSerBlog_BigSec'>
            <div>
              <img src={require("../MainServices/image/img1.png")} alt="N?A" />
              <div id='MainSerBlog_BigTextSec1'>
                <div>
                  <div id='MainSerBlog_BigSecDate' >
                    Sep 26, 2021
                  </div >
                  <div id='MainSerBlog_BigSecHeading'>
                    GPT-3 and Open  AI is the future. Let us exlore how it is?
                  </div>
                </div>
                <div id='MainSerBlog_BigSecSHeading'>
                  Read Full Article
                </div>
              </div>
            </div>
          </div>
          <div className='col-7' id='MainSerBlog_SmallSec'>
            <div className='row'>
              <MainSerBlogSmallSec />
              <MainSerBlogSmallSec />
              <MainSerBlogSmallSec />
              <MainSerBlogSmallSec />
            </div>
          </div>
        </div>
      </div>
      <div>
        <HomeFooter BackColor={"#040C18"} />
      </div>
    </div>
  )
}
