import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import "./Home.css";
import "./Home_body.css";
import Home_footer from "./Home_footer/Home_footer";
import "./Header_L.css";
import "./Menu.css";
import services_data from "../Data/Services_data";
import Services from "./Home_body/services/services";
import BgVideo from "../video/front_video.mp4";
import Map from "./Map/Map";
import Mobile_services from "../Services/Mobile_ser/Mobile_services";

export default function Home() {

  function close() {
    document.getElementById("sidebar-active").click()

  }


  return (
    <div id="main">
      <div id="home">
        <div className="Menu-m">
          <nav>
            <div className="S-logo">
              <img
                className="logo"
                src={require("../images/Main_logo.png")}
                alt="N/A"
              />
            </div>
            <input type="checkbox" id="sidebar-active" />
            <label htmlFor="sidebar-active" className="open-sidebar-bt">
              <img src={require("../images/white_menu.png")} alt="N/A" />
            </label>
            <label id="overlay" htmlFor="sidebar-active"></label>
            <div className="links-container" id="comp_1">
              <label htmlFor="sidebar-active" className="close-sidebar-bt">
                <img
                  src={require("../images/Menu2.png")}
                  id="M_logo"
                  alt="N/A"
                />
              </label>

              <Link to={"/website/"} onClick={close} className="links">
                Home
              </Link>

              <a href="#service_list" onClick={close} className="links">
                Services
              </a>
              <Link to={"/website/events/"} onClick={close} className="links">
                Events
              </Link>
              <Link to={"/website/blogs/"} onClick={close} className="links">
                Blog
              </Link>
              <Link to={"/website/Under_construction"} className="links" onClick={close}>Training</Link>
              <Link to={"/website/Under_construction"} className="links" onClick={close}>Glitch</Link>
              <Link to={"/website/carrier"} onClick={close} className="links">
                Careers
              </Link>
              <Link to={"/website/about/"} onClick={close} className="links">
                About
              </Link>
              <div>
                <Link id="jU" to={"/website/Book/"}>Book Now</Link>
              </div>
            </div>
          </nav>
        </div>
        <div id="Rest">
          {/* <div id="D_P_up">
            <Button as="a" href="#home" id="B_P_up"><img src={require("../images/UP.png")} /></Button>
          </div >
          <div id="B_P_down">
            <Button as="a" id="B_P_down" href="#down"><img src={require("../images/DOWN.png")} /></Button>
          </div> */}

          {/* Header Section */}

          <div id="Header_L">
            <div>
              <video autoPlay loop muted src={BgVideo} type="video/mp4">
              </video>
            </div>
            <div id="Header_Heading">
              <span><h1>A Bit of Defense Beats a Breach of Bytes</h1></span>
              <p>Protect Your Business with Our Innovative Cybersecurity Services!</p>
            </div>
          </div>
          <div className="row">
            <div className="Home_body">
              <div className="container-fluid">
                <div className="row">
                  <div id="Header_Heading_1">
                    <div>
                      <h2>Our Services</h2>
                      <p>We are a team of innovative digital security experts, committed to providing effective and reliable services. Our proactive approach and deep knowledge allow us to offer unique solutions that safeguard your digital assets.</p>
                    </div>
                  </div>
                  <div id="service_home">
                    <div id="service_list">
                      <div
                        id="T_SER"
                        style={{
                          fontWeight: "600",
                          color: "black",
                          backgroundColor: "transparent",
                        }}
                      >


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
                      <div id="Mobile_list">
                        <Mobile_services />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="why_box">
            <div id="why_box_2">
              <h2>Why INKOGSEK</h2>
              <p>We're a research-driven organization, developing new solutions and leveraging advanced technologies to protect your digital assets. Our ethical approach ensures trust and reliability, offering personalized solutions to meet your specific needs. Discover how ingokSek can enhance your cyber security strategy with our advanced expertise and commitment to excellence.</p>
            </div>
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
          {/* <div id="Pera_2">
            <div>
              <h3>About Us</h3>
              RedTeam Hacker Academy’s career-focused, implementation-based learning programs pave the road to a success-assured career in Ethical Hacking & Cybersecurity. Their curriculum is designed to blend theoretical knowledge with practical, hands-on experience, ensuring students are well-prepared for real-world challenges. The academy offers a range of certifications and courses tailored to different skill levels, from beginners to advanced professionals. Instructors are industry experts, providing insights into the latest trends and threats in cybersecurity. With a strong emphasis on ethical practices and cutting-edge technology, RedTeam Hacker Academy equips its students with the skills needed to protect and defend against cyber threats.
            </div>
          </div> */}
          <div id="world_head">
            <div id="world_head_1">
              <h3>Our Global Presences</h3>
              <p>Explore our clients' locations across the region. Use this interactive map to see where we collaborate and connect. Find out how we're making an impact near you!</p>
            </div>
          </div>
          <div id="div_map">
            <Map />
          </div>
          <div id="down">
            <Home_footer />
          </div>
        </div>
      </div>
    </div>
  );
}
