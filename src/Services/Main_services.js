import React, { Component, useEffect, useRef } from "react";
import "./Main_services.css";
import Services_Main_data from "../Data/Service_Main_data";
import { CardImg, CardText, CardTitle } from "react-bootstrap";
import Menu from "../Menu/Menu";
import Home_footer from "../Home/Home_footer/Home_footer";

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
            <div className="container" id="small_Service">
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
