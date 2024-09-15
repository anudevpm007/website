import React, { useEffect, useState } from 'react'
import Menu from '../Menu/Menu'
import "./Home.css"
import { Link } from 'react-router-dom'
import Home_footer from "./Home_footer/Home_footer"
import { useScrollYPosition } from 'react-use-scroll-position'
// import axios from 'axios'

// const sub = (event) => {
//   // console.log(email);
//   event.preventDefault();
//   let email = document.getElementById('sub_email').value;
//   let data = { email: email };
//   console.log(data.length)
//   if (data.length !== 0) {
//     axios.post("http://localhost:8000/", data).then(res => console.log("Status Code :" + res.status)).catch(err => console.log("error"));

//   }
// }

var i = 0;

function Vis_form(){
  console.log("pressed");
  
  document.getElementById("reg_com").style.display = "block";
  document.getElementById("reg_com").style.scale = 1;
  document.getElementById("reg_bt").style.display = "none";
  
}

function Reg_form() {
  return (
    <div id='reg_form'>
      <div id='reg_form_head'>
        <h2>
          REGISTER FORM
        </h2>
      </div>
      <form action="POST">
        <div id='reg_row' className='row'>
          <div id='reg_row_1' className='row'>
            <div className="col-6">
              <input placeholder='Name' />
            </div>
            <div className="col-6">
              <input placeholder='E Mail' />
            </div>
          </div>
        </div>
        <div className='reg_div'>
          <input placeholder='Phone number' />
        </div>
        <div className='reg_div'>
          <input placeholder='Location' />
        </div>
        <div id='sub_bt'>
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}

function Register_click() {
  return (
    <div className='row' id='reg_main'>
      <div className='col-10'>
        <div className='row'>
          <div id='reg_box_1' className='col-6'>
            <div>
              <h2>Book Your Free Concultency</h2>
              <p>Register for exploring our services and become one of us</p>
            </div>
          </div>
          <div id='reg_box_2' className='col-6'>
            <div id='reg_bt'>
              <button onClick={Vis_form}>
                <h3>Book Now</h3>
              </button>
            </div>
            <div id='reg_com'>
              <Reg_form/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function More() {
  return (
    <div id='service_box_row_3' className='row'>
      <div id='service_box_5' className='col-md'>
        <Link>
          <div>
            <img alt='N?A' src={require("./image/Backup.png")} />
            <p>Data Recovery</p>
          </div>
        </Link>
      </div>
      <div id='service_box_6' className='col-md'>
        <Link>
          <div>
            <img alt='N?A' src={require("./image/server.png")} />
            <p>DataBase</p>
          </div>
        </Link>
      </div>
    </div>
  )
}



export default function Home() {
  const [Scroll, setScroll] = useState(0);
  const scrollY = useScrollYPosition();
  window.addEventListener('scroll', () => {
    console.log('????');
  });

  const [show, setShow] = useState("View More");
  const [serstate, setSerstate] = useState(false);

  const serviceClick = () => {
    i = i + 1
    if (i % 2 === 1) {
      setShow("Hide")
      setSerstate(true)
    } else if (i % 2 === 0) {
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
                          <img alt='N?A' src={require("./image/iot.png")} />
                          <p>IoT and Embedded Security Testing</p>
                        </div>
                      </Link>
                    </div>
                    <div id='service_box_2' className='col-md'>
                      <Link>
                        <div>
                          <img alt='N?A' src={require("./image/applications.png")} />
                          <p>Web Application Security Testing</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div id='service_box_row_2' className='row'>
                    <div id='service_box_3' className='col-md'>
                      <Link>
                        <div>
                          <img alt='N?A' src={require("./image/application.png")} />
                          <p>Mobile  Application Security Testing</p>
                        </div>
                      </Link>
                    </div>
                    <div id='service_box_4' className='col-md'>
                      <Link>
                        <div>
                          <img alt='N?A' src={require("./image/globe-grid.png")} />
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
            <div id='clint_section'>
              <div id='clint_section_row' className='row'>
                <div id='clint_section_back' className='col-10'>
                  <div id='client_rate'>
                    <div className='row' id='client_rate_box_main'>
                      <div className='col'>
                        <div >
                          <h1>40+</h1>
                          <h6>Our communiction</h6>
                        </div>
                      </div>
                      <div className='col'>
                        <div>
                          <h1>30+</h1>
                          <h6>Our countries</h6>
                        </div>
                      </div>
                      <div className='col'>
                        <div>
                          <h1>90%</h1>
                          <h6>Our efficient</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>

                    <div id='clint_box_1' className='col-6'>
                      <div>
                        <p>Let's start with Us</p>
                        <h2>Our Strength and progress</h2>
                      </div>
                      <div>
                        <p>Don’t just take our word for it—hear from our satisfied clients who have experienced the exceptional quality and results of our services firsthand. Their testimonials reflect our commitment to excellence and the positive impact we’ve made on their businesses.</p>
                      </div>
                    </div>
                    <div id='clint_box_2' className='col-6'>
                      <img alt='N?A' src={require("./image/Designer.png")} />
                    </div>
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
            <div id='reg'>
              <Register_click />
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
