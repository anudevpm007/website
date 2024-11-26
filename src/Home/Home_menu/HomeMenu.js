import React from 'react'
import "./HomeMenu.css"

export default function HomeMenu({colorOut}) {
  const ShowSide=()=>{
    const side_bar = document.getElementById("InHomeMenu_mobile");
    const Show_svg = document.getElementById("ShowSide");
    side_bar.style.display = "flex"
    Show_svg.style.display = "none"
  }

  const HideSide = () =>{
    const Show_svg = document.getElementById("ShowSide");
    const side_bar = document.getElementById("InHomeMenu_mobile");
    side_bar.style.display = "none"
    Show_svg.style.display = "flex"
  }
  return (
    <div id='HomeMenu'>
        <div id='InHomeMenu' className='row'>
            <div id='Logo_sectionOHM' className='col'>
                <img src={require("./Images/logo.png")} alt="" />
            </div>
            <div id='Link_sectionOHM' className='col-8'>
              <ul>
                <li><a style={{color:colorOut}} className='N_links' href="/website/">Home</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/">Services</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/website/events/">Events</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/website/blogs/">Blogs</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/website/Under_construction">Training</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/website/Under_construction">Glitch</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/website/carrier">Careers</a></li>
                <li><a style={{color:colorOut}} className='N_links' href="/website/about/">Abouts</a></li>
                <li id='BookNow_sec'><a href="/website/Book/">Book Now</a></li>
                <li id='ShowSide' onClick={ShowSide}><svg xmlns="http://www.w3.org/2000/svg" height="8vw" viewBox="0 -960 960 960" width="8vw" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
              </ul>
            </div>
        </div>
        <div id='InHomeMenu_mobile' className='row' >
            {/* <div id='Logo_sectionOHM' className='col'>
                <img src={require("./Images/logo.png")} alt="" />
            </div> */}
            <div id='Link_sectionOHM_mobile' className='col-8'>
              <ul>
              <li id='HideSide' onClick={HideSide}><svg xmlns="http://www.w3.org/2000/svg" height="8vw" viewBox="0 -960 960 960" width="8vw" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                
                <li><a className='N_links_mobile' href="/website/">Home</a></li>
                <li><a className='N_links_mobile' href="/website/">Services</a></li>
                <li><a className='N_links_mobile' href="/website/events/">Events</a></li>
                <li><a className='N_links_mobile' href="/website/blogs/">Blogs</a></li>
                <li><a className='N_links_mobile' href="/website/Under_construction">Training</a></li>
                <li><a className='N_links_mobile' href="/website/Under_construction">Glitch</a></li>
                <li><a className='N_links_mobile' href="/website/carrier/">Careers</a></li>
                <li><a className='N_links_mobile' href="/website/about/">Abouts</a></li>
                <li id='BookNow_sec_mobile'><a href="/website/Book/">Book Now</a></li>
                
                
              </ul>
            </div>
        </div>
    </div>
  )
}
