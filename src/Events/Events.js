import React, { Component, useState } from 'react'
import Menu from '../Menu/Menu'
import "./Events.css"


let date_s = new Date("2024-08-30")


let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let houre = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let sub = date_s-date;

let sub_d = sub/(1000*60*60*24);
let sub_h = sub/(1000*60*60);
let sub_m = sub/(1000*60);
sub_d = Math.trunc(sub_d);
if(sub_d<10){
  sub_d = "0"+sub_d
}
let sub_d_2 = sub_d*24;
let sub_h_2 = sub_h-sub_d_2;
sub_h_2 = Math.trunc(sub_h_2);
if(sub_h_2<10){
  sub_h_2 = "0"+sub_h_2
}

let sub_m_2 = sub_m-((sub_d*24*60)-(sub_h_2*60))
console.log(sub_m_2);


export default function Events(){
  // const [min, setMin] = useState(0)
  // setMin(min=sub_m_2)
  // render() {
    return (
      <div id='events_page'>
        <div id='events_menu'>
          <Menu />
        </div>
        <div className='container' id='events_box'>
          <div id='event_body'>
            <div id='couter_box' className='row'>
              <div id='couter_box_1' className='col-4'>
                <div><h1>{sub_d}d</h1></div>
              </div>
              <div id='couter_box_1' className='col-4'>
                <div><h1>{sub_h_2}h</h1></div>
              </div>
              <div id='couter_box_1' className='col-4'>
                <div><h1>{sub_m_2}m</h1></div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    )
  }
// }
