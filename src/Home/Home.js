import React, { Component, useState } from 'react'
import Menu from '../Menu/Menu'
import "./Home.css"
import { Link } from 'react-router-dom'
import Home_footer from "./Home_footer/Home_footer"
import axios from 'axios'

const sub = (event) => {
  // console.log(email);
  event.preventDefault();
  let email = document.getElementById('sub_email').value;
  let data = { email: email };
  console.log(data.length)
  if (data.length !== 0) {
    axios.post("http://localhost:8000/", data).then(res => console.log("Status Code :" + res.status)).catch(err => console.log("error"));

  }
}

var i = 0;


function More() {
  return (
    <div id='service_box_row_3' className='row'>
      <div id='service_box_5' className='col-md'>
        <Link>
          <div>
            <img src={require("./image/Backup.png")} />
            <p>Data Recovery</p>
          </div>
        </Link>
      </div>
      <div id='service_box_6' className='col-md'>
        <Link>
          <div>
            <img src={require("./image/server.png")} />
            <p>DataBase</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const [show, setShow] = useState("View More");
  const [serstate, setSerstate] = useState(false);

  const serviceClick = () => {
    i = i + 1
    if (i % 2 == 1) {
      setShow("Hide")
      setSerstate(true)
    } else if (i % 2 == 0) {
      setShow("View More")
      setSerstate(false)
    }

  }
  return (
    <div>
      <div id='Home_menu'>
        <Menu />
      </div>
      <div id='Home'>

        <div id='Home_container'>

          <div id='Home_heading'>
            <div>
              <div id='Home_top_heading'>
                <h1>Cybersecurity is safeguarding trust in a digital world.</h1>
              </div>
            </div>
            <div id='heading_box-1'>
              <div id='heading_box'>
                <div>
                  <h1>A Bit of Defense Beats a Breach of Bytes</h1>
                  <p>Protect Your Business with Our Innovative Cybersecurity Services!</p>
                </div>
              </div>
            </div>
            <div id='Services'>
              <div id='service_container' className='row'>
                <div id='service_section_1' className='col-5'>
                  <div id='service_box_row_1' className='row'>
                    <div id='service_box_1' className='col-md'>
                      <Link>
                        <div>
                          <img src={require("./image/iot.png")} />
                          <p>IoT and Embedded Security Testing</p>
                        </div>
                      </Link>
                    </div>
                    <div id='service_box_2' className='col-md'>
                      <Link>
                        <div>
                          <img src={require("./image/applications.png")} />
                          <p>Web Application Security Testing</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div id='service_box_row_2' className='row'>
                    <div id='service_box_3' className='col-md'>
                      <Link>
                        <div>
                          <img src={require("./image/application.png")} />
                          <p>Mobile  Application Security Testing</p>
                        </div>
                      </Link>
                    </div>
                    <div id='service_box_4' className='col-md'>
                      <Link>
                        <div>
                          <img src={require("./image/globe-grid.png")} />
                          <p>Network Security Assessment</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {
                    serstate && <More />
                  }
                  <div id='show_service'>
                    <button onClick={serviceClick}>{show}</button>
                  </div>
                </div>
                <div id='service_Section_2' className='col-5'>
                  <div>
                    <h2>Our Services</h2>
                    <p>We are a team of innovative digital security experts, committed to providing effective and reliable services. Our proactive approach and deep knowledge allow us to offer unique solutions that safeguard your digital assets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id='why_box' className='row'>
              <div id='why_box_1' className='col-10'>
                <h2 >Why INKOGSEK</h2>
                <p>We're a research-driven organization, developing new solutions and leveraging advanced technologies to protect your digital assets. Our ethical approach ensures trust and reliability, offering personalized solutions to meet your specific needs. Discover how ingokSek can enhance your cyber security strategy with our advanced expertise and commitment to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='H_footer'>
        <Home_footer />
      </div>
    </div>
  )
}
