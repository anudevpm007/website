import React from 'react'
import "./CarrierMenu.css"

export default function CarrierMenu() {
    return (
        <div id='CarrierMenu'>
            <div className='row' id='CarrierMenu_container'>
                <div id='CarrierMenu_container_1' className='col'>
                    <div ><a href="">Home</a></div>
                    <div><a href="">Services</a></div>
                    <div><a href="">Events</a></div>
                    <div><a href="">Blogs</a></div>
                    <div><a href="">Training</a></div>
                    <div><a href="">Glitch</a></div>
                    <div><a href="">Careers</a></div>
                    <div><a href="">About</a></div>
                </div>
                <div id='CarrierMenu_container_2' className='col'>
                    <div><a href="">Book Now</a></div>
                </div>
            </div>
        </div>
    )
}
