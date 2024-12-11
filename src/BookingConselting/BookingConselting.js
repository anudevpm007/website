import React from 'react'
import HomeMenu from '../Home/Home_menu/HomeMenu'
import "./BookingConselting.css"
import HomeFooter from "../Home/Home_footer/HomeFooter"
import DropdowncontrycodeBook from './ContryCode/DropdowncontrycodeBook'


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


export default function BookingConselting() {
    return (
        <div id='BookingConselting'>
            <div id='BookingCon_menu'>
                <HomeMenu colorOut={"white"} />
            </div>
            <div id='BookingCon_Header'>
                <div>
                    <div id='BookingCon_Big'>
                        Book Your Free Consulting
                    </div>
                    <div id='BookingCon_Small'>
                        Unlock Expert Insights and Tailored Solutions for Your Business
                    </div>
                    <div id='BookingCon_Pera'>
                        Are you looking for expert guidance to navigate the challenges of your business or personal projects? Take advantage of our Free Consulting service, where we provide you with actionable advice, strategies, and insights tailored to your specific needs. Whether you're starting a new venture, scaling your existing business, or seeking solutions for a particular challenge, our team of experienced consultants is here to help.

                        During your free session, we’ll explore your objectives, identify opportunities for growth, and discuss innovative approaches to overcoming obstacles. Our goal is to empower you with the knowledge and tools to make informed decisions and drive meaningful results.

                        Booking your free consultation is simple—just select a time that works for you, and we’ll handle the rest. You’ll walk away from the session with a clearer vision and a roadmap for success.

                        Don’t miss out on this opportunity to gain valuable insights and take your business or project to the next level. Book your Free Consulting session today!
                    </div>
                </div>
            </div>
            <div id='BookingConPlate'>
                <div>
                    <div id='BookingConPlate_con'>
                        <div id='BookingConPlate_TopWrite'>
                            <div className='BookingCon_Bar'></div>
                            <div id='BookingConPlate_TopHeading'>What You Have to Do for the Free Consultancy</div>
                            <div id='BookingConPlate_TopPera'>Simply fill out a brief form with your details, choose a convenient time, and prepare any questions or challenges you’d like to address. Then, join the session, and our experts will provide tailored insights to help you move forward with your goals—at no cost!</div>
                        </div>
                        <div id='BookingConPlate_TopWrite1'>

                            <div id='BookingConPlate_TopHeading1'>Unlock Your Free Consultancy Get Start Here !</div>
                            <div id='BookingConPlate_TopPera1'>Fill out the form below to kickstart your journey toward expert guidance and actionable solutions. Let’s get started!</div>
                        </div>
                        <div id='BookingConPlate_Form'>
                            <form method="post">
                                <div id='BookingConPlate_FormLayer1' className='row'>
                                    <div className='col-5'>
                                        <label htmlFor="FirstName">First Name</label>
                                        <input type="text" name='FirstName' />
                                    </div>
                                    <div className='col-5'>
                                        <label htmlFor="LastName">Last Name</label>
                                        <input type="text" name='LastName' />
                                    </div>
                                </div>
                                <div id='BookingConPlate_FormLayer2' className='row'>
                                    <div className='col-11'>
                                        <label htmlFor="WorkingEmail">Working Email*</label>
                                        <input type="text" name='LastName' />
                                    </div>
                                </div>
                                <div id='BookingConPlate_FormLayer3' className='row'>
                                    <div className='col-11'>
                                        <label htmlFor="CompanyName">Company Name</label>
                                        <input type="text" name='LastName' />
                                    </div>
                                </div>
                                <div id='BookingConPlate_FormLayer4' className='row'>
                                    <div className='row' id='BookingConPlate_FormLayer4LaberRow'>
                                        <div className='col-11' id='BookingConPlate_FormLayer4Laber'>
                                            <label htmlFor="PhoneNumber">Phone Number*</label>
                                        </div>
                                    </div>
                                    <div className='col-2' id='BookingConPlate_FormCcDiv'>
                                        <DropdowncontrycodeBook />
                                    </div>
                                    <div className='col-8'>
                                        <input type="text" name='PhoneNumber' />
                                    </div>
                                </div>
                                <div id='BookingConPlate_FormLayer5' className='row'>
                                    <div className='col-11'>
                                        <input type="button" value="Submit" />
                                    </div>
                                </div>
                            </form>
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
            <div id='MainSerFooter'>
                <HomeFooter BackColor={"#040C18"} />
            </div>
        </div>
    )
}
