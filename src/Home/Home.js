import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"
import Map from "./Map/Map"
import Home_footer from "./Home_footer/Home_footer"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Slide from "./Slide/Slide";
import axios from "axios";
import HomeMenu from "./Home_menu/HomeMenu";


const B_header_Com = () => {
  return (
    <div>
      <div id="B_header_sec" className="row">
        <div className="col-4">
          <div>
            <h6>VIRTUAL EVENTS</h6>
            <p>Cum sociis natoque penatibus et magnisd is
              parturient montes nasc.</p>
            <p>28 December 2024</p>
          </div>
        </div>
        <div className="col-4">
          <div>
            <h6>NEW REPORT</h6>
            <p>Cum sociis natoque penatibus et magnisd is
              parturient montes nasc.</p>
            <p>28 December 2024</p>
          </div>
        </div>
        <div className="col-4">
          <div>
            <h6>EXPERT PANEL</h6>
            <p>Cum sociis natoque penatibus et magnisd is
              parturient montes nasc.</p>
            <p>28 December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}


const B_header_Mob = () => {
  return (
    <div>
      <div id="B_header_sec" className="row">
        <div className="col-4-sm">
          <div>
            <h6>VIRTUAL EVENTS</h6>
            <p>Cum sociis natoque penatibus et magnisd is
              parturient montes nasc.</p>
            <p>28 December 2024</p>
          </div>
        </div>
        <div className="col-4-sm">
          <div>
            <h6>NEW REPORT</h6>
            <p>Cum sociis natoque penatibus et magnisd is
              parturient montes nasc.</p>
            <p>28 December 2024</p>
          </div>
        </div>
        <div className="col-4-sm">
          <div>
            <h6>EXPERT PANEL</h6>
            <p>Cum sociis natoque penatibus et magnisd is
              parturient montes nasc.</p>
            <p>28 December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}


const Home_body = () => {
  return (
    <div id="Home">
      <div id="Home_Menu">
        <HomeMenu colorOut={"White"} />
      </div>
      <div id="Home_header">
        <div className="row">
          <div id="Home_header_S1" className="col">
            <div>
              <h1>A Bit of Defense Beats a Breach of Bytes</h1>
              <h6>Protect Your Business with Our Innovative Cybersecurity Services!</h6>
            </div>
          </div>
          <div id="Home_header_S2" className="col">
          </div>
        </div>
      </div>
      <div id="B_header">
        <B_header_Com />
      </div>
      <div id="Th_Header">
        <div>
          <div id="Th_Header_section" className="row">
            <div className="col">
              <div className="Th_Header_S">
                <LazyLoadImage src={require("./image/customer.png")} effect="blur" loading="lazy" alt="N?A" />
                <h1>22+</h1>
                <h4>Our Clients</h4>
              </div>
            </div>
            <div className="col">
              <div className="Th_Header_S">
                <LazyLoadImage src={require("./image/global.png")} effect="blur" loading="lazy" alt="N?A" />
                <h1>5+</h1>
                <h4>Global presences</h4>
              </div>
            </div>
            <div className="col">
              <div className="Th_Header_S">
                <LazyLoadImage src={require("./image/user.png")} width={80} effect="blur" loading="lazy" alt="N?A" />
                <h1>98%</h1>
                <h4>Client referra</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Home_services">
        <header>
          <p>Our Services</p>
          <h2>We offer Professional Security Solutions</h2>
        </header>
        <div>
          <div id="Home_services_row" className="row">
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/iot.png")} effect="blur" loading="lazy" alt="N?A" /></div>
                <p>Iot and Embedded Security Testing</p>
              </div>
            </div>
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/applications.png")} effect="blur" loading="lazy" alt="N?A" /></div>
                <p>Web application security testing</p>
              </div>
            </div>
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/application.png")} effect="blur" loading="lazy" alt="N?A" /></div>
                <p>Mobile application security testing</p>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div id="Home_services_row" className="row">
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/globe-grid.png")} effect="blur" /></div>
                <p>Network security assessment</p>
              </div>
            </div>
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/security.png")} effect="blur" /></div>
                <p>vulnerability assessment and penetration testing</p>
              </div>
            </div>
            <div className="col">
              <div className="Home_services_box">

                <div><img src={require("./image/artifical-intelligence.png")} effect="blur" /></div>
                <p>AI/ML Security Audit</p>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div id="Home_services_row" className="row">
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/Code_review.png")} effect="blur" /></div>
                <p>Source Code Review</p>
              </div>
            </div>
            <div className="col">
              <div className="Home_services_box">
                <div><img src={require("./image/api.png")} effect="blur" /></div>
                <p>API Pen testing</p>
              </div>
            </div>
            <div className="col">
              <div className="Home_services_box">

                <div><img src={require("./image/cyber-security (1).png")} effect="blur" /></div>
                <p> cloud Security</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div id="Home_Middle_heading_B">
        <div id="Middle_heading_B">
          Astraliva
        </div>
      </div>
      <div id="Home_start">
        <div id="Home_start_header">
          <p>GET STARTED NOW</p>
          <h1>Send us a Maessage</h1>
        </div>
        <div id="Home_start_form">
          <div>
            <form action="POST">
              <div id="start_inputs">
                <div className="row">
                  <div className="row" id="start_input_s1">
                    <div className="col-6">
                      <input type="text" placeholder="Name" id="I_NAME" />
                    </div>
                    <div className="col-6">
                      <input type="email" name="" id="I_EMAIL" placeholder="E Mail" />
                    </div>
                  </div>
                  <div className="row" id="start_input_s2">
                    <div className="col-2">
                      <select name="code" id="code">
                        <option value="91">91+</option>
                      </select>
                    </div>
                    <div className="col">
                      <input type="text" placeholder="Phone Number" id="I_PHONE" />
                    </div>
                  </div>
                  <div className="row" id="start_input_s3">
                    <div className="col"><input type="text" placeholder="Location" id="I_LOACTION" /></div>
                  </div>

                  <div className="row" id="start_submit">
                    <div className="col">
                      <button type="submit" onClick={submit}>SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>

      <div id="Home_map">
        <div id="Map_heading">
          <h1>Our Global Presence</h1>
        </div>
        <Map />
      </div>
      <div id="home_event_set"> {/* Event section */}
        <img src={require("./background_img/event_box.png")} alt="N?A" />
        <div>

          <div id="home_event_heading">
            <h1>Our latest Event that happening</h1>
            <h3>October 4 vulnerability assessment and penetration testing event 2024</h3>
            <h5><a href="#">Read More --&gt;</a></h5>
          </div>
          <div className="row" id="home_event_date">
            <div className="col-6" id="HED_1">
              <p>Start On: 04-10-2024</p>
            </div>
            <div className="col-6" id="HED_2">
              <p>Start On: 07-10-2024</p>
            </div>
          </div>
          <div id="home_event_pera">
            <p>
              The significance of the field stems from the expanded reliance on computer systems, the Internet,[3] and wireless network standards. Its importance is further amplified by the growth of smart devices, including smartphones, televisions, and the various devices that constitute the Internet of things (IoT). Cybersecurity has emerged as one of the most significant new challenges facing the contemporary world, due to both the complexity of information systems and the societies they support. Security is particularly crucial for systems that govern large-scale systems with far-reaching physical effects, such as power distribution, elections, and finance.[4][5]
              Although many aspects of computer security involve digital security, such as electronic passwords and encryption, physical security measures such as metal locks are still used to prevent unauthorized tampering. IT security is not a perfect subset of information security, therefore does not completely align into the security convergence schema.
            </p>
          </div>
        </div>
      </div>
      <div id="Home_blogs">
        <div>
          <div id="Home_blog_heading">
            <p>EXPLORE BLOGS</p>
            <h1>Our Leatest Blogs</h1>
          </div>
          <div className="row" id="Home_blogs_section">
            <Slide />
          </div>
        </div>
      </div>
      <div id="Home_footer">
        <Home_footer />
      </div>
    </div>
  );
}

var name;
var email;
var phone;
var location;
const submit = (event) => {
  event.preventDefault()
  name = document.getElementById("I_NAME").value;
  email = document.getElementById("I_EMAIL").value;
  phone = document.getElementById("I_PHONE").value;
  location = document.getElementById("I_LOACTION").value;
  let data = { name: name, email: email, phone: phone, location: location };
  console.log("Name: " + name + " Phone: " + phone + " Email: " + email + " Location: " + location);
  axios.post("http://localhost:8000/register/booking/", data).then(res => console.log("Status Code :" + res.status)).catch(err => console.log("error"));
}

export default function Home() {



  return (
    <div id="Home">
      <Home_body />
    </div>
  )
}
