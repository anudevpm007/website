import React from 'react'
import "./BookingMenu.css"

export default function BookingMenu() {
  return (
    <div>
      <div className='row' id='booking_menu_1'>
        <div className='col'><a href="">Home</a></div>
        <div className='col'><a href="">Events</a></div>
        <div className='col'><a href="">Blogs</a></div>
        <div className='col'><a href="">Training</a></div>
        <div className='col'><a href="">Services</a></div>
        <div className='col'><a href="">Glitch</a></div>
        <div className='col'><a href="">Careers</a></div>
        <div className='col'><a href="">About</a></div>
        <div className='col-6' id='booking_menu_2'>
          <div><a href=""><div>Book Now</div></a></div>
        </div>
      </div>
    </div>
  )
}
