import React from "react";
import "./Home_footer.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home_footer() {
  // const [email, setEmail] = useState({})

  // const getData = (event) => {
  //   setEmail({ email: event.target.value })
  //   console.log(email.email);

  // }


  const sub = (event) => {
    // console.log(email);
    event.preventDefault();
    let email = document.getElementById('sub_email').value;
    let data = {email:email};
    console.log(data.length)
    if (data.length !== 0) {
      axios.post("http://localhost:8000/", data).then(res => console.log("Status Code :"+res.status)).catch(err => console.log("error"));
      
    }
  }

  return (

    <div id="home_footer">
      <div className="row" id="main_box">
        <div id="footer_logo" className="row ">
          <div className="col-2"><img src={require("./image/Main_logo.png")} alt="N?a" id="box_logo" /></div>
        </div>

        <div className="col-lg" id="Ev_box_2">
          <div className="row" id="Ev_box2_1">
            <div className="col-lg-6" id="Ev_box21_1">
              <p>Research Powered Cybersecurity Services and Training. Eliminate security threats through our innovative and extensive security assessments.</p>
              <div id="Subscribe_box">
                <div id="Subscribe_box_1">
                  <form className="row" method="POST" onSubmit={sub}>
                    <div className="col-6" id="Subscribe_box_input">
                      <input placeholder="Enter your email" id="sub_email" type="email"/>
                    </div>
                    <div className="col-3" id="Subscribe_box_button">
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6" id="Ev_box21_2">
              <div className="row">
                <div id="Ev_box212_1" className="col">
                  <h5>Links</h5>
                  <div>
                    <ul>
                      <li><Link>Home</Link></li>
                      <li><Link>Services</Link></li>
                      <li><Link>Blogs</Link></li>
                      <li><Link>Courses</Link></li>
                      <li><Link>Events</Link></li>
                      <li><Link>Join Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div id="Ev_box212_2" className="col">
                  <h5>Global location</h5>
                  <div>
                    <ul>
                      <li><Link>India</Link></li>
                      <li><Link>Singapore</Link></li>
                      <li><Link>United States</Link></li>
                      <li><Link>Middle East</Link></li>
                      <li><Link>Ethiopia</Link></li>
                      <li><Link>USA</Link></li>
                    </ul>
                  </div>
                </div>
                <div id="Ev_box212_3" className="col">
                  <h5>Social Media</h5>
                  <ul>
                    <div id="Ev_box2123_1">
                      <li>
                        <Link><img alt="N?a" src={require("./image/linkedin.png")} /></Link>
                        <Link><img alt="N?a" src={require("./image/instagram.png")} /></Link>
                      </li>
                      <li>
                        <Link><img alt="N?a" src={require("./image/facebook.png")} /></Link>
                        <Link><img alt="N?a" src={require("./image/reddit.png")} /></Link>
                      </li>
                      <li>
                        <Link><img alt="N?a" src={require("./image/twitter.jpg")} /></Link>
                        <Link><img alt="N?a" src={require("./image/youtube.png")} /></Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="Mobile_social_ser">
        <div>
          <Link><img alt="N?a" src={require("./image/linkedin.png")} /></Link>
          <Link><img alt="N?a" src={require("./image/facebook.png")} /></Link>
          <Link><img alt="N?a" src={require("./image/instagram.png")} /></Link>
          <Link><img alt="N?a" src={require("./image/reddit.png")} /></Link>
          <Link><img alt="N?a" src={require("./image/twitter.jpg")} /></Link>
          <Link><img alt="N?a" src={require("./image/youtube.png")} /></Link>
        </div>
      </div>
      <div className="row" id="footer_loc_box">
        <div id="footer_loc_box_1">
          <div className="row">
            {/* <div className="col-3" >
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

              </div> */}
            {/* <div className="col-3">

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
              </div> */}
            <div className="col-4">
              <div className="row" id="loc_box">
                <div className="col-4" id="loc_box_1">
                  <img alt="N?a" src={require("../../images/location.png")} />
                </div>

                <div className="col" id="loc_box_2">
                  <div className="row">
                    Kerala
                  </div>
                  <div className="row">
                    45456456
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row" id="loc_box">
                <div className="col-4" id="loc_box_1">
                  <img alt="N?a" src={require("../../images/location.png")} />
                </div>

                <div className="col" id="loc_box_2">
                  <div className="row">
                  Bangalore
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
