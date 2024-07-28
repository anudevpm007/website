import React, { Component } from "react";
import "./Header_L.css";

export default class Header_L extends Component {
  render() {
    return (
      <div id="Header_L">
        <div className="container">
          <div className="row" id="r">
            <div className="col-7" id="heading-L">
              <span>
                <h1>Integrity and Innovation in Cyber Security</h1>
              </span>
              <span>
                <p>
                  At ingokSek , we prioritize integrity and innovation in cyber
                  security. We're a research-driven organization, developing new
                  solutions and leveraging advanced technologies to protect your
                  digital assets. Our ethical approach ensures trust and
                  reliability, offering personalized solutions to meet your
                  specific needs. Discover how ingokSek can enhance your cyber
                  security strategy with our advanced expertise and commitment
                  to excellence.
                </p>
              </span>
              {/* <span><h6>Research Focused, In-Depth & Resilient Security Assessments For Applications, Cloud & Networks</h6></span> */}
            </div>
            <div className="col-10" id="heading-L2">
              <span>
                <h1>Integrity and Innovation in Cyber Security</h1>
              </span>
              <span>
                <p>
                  At ingokSek , we prioritize integrity and innovation in cyber
                  security. We're a research-driven organization, developing new
                  solutions and leveraging advanced technologies to protect your
                  digital assets. Our ethical approach ensures trust and
                  reliability, offering personalized solutions to meet your
                  specific needs. Discover how ingokSek can enhance your cyber
                  security strategy with our advanced expertise and commitment
                  to excellence.
                </p>
              </span>
              {/* <span><h6>Research Focused, In-Depth & Resilient Security Assessments For Applications, Cloud & Networks</h6></span> */}
            </div>
            <div className="col-5" id="img-div">
              <img src={require("../../images/AB3.png")} alt="N?A" id="IMG" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
