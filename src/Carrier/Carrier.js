import React from 'react'
import { Link } from 'react-router-dom';
import "./Carrier.css"
import Carrier_data from './Data/Data_Carrier';
import { Card } from 'react-bootstrap';
import Home_footer from "../Home/Home_footer/Home_footer"


function close() {
  document.getElementById("sidebar-active").click()

}



const Menu = () => {
  return (
    <div>
      <nav className="Menu_carrier" >
        <div className="S-logo"><img className="logo" src={require("../images/Main_logo.png")} alt="N/A" /></div>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-bt">
          <img src={require("../images/white_menu.png")} alt="N/A" />
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-bt">
            <img src={require("../images/Menu2.png")} id="M_logo" alt="N/A" />
          </label>
          <Link to={"/website/"} className="links" onClick={close}>Home</Link>
          <Link to={"/website/"} className="links" onClick={close}>Services</Link>
          <Link to={"/website/events/"} className="links" onClick={close}>Events</Link>
          <Link to={"/website/blogs/"} className="links" onClick={close}>Blogs</Link>
          <Link to={"/website/Under_construction"} className="links" onClick={close}>Training</Link>
          <Link to={"/website/Under_construction"} className="links" onClick={close}>Glitch</Link>
          <Link to={"/website/carrier"} className="links" onClick={close}>Careers</Link>
          <a href="/about/" className="links" onClick={close}>About</a>
          <div id="B_T_N_join"><Link to={"/website/Book/"} id="jU">Book Now</Link></div>
        </div>
      </nav>
    </div>
  );
}


export default function Carrier() {
  return (
    <div id='Carrier'>
      <div id='Carrier_head'>
        <div id='Carrier_Menu'>
          <Menu />
        </div>
        <div id="header_image">
          <img src={require("./image/Career head2.jpg")} alt="N?A" />
        </div>
        <div id="carrier_header">
          <h1>Explore Our Carrier</h1>
          <h3>Join to our journey</h3>
        </div>
      </div>
      <div id="carrier_body">
        <div>
          <div id='carrier_body_heading'>
            <h1>Carriers</h1>
          </div>
          <h6>Search the Carrier here</h6>
          <div className='row' id='carrier_search_box'>

            <div id='carrier_S_input' className='col-10'>
              <input type="text" placeholder='Search' />
            </div>
            <div className='col'>
              <button>Search</button>
            </div>
          </div>
          <div id='carrier_data'>
            <div>
              {
                Carrier_data.map((data) => {
                  return (
                    <Card id='carrier_datalist'>
                      <div className='row'>
                        <div className="col">
                          <h2>{data.heading}</h2>
                          <p>{data.pera}</p>
                          <h4>{data.loc}</h4>
                          
                        </div>
                        <div id='carrier_card_col2' className="col">
                          <div id='carrier_apply'>
                            <Link to={"/website/carrier/"+data.id} id='carrier_apply_link'>Apply Now</Link>
                            <a href="#">Explore More</a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div id='carrier_footer'>
        <Home_footer/>
      </div>
    </div>
  )
}
