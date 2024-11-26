import React, { useState } from 'react'
import BookingMenu from './BookingMenu/BookingMenu'
import "./booking.css"
import Dropdowncontrycode from './Dropdowncontrycode'
import HomeMenu from '../Home/Home_menu/HomeMenu'
import axios from 'axios'



export default function Booking() {
  var headTextIn = ""
  var fullHeadText = "The Career Opportunity Await"
  var ArrayFUllhead = fullHeadText.split("")
  const [text, setText] = useState("")


  const formSubmit = (event) => {
    event.preventDefault()
    const FN  = document.getElementById("FN").value;
    const LN  = document.getElementById("LN").value;
    const EM  = document.getElementById("EM").value;
    const PC  = document.getElementById("PC").value;
    const PN  = document.getElementById("PN").value;
    const AD  = document.getElementById("AD").value;
    const CCM  = document.getElementById("contryCodeMenu").value;

    axios.post("http://localhost:8001/reg",{FN,LN,EM,PC,PN,AD,CCM}).then(result=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
      
    })
  }

  return (
    <div>
      <HomeMenu colorOut={"black"} />
      <div id='BookinginBox'>
        <div>
          <form method='POST'>
            <div className="row" id='BookInHead'>
              <div className='col'>
                <h2 id='BookInHead_text'>
                  {fullHeadText}
                </h2>
              </div>
            </div>
            <div className='row' id='BookInName'>
              <div className='col-6'>
                <input type="text" placeholder='Fisrt Name' id='FN' />
              </div>
              <div className='col-6'>
                <input type="text" placeholder='Last Name' id='LN' />
              </div>
            </div>
            <div className='row' id='BookInEmail'>
              <div className='col'>
                <input type="text" placeholder='E Mail' id='EM' />
              </div>
            </div>
            <div className='row' id='BookInNumber'>
              <div className="col-3">
                <Dropdowncontrycode />
              </div>
              <div className='col-8'>
                <input type="tel" placeholder='Phone Number' id='PN' />
              </div>
            </div>
            <div className='row' id='BookInLoc'>
              <div className='col-4'>
                <input type="text" placeholder='Pincode' id='PC' />
              </div>
              <div className='col'>
                <input type="text" placeholder='Address' id='AD' />
              </div>
            </div>
            <div className="row" id='BookInSubmit'>
              <div className='col-6'>
                <input type="submit" value="Submit" onClick={formSubmit} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
