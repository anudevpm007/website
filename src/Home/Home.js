import React, { useEffect } from "react"
import "./Home.css"
import Menu from "../Menu/Menu"

export default function Home() {
  return (
    <div id="Home">
      <div id="Home">
        <div id="Home_Menu">
          <Menu />
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
        </div>
        <div id="Th_Header">
          <div>
            <div id="Th_Header_section" className="row">
              <div className="col-3">
                <div className="Th_Header_S">
                  <img src={require("./image/customer.png")} alt="N?A" />
                  <h1>22+</h1>
                  <h4>Our Clients</h4>
                </div>
              </div>
              <div className="col-3">
                <div className="Th_Header_S">
                  <img src={require("./image/global.png")} alt="N?A" />
                  <h1>5+</h1>
                  <h4>Global presences</h4>
                </div>
              </div>
              <div className="col-3">
                <div className="Th_Header_S">
                  <img src={require("./image/user.png")} alt="N?A" />
                  <h1>98%</h1>
                  <h4>Client referra</h4>
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
              <div className="col-3">
                <div className="Home_services_box">
                  <div><img src={require("./image/iot.png")} alt="N?A" /></div>
                  <p>Iot and Embedded Security Testing</p>
                </div>
              </div>
              <div className="col-3">
                <div className="Home_services_box">
                  <div><img src={require("./image/applications.png")} alt="N?A" /></div>
                  <p>Web application security testing</p>
                </div>
              </div>
              <div className="col-3">
                <div className="Home_services_box">
                  <div><img src={require("./image/application.png")} alt="N?A" /></div>
                  <p>Mobile application security testing</p>
                </div>
              </div>
            </div>
            
          </div>

          <div>
            <div id="Home_services_row" className="row">
              <div className="col-3">
                <div className="Home_services_box">
                  <div><img src={require("./image/globe-grid.png")} alt="N?A" /></div>
                  <p>Network security assessment</p>
                </div>
              </div>
              <div className="col-3">
                <div className="Home_services_box">
                  <div><img src={require("./image/security.png")} alt="N?A" /></div>
                  <p>vulnerability assessment and penetration testing</p>
                </div>
              </div>
              <div className="col-3">
                <div className="Home_services_box">
                  <div><img src={require("./image/Backup.png")} alt="N?A" /></div>
                  <p>Data recovery</p>
                </div>
              </div>
            </div>
            
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
