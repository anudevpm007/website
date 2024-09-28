import React from 'react'
import Menu from '../Menu/Menu'
import "./Events.css"
import { Link } from 'react-router-dom'
import Home_footer from '../Home/Home_footer/Home_footer'






export default function Events() {

  return (
    <div id='Events'>
      <div>
        <div>
          <Menu />
        </div>
        <div id='Event_head'>
          <div>
            <img loading='lazy' src={require("./image/Head_p1.jpg")} alt="N?A" />
          </div>
          <div id='Event_heading'>
            <h1>ASTRALIVA CYBER SECURITY CONFRANCES 2024</h1>
          </div>
          <div id='Timer'>
          <div>
            <div id='Timer_box' className='row'>
              <div className="col-3"><h1>02D</h1></div>
              <div className="col-3"><h1>12H</h1></div>
              <div className="col-3"><h1>04M</h1></div>
            </div>
          </div>
        </div>
        </div>
       

      </div>
      <div className='row' id='event_body'>
        <h3>Just come with an open mind and willingness to share and learn.</h3>
        <div id='event_img_box'>
          <img src={require("./image/img_1.jpg")} />
        </div>
        <div id='event_data_set_1'>
          <div id='event_data_set1_1'>
            <p>null meets are free for anyone to attend. There are absolutely no fees. just come with an open mind and willingness to share and learn. </p>
            <div>
              <h4>Proposed sessions for this event</h4>
              <div>
                <ul id='event_data_set_point'>
                  <li>Soc what lies ahead! by Aarya Jain</li>
                  <li>OpSec Safe Red Team Infrastructure by Rishi Kanwar</li>
                  <li>Pentesters Approach to AWS! AM by Divyanshu Shaukla</li>
                </ul>
              </div>
              <p>Note: The session details including schedule are available below</p>
            </div>
          </div>
        </div>
        <div id='Reg_box'>
          <div id='Reg_box_1' className='row' >
            <div id='Reg_box1_1' className='col'>
              Continue with Register
            </div>
            <div id='Reg_box1_2' className='col'>
              <Link to={"/website/Register/"}>
                <div>
                  Register Now
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div id='down'>
        <Home_footer />
      </div>
    </div>
  )
}


