import React from 'react'
import "../Home_menu/Home_menu.css"

export default function Home_menu() {
    return (
        <div id='Home_menu' className='row '>
            <div id='Home_menu_sec_1' className="col">
                <div className='row' id='Home_menu_sec_1_1'>
                    <div className="col">
                        <a href="/">Home</a>
                    </div>
                    <div className="col"><a href="/">Services</a></div>
                    <div className="col"><a href="/">Carrer</a></div>
                    <div className="col"><a href="/">Events</a></div>
                    <div className="col"><a href="/">BLogs</a></div>
                    <div className="col"><a href="/">About Us</a></div>

                </div>
            </div>
            <div id='Home_menu_sec_2' className='col'>
                <div className='row'>
                    <div className="col"><a href="/">Book Now</a></div>
                </div>
            </div>
        </div>
    )
}
