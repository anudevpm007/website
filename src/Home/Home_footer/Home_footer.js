import React, { Component } from "react";
import "./Home_footer.css";
import { Link } from "react-router-dom";

export default class Home_footer extends Component {
  render() {
    return (
      <div id="home_footer">
        <div className="row" id="main_box">
          <div id="footer_logo" className="row">
            <div className="col-1"><img src={require("../../images/AB WPL 5.png")} id="box_logo" /></div>
            <div className="col-2"><h3>INKOGSEK</h3></div>
          </div>
          <div className="col-md" id="box_1">
            <p>
              Research Powered Cybersecurity Services and Training. Eliminate security threats through our innovative and extensive security assessments.
            </p>
            <div id="box_1_1">

              <h4>Subscribe to our newsletter</h4>
              <form>
                <div className="row" id="box_11_1">
                  <div className="col-6" id="box_111_1">
                    <input placeholder="Enter your Email address" type="email" />
                  </div>
                  <div className="col-6" id="box_111_2">
                    <button>Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg" id="box_2">
            <div id="footer_right" className="row">
              <div id="footer_right_1" className="col-3">
                <h3>Services</h3>
                <ul>
                  <div>
                    <li>
                      <a href="#home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#service_list">
                        Services
                      </a>
                    </li>
                    <li>
                      <Link to={"/website/blogs/"}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link to={"/website/Join_Us/"}>
                        Join Us
                      </Link>
                    </li>
                  </div>

                </ul>

              </div>
              <div id="footer_right_2" className="col-3">
                <h3>Global location</h3>
                <ul>
                  <div>
                    <li>
                      <a href="#home">
                        India
                      </a>
                    </li>
                    <li>
                      <a href="#service_list">
                        United States
                      </a>
                    </li>
                    <li>
                      <Link to={"/website/blogs/"}>
                        United Kingdom
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Dubai
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Kuwait
                      </Link>
                    </li>
                    <li>
                      <Link to={"/website/Join_Us/"}>
                        Sigapore
                      </Link>
                    </li>
                  </div>

                </ul>
              </div>
              <div id="footer_right_3" className="col-4">
                <h3>Social</h3>
                <div id="footer_right3_1">
                  <ul id="footer_right31_1">
                    <li>
                      <img src={require("./image/linkedin.png")} />
                      <img src={require("./image/twitter.jpg")} />
                    </li>
                  </ul>
                  <ul id="footer_right31_1">
                    <li>
                      <img src={require("./image/facebook.png")} />
                      <img src={require("./image/instagram.png")} />
                    </li>
                  </ul>
                  <ul id="footer_right31_1">
                    <li>
                      <img src={require("./image/reddit.png")} />

                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="row" id="footer_loc_box">
          <div id="footer_loc_box_1">
            <div className="row">
              <div className="col-3" >
                <div className="row" id="loc_box">
                  <div className="col-3" id="loc_box_1">
                    <img src={require("../../images/location.png")} />
                  </div>

                  <div className="col" id="loc_box_2">
                    <div className="row">
                      US
                    </div>
                    <div className="row">
                      98579823457
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="row" id="loc_box">
                  <div className="col-3" id="loc_box_1">
                    <img src={require("../../images/location.png")} />
                  </div>

                  <div className="col" id="loc_box_2">
                    <div className="row">
                      India
                    </div>
                    <div className="row">
                      45456456
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row" id="loc_box">
                  <div className="col-3" id="loc_box_1">
                    <img src={require("../../images/location.png")} />
                  </div>

                  <div className="col" id="loc_box_2">
                    <div className="row">
                      England
                    </div>
                    <div className="row">
                      546756785
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row" id="loc_box">
                  <div className="col-3" id="loc_box_1">
                    <img src={require("../../images/location.png")} />
                  </div>

                  <div className="col" id="loc_box_2">
                    <div className="row">
                      Japan
                    </div>
                    <div className="row">
                      234234234433
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="last_bottom">
          <div className="col-6">
            Terms & conditions
          </div>
          <div className="col-6">
            Copyright © 2010-2024 Freepik Company S.L. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
