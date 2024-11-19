import React, { useState } from 'react'
import BookingMenu from './BookingMenu/BookingMenu'
import "./booking.css"
import Dropdowncontrycode from './Dropdowncontrycode'



export default function Booking() {
  var headTextIn = ""
  var fullHeadText = "The Career Opportunity Await"
  var ArrayFUllhead = fullHeadText.split("")
  const [text, setText] = useState("")


  return (
    <div>
      <BookingMenu />
      <div id='BookinginBox'>
        <div>
          <form action="">
            <div className="row" id='BookInHead'>
              <div className='col'>
                <h2>
                  {fullHeadText}
                </h2>
              </div>
            </div>
            <div className='row' id='BookInName'>
              <div className='col-6'>
                <input type="text" placeholder='Fisrt Name' />
              </div>
              <div className='col-6'>
                <input type="text" placeholder='Last Name' />
              </div>
            </div>
            <div className='row' id='BookInEmail'>
              <div className='col'>
                <input type="text" placeholder='E Mail' />
              </div>
            </div>
            <div className='row' id='BookInNumber'>
              <div className="col-3">
                <Dropdowncontrycode />
              </div>
              <div className='col-8'>
                <input type="tel" placeholder='Phone Number' />
              </div>
            </div>
            <div className='row' id='BookInLoc'>
              <div className='col-4'>
                <input type="text" placeholder='Pincode' />
              </div>
              <div className='col'>
                <input type="text" placeholder='Address' />
              </div>
            </div>
            <div className="row" id='BookInSubmit'>
              <div className='col-6'>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
