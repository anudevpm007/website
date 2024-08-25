import React, { Component, useState } from 'react'
import Menu from '../Menu/Menu'
import "./Events.css"


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
  // const [min, setMin] = useState(0)
  // setMin(min=sub_m_2)
  // render() {
  return (
    <div id='events_page'>
      <div id='events_menu'>
        <Menu />
      </div>
      <div id='events_box'>
        <div id='event_head'>
          <img id='event_head_img' src={require("./image/Head_p1.jpg")} />
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
