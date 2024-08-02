import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";


function close(){
    document.getElementById("sidebar-active").click()

}

export default class Menu extends Component {
    
  render() {
    return (
      <div className="Menu-m">
        <nav>
        <div className="S-logo"><img className="logo" src={require("../images/AB WPL 5.png")} alt="N/A"/></div>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-bt">
            <img src={require("../images/Menu.png")} alt="N/A"/>
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-bt">
            <img src={require("../images/Menu2.png")} id="M_logo" alt="N/A"/>
            </label>

            <Link to={"/website/"} className="links" onClick={close}>Home</Link>
            <Link to={"/website/blogs/"} className="links" onClick={close}>Blog</Link>
            <Link to={"/website/"} className="links" onClick={close}>Services</Link>
            <Link href="#" className="links" onClick={close}>About Us</Link>
            <Link href="#" className="links" onClick={close}>Course</Link>
            <Link href="#" className="links" onClick={close}>Events</Link>
            <div><Link id="jU">Join Us</Link></div>
          </div>
        </nav>
        
      </div>
    );
  }
}
