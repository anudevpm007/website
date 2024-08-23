import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, CardImg } from "react-bootstrap";
// import { useEffect } from "react";
import "./Home.css";
import "./Home_body.css";
import Home_footer from "./Home_footer/Home_footer";
import "./Header_L.css";
import "./Menu.css";
import services_data from "../Data/Services_data";
import Services from "./Home_body/services/services";
import BgVideo from "../video/front_video.mp4";

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
                src={require("../images/AB WPL 5.png")}
                alt="N/A"
              />
            </div>
            <input type="checkbox" id="sidebar-active" />
            <label htmlFor="sidebar-active" className="open-sidebar-bt">
              <img src={require("../images/Menu.png")} alt="N/A" />
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
              <Link to={"/website/blogs/"} onClick={close} className="links">
                Blog
              </Link>
              <a href="#service_list" onClick={close} className="links">
                Services
              </a>
              <a href="#down" onClick={close} className="links">
                About Us
              </a>
              <Link href="#" onClick={close} className="links">
                Carrier
              </Link>
              <Link to={"/website/events/"} onClick={close} className="links">
                Events
              </Link>
              <div>
                <Link id="jU" to={"/website/Book/"}>Book Now</Link>
              </div>
            </div>
          </nav>
        </div>
        <div id="Rest">
          <div id="D_P_up">
            <Button as="a" href="#home" id="B_P_up"><img src={require("../images/UP.png")} /></Button>
          </div >
          <div id="B_P_down">
            <Button as="a" id="B_P_down" href="#down"><img src={require("../images/DOWN.png")} /></Button>
          </div>

          {/* Header Section */}

          <div id="Header_L">
            <video   autoPlay loop muted src={BgVideo} type="video/mp4">
            </video>
          </div>
          <div className="row">
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

          <div id="down">
            <Home_footer />
          </div>
        </div>
      </div>
    </div>
  );
}
