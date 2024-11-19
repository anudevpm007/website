import React, { Component, useEffect, useRef } from "react";
import "./Main_services.css";
import Services_Main_data from "../Data/Service_Main_data";
import { CardImg, CardText, CardTitle } from "react-bootstrap";
import Menu from "../Menu/Menu";
import Home_footer from "../Home/Home_footer/Home_footer";
import { Link } from "react-router-dom";


export default class Main_services extends Component {
  render() {
    var url = window.location.pathname;
    var parts = url.split("/");
    var idu = parts[parts.length - 1];
    var i = 0;
    var j = 0;

    window.scroll(0, 0);

    while (i < Services_Main_data.length) {
      if (Services_Main_data[i].SM_id.toString() == idu) {
        j = 1;
        break;
      }
      i++;
    }




    // output

    if (j == 1) {
      this.state = {
        media: Services_Main_data[i].media,
        heading: Services_Main_data[i].heading,
        Pera: Services_Main_data[i].paragraph,
        R_heading: Services_Main_data[i].Read.Heading,
        R_content: Services_Main_data[i].Read.Content,
        S_Main_heading: Services_Main_data[i].sub_reading.Main_heading,
        sub_heading: Services_Main_data[i].sub_reading.sub_headings,
        sub_contant: Services_Main_data[i].sub_reading.sub_contant,
      };
      return (
        <div>
          <div>
            <Menu />
          </div>
          <div id="D_Main_services">
            <div id="Main_SD">
              <div id="Main_SD_1">
                <CardImg alt="N?A" src={this.state.media} id="Main_img_SD" />
              </div>
              <div id="Main_SD_2">
                <div id="Main_SD_2_1">
                  <CardTitle id="S_title_head">{this.state.heading}</CardTitle>
                </div>
                <div id="Main_SD_2_2">
                  <div id="Main_SD_22_1">
                    <CardText id="S_pera">{this.state.Pera}</CardText>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row" id="M_row_id">
                <div id="S_Main">

                  <div id="SM_sub_con">
                    <div id="SM_sub_box">
                      {this.state.R_heading.map((Data, k) => {
                        if (k % 2 == 0) {
                          return (
                            <>
                              <div id="S_sub_box" className="row">
                                <div className="col-6" id="S_sub_box1_1">
                                  <CardTitle id="S_sub_head">
                                    {this.state.R_heading[k]}
                                  </CardTitle>
                                  <CardText
                                    id="S_sub_pera"
                                    style={{ marginTop: "20px", marginBottom: "20px" }}
                                  >
                                    {this.state.R_content[k]}
                                  </CardText>
                                </div>
                                <div className="col-6" id="S_sub_box1_2">
                                  <CardImg src={require("../Data/images/micro.png")} />
                                </div>
                              </div>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <div id="S_sub_box" className="row">
                                <div className="col-6" id="S_sub_box1_2">
                                  <CardImg src={require("../Data/images/IOT_D.jpeg")} />
                                </div>
                                <div className="col-6" id="S_sub_box1_1">
                                  <CardTitle id="S_sub_head">
                                    {this.state.R_heading[k]}
                                  </CardTitle>
                                  <CardText
                                    id="S_sub_pera"
                                    style={{ marginTop: "20px", marginBottom: "20px" }}
                                  >
                                    {this.state.R_content[k]}
                                  </CardText>
                                </div>

                              </div>
                            </>
                          );
                        }
                      })}
                    </div>

                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
            <div id="ser_table">
              <table id="ser_table_1">
                <tr>
                  <td className="ser_table11_1"><div className="ST_col1">Comprehensive Security Analysis</div></td>
                  <td><div id="hor_space"></div></td>
                  <td className="ser_table11_1"><div className="ST_col2">Conducting thorough evaluations of IoT devices involves assessing their software, hardware, and network interactions. This process uncovers vulnerabilities that could be exploited, ensuring devices are secure against various types of attacks.</div></td>
                </tr>

                <tr>
                  <div></div>
                </tr>
                <tr>
                  <td className="ser_table11_1"><div className="ST_col1">Hardware and Firmware Exploitation</div></td>
                  <td><div id="hor_space"></div></td>
                  <td className="ser_table11_1"><div className="ST_col2">This involves discovering and exploiting security weaknesses in both the physical hardware and its firmware. Attackers might manipulate hardware interfaces or firmware to gain unauthorized access or disrupt functionality.</div></td>
                </tr>
                <tr>
                  <div></div>
                </tr>
                <tr>
                  <td className="ser_table11_1"><div className="ST_col1">Low-Level Vulnerability Assessment</div></td>
                  <td><div id="hor_space"></div></td>
                  <td className="ser_table11_1"><div className="ST_col2">Performing in-depth analysis at the firmware level involves scrutinizing the code and architecture for flaws. This is crucial for identifying vulnerabilities that can be exploited at a fundamental level, often leading to severe security breaches.</div></td>
                </tr>
                <tr>
                  <div></div>
                </tr>
                <tr>
                  <td className="ser_table11_1"><div className="ST_col1">Black-Box and White-Box Testing</div></td>
                  <td><div id="hor_space"></div></td>
                  <td className="ser_table11_1"><div className="ST_col2">Black-box testing examines a system's functionality without prior knowledge, simulating external attacks. White-box testing, in contrast, involves a thorough examination of internal structures and code, offering a more detailed evaluation of security risks</div></td>
                </tr>
                <tr>
                  <div></div>
                </tr>
                <tr>
                  <td className="ser_table11_1"><div className="ST_col1">IoT Ecosystem Security</div></td>
                  <td><div id="hor_space"></div></td>
                  <td className="ser_table11_1"><div className="ST_col2">Analyzing the broader IoT ecosystem includes evaluating related components like mobile apps, web services, and cloud infrastructure. This approach ensures that all interconnected elements are secure and not vulnerable to breaches that could impact the IoT system.</div></td>
                </tr>
                <tr>
                  <div></div>
                </tr>
                <tr>
                  <td className="ser_table11_1"><div className="ST_col1">Detailed Reporting and Recommendations</div></td>
                  <td><div id="hor_space"></div></td>
                  <td className="ser_table11_1"><div className="ST_col2">Providing detailed reports involves documenting discovered vulnerabilities and their implications. Recommendations for remediation are also included, offering actionable steps to address and mitigate the identified security issues effectively.</div></td>
                </tr>
              </table>
            </div >
            {/* <div className="container" id="small_Service">
              <div className="row" id="small_Service_1">
                {this.state.S_Main_heading.map((data, i) => {
                  return (
                    <div id="small_Service1_1">
                      <CardTitle id="small_Service_head">
                        {this.state.S_Main_heading[i]}
                      </CardTitle>
                      <div className="row" id="small_Service11_1">
                        {this.state.sub_heading[i].map((data, j) => {
                          return (
                            <div style={{ marginTop: "30px" }} id="small_Service111_1" className="col-lg-5" >
                              <CardTitle id="S_sub2_head">
                                {this.state.sub_heading[i][j]}
                              </CardTitle>
                              <CardText id="small_Service111_2" style={{marginTop: "20px", marginBottom: "20px"}}>
                                {this.state.sub_contant[i][j]}
                              </CardText>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div> */}
            <div id="Under_table_pera">
              <p>Your IoT devices are critical to your operations, and ensuring their security is paramount. Our expert team specializes in comprehensive security analysis to identify and mitigate vulnerabilities, ensuring your systems are protected against potential threats. Don't leave your security to chance—book your free consultation today and take the first step towards a safer, more secure IoT environment.</p>
            </div>

            <div id="book_now">
              <div className="row" id="book_box_1">
                <div className="col-6" id="book_box_1_1">
                  <h3>Book Your Free Concultency</h3>
                </div>
                <div className="col-6" id="book_box_1_2">
                  <button >
                    <Link to={"/website/Book/"} id="Book_Link">
                      Book Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Home_footer />
          </div>
        </div>
      );
    } else {
      return <div>Not existed</div>;
    }
  }
}
