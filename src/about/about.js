import React, { Component } from 'react'
import "./about.css"
import Menu from "../Menu/Menu";
import { CardImg } from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <div id='about'>
                <div id='about_header'>
                    <Menu />
                    <img alt='N?a' src={require("./image/about_header_img1.jpg")} />
                    <div className='container' id='about_heading'>
                        <div className='row' id='about_heading_H'>
                            <h2>INKOGSEK</h2>
                        </div>
                        <div className='row' id='about_heading_peragraph'>
                            <p>Integrity and innovation in cybersecurity change the Integrity use something different</p>
                        </div>
                    </div>
                </div>
                <div id='about_center'>
                    <div className='row' id='about_center_box'>
                        <div className='col' id='about_center_1'>
                            <div>
                                <h6>VISION</h6>
                            </div>
                        </div>
                        <div className='col' id='about_center_2'>
                            <p>Our journey begins with a shared dream-one where hacking, learning, and problem-solving are not just activities, but a way of life. With a focus on continuous research and hands-on experimentation, we delve into the depths of cybersecurity to uncover vulnerabilities and develop robust solutions.</p>
                        </div>
                    </div>
                    <div className='row' id='about_center_box'>
                        <div className='col' id='about_center_1'>
                            <div>
                                <h6>MISSION</h6>
                            </div>
                        </div>
                        <div className='col' id='about_center_2'>
                            <p>understanding threats is the first step toward securing the digital landscape. Our mission is to leverage our expertise and insights to safeguard systems, protect data, and enhance the security posture of organizations around the globe.</p>
                        </div>


                    </div>
                    <div id='about_center_Approach'>
                        <div id='about_center_Approach_1'>
                            <div id='about_center_Approach1_1'>
                                <h3>Our Approach</h3>
                                <p style={{ fontSize: "1.1vw" }}>Our Approach At [Your Company Name), our approach to cybersecurity is designed to be as dynamic and proactive as the threats we aim to defend against. Our strategy integrates cutting-edge innovation, deep client understanding, thorough vulnerability analysis, and unparalleled support to provide comprehensive protection for your assets. about understanding and resolving the root causes. Our team conducts comprehensive.</p>
                            </div>
                        </div>
                    </div>
                    <div id='about_bullet_point_-1' >
                        <div id='about_bullet_point' >
                            <ul>
                               <li>we believe that understanding threats is the first step toward securing the digital landscape. Our mission is to leverage our.</li> 
                               <li>expertise and insights to safeguard systems, protect data, and enhance the security posture of organizations around the globe</li>
                               <li>expertise and insights to safeguard systems, protect data, and enhance the security posture of organizations around the globe</li>
                            </ul>
                        </div>
                    </div>
                    <div id='progress_section'>
                        <div className='row' id='progress_section_box'>
                            <div className='col-3'>
                                40+ client
                            </div>
                            <div className='col-3'>
                                4+ Global presencess
                            </div>
                            <div className='col-3'>
                                98% referals
                            </div>
                        </div>
                    </div>
                    <div id='core_value_heading'>
                    <h3>Our core value</h3>
                    </div>
                    <div id='core_value'>
                    
                        <div id='core_value_chart'>
                            
                            <CardImg id='core_value_chart_img' src={require("./image/pngwing.com.png")}/>
                        </div>
                    </div>
                </div>
                <div id='about_footer'>

                </div>
            </div>
        )
    }
}
