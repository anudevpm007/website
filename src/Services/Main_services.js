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
            <Menu/>
          </div>
          <div id="D_Main_services">
          <div id="Main_SD">
          <CardImg alt="N?A" src={this.state.media}  id="Main_img_SD"/>
          </div>
            <div className="container">
            
              <div className="row" id="M_row_id">
                <div className="col-11" id="S_Main">
                  <div className="row" id="M_row_id">
                    <div className="col-5" id="S_title">
                      <CardTitle id="S_title_head">{this.state.heading}</CardTitle>
                    </div>
                  </div>
                  <CardText id="S_pera">{this.state.Pera}</CardText>
                  <div id="SM_sub_box" className="row">
                    {this.state.R_heading.map((Data, k) => {
                      return (
                        <div id="S_sub_box" className="col-lg">
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
                      );
                    })}
                  </div>
                  <div id="box_sub_services">
                    {this.state.S_Main_heading.map((data, i) => {
                      return (
                        <div id="S_sub2_box">
                          <CardTitle
                            id="S_subM_head"
                            style={{ marginTop: "30px" }}
                          >
                            {this.state.S_Main_heading[i]}
                          </CardTitle>
                          <div className="row">
                            {this.state.sub_heading[i].map((data, j) => {
                              return (
                                <div
                                  style={{ marginTop: "30px" }}
                                  id="small_contant"
                                  className="col-lg-6"
                                >
                                  <CardTitle id="S_sub2_head">
                                    {this.state.sub_heading[i][j]}
                                  </CardTitle>
                                  <CardText
                                    id="S_sub2_pera"
                                    style={{
                                      marginTop: "20px",
                                      marginBottom: "20px",
                                    }}
                                  >
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
            </div>
          </div>
          <div>
            <Home_footer/>
          </div>
        </div>
      );
    } else {
      return <div>Not existed</div>;
    }
  }
}
