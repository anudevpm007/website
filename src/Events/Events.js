import React, { Component, useEffect, useState } from 'react'
import Menu from '../Menu/Menu'
import "./Events.css"
import Home_footer from "../Home/Home_footer/Home_footer";
import { Link } from 'react-router-dom';




let date_s = new Date("2024-08-30")
let i = true
let date = new Date();
let houre = date.getHours();
let minute = date.getMinutes();
let sub = date_s - date;
let sub_d = sub / (1000 * 60 * 60 * 24);
sub_d = Math.trunc(sub_d);
if (sub_d < 10) {
  sub_d = "0" + sub_d
}
minute = 60 - minute
houre = 24 - houre

if (minute < 10) {
  minute = "0" + minute
}
if (houre < 10) {
  houre = "0" + houre
}



export default function Events() {
  const [min, setMin] = useState(0)
  useEffect(() => {
    setMin(minute);
  })

  // render() {
  return (
    <div>
      <div id='events_page'>
        <div id='events_menu'>
          <Menu />
        </div>
        <div className='row' id='events_box'>
          <div id='event_head'>
            <img id='event_head_img' src={require("./image/Head_p1.jpg")} />
          </div>
          <div id='events_main_heading'>
            <h1>INKOGSEK CYBER SECURITY CONFRANCES 2024</h1>
          </div>
          <div id='couter_box' className='row'>
            <div id='couter_box_1' className='col-4'>
              <div><h1>{sub_d}d</h1></div>
            </div>
            <div id='couter_box_2' className='col-4'>
              <div><h1>{houre}h</h1></div>
            </div>
            <div id='couter_box_3' className='col-4'>
              <div><h1>{minute}m</h1></div>
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
        <table id='event_data_set_2'>
          <tr>
            <th>Date</th>
            <th>Sunday June 15 2024</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Sunday June 15 2024</th>
          </tr>
        </table>
      </div>
      <div id='down'>
        <Home_footer />
      </div>
    </div>
  )
}
// }


{/* <div id='event_heading'>
            <div id='event_heading_img'>
              <img src={require("./image/Head_p1.jpg")} />
            </div>
            <div id='couter_box' className='row'>
              <div id='couter_box_1' className='col-4'>
                <div><h1>{sub_d}d</h1></div>
              </div>
              <div id='couter_box_1' className='col-4'>
                <div><h1>{houre}h</h1></div>
              </div>
              <div id='couter_box_1' className='col-4'>
                <div><h1>{minute}m</h1></div>
              </div>
            </div>
          </div>  */}
