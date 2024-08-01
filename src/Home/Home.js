import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { useEffect } from "react";
import "./Home.css";
import "./Home_body.css";
import Home_footer from "./Home_footer/Home_footer";
import "./Header_L.css";
import "./Menu.css";
import services_data from "../Data/Services_data";
import Services from "./Home_body/services/services";

export default function Home() {
  // render() {

  // var url = window.location.pathname;
  // url = url+"Hello3"
  // useEffect(() => {
  //   url = url+"Hello2"
  //   if (url == "/website/from=blog/") {
  //     url = url+"Hello"
  //     let availableWidthPx = document.getElementById("service_list");
  //     if (availableWidthPx) {
  //       console.log(availableWidthPx.offsetWidth);
  //     }
  //   }
  // }, []);


  return (
    <div id="main">
      <div id="home">
        <div className="Menu-m">
          <nav>
            <div className="S-logo">
              <img
                className="logo"
                src={require("../images/AB WPL 5.png")}
                alt="N/A"
              />
            </div>
            <input type="checkbox" id="sidebar-active" />
            <label htmlFor="sidebar-active" className="open-sidebar-bt">
              <img src={require("../images/Menu.png")} alt="N/A" />
            </label>
            <label id="overlay" htmlFor="sidebar-active"></label>
            <div className="links-container">
              <label htmlFor="sidebar-active" className="close-sidebar-bt">
                <img
                  src={require("../images/Menu2.png")}
                  id="M_logo"
                  alt="N/A"
                />
              </label>

              <Link to={"/website/"} className="links">
                Home
              </Link>
              <Link to={"/website/blogs/"} className="links">
                Blog
              </Link>
              <a href="#service_list" className="links">
                Services
              </a>
              <Link href="#" className="links">
                About Us
              </Link>
              <Link href="#" className="links">
                Courses
              </Link>
              <Link href="#" className="links">
                Events
              </Link>
              <div>
                <Link id="jU">Join Us</Link>
              </div>
            </div>
          </nav>
        </div>
        <div id="Rest">
          <div id="D_P_up">
            <Button as="a" href="#home" id="B_P_up"><img src={require("../images/UP.png")}/></Button>
          </div >
          <div id="B_P_down">
          <Button as="a" id="B_P_down" href="#down"><img src={require("../images/DOWN.png")}/></Button>
          </div> 
          
          <div id="Header_L">
            <div className="container">
              <div className="row" id="r">
                <div className="col-7" id="heading-L">
                  <span>
                    <h1>Integrity and Innovation in Cyber Security </h1>
                  </span>
                  <span>
                    <p>
                      At ingokSek , we prioritize integrity and innovation in
                      cyber security. We're a research-driven organization,
                      developing new solutions and leveraging advanced
                      technologies to protect your digital assets. Our ethical
                      approach ensures trust and reliability, offering
                      personalized solutions to meet your specific needs.
                      Discover how ingokSek can enhance your cyber security
                      strategy with our advanced expertise and commitment to
                      excellence.
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
                      At ingokSek , we prioritize integrity and innovation in
                      cyber security. We're a research-driven organization,
                      developing new solutions and leveraging advanced
                      technologies to protect your digital assets. Our ethical
                      approach ensures trust and reliability, offering
                      personalized solutions to meet your specific needs.
                      Discover how ingokSek can enhance your cyber security
                      strategy with our advanced expertise and commitment to
                      excellence.
                    </p>
                  </span>
                  {/* <span><h6>Research Focused, In-Depth & Resilient Security Assessments For Applications, Cloud & Networks</h6></span> */}
                </div>
                <div className="col-5" id="img-div">
                  <img src={require("../images/AB3.png")} alt="N?A" id="IMG" />
                </div>
              </div>
            </div>
          </div>
          <div className="Home_body">
            <div className="container-fluid">
              <div className="row">
                <div id="service_home">
                  <div id="service_list">
                    <div
                      id="T_SER"
                      style={{
                        fontSize: 30,
                        fontWeight: "bolder",
                        margin: 20,
                        color: "black",
                        backgroundColor: "transparent",
                      }}
                    >
                      Services
                    </div>
                    <div className="row" id="list">
                      {services_data.map((Data) => (
                        <Services
                          id={Data.id}
                          heading={Data.Heading}
                          pera={Data.Pera}
                          img={Data.img}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="down">
          <Home_footer  />
          </div>
        </div>
      </div>
    </div>
  );
}
