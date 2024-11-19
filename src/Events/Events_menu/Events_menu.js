import React from 'react'
import "./Events_menu.css"


const EventsMenu_Normal = () => {
  return (
    <div>
      <div id='event_nav' className='row'>
        <div className='col-7' id='event_nav_1' >
          <div><a href="">Home</a></div>
          <div><a href="">Services</a></div>
          <div><a href="">Events</a></div>
          <div><a href="">Blogs</a></div>
          <div><a href="">Training</a></div>
          <div><a href="">Glitch</a></div>
          <div><a href="">Careers</a></div>
          <div><a href="">About</a></div>
          <div className='col-6' id='event_nav_2'>
            <div><a href="">Book Now</a></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function EventsMenu() {
  return (
    <div id='EventsMenu'>
      <EventsMenu_Normal />
    </div>
  )
}




// Home
// Services
// Events
// Blogs
// Training
// Glitch
// Careers
// About