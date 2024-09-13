import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import "./Home.css"
import { Link } from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div id='Home'>

        <div id='Home_container'>
          <div id='Home_menu'>
            <Menu />
          </div>
          <div id='Home_heading'>
            <div>
              <div >
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
                </div>
                <div id='service_Section_2' className='col-5'>
                  <div>
                    <h2>Our Services</h2>
                    <p>We are a team of innovative digital security experts, committed to providing effective and reliable services. Our proactive approach and deep knowledge allow us to offer unique solutions that safeguard your digital assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
