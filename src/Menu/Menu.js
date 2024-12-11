import "./Menu.css";
import { Link } from "react-router-dom";


function close(){
    document.getElementById("sidebar-active").click()

}



export default function Menu() {
    return (
      
      <div className="Menu-m">
        <nav>
        <div className="S-logo"><img className="logo" src={require("../images/Main_logo.png")} alt="N/A"/></div>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-bt">
            <img src={require("../images/white_menu.png")} alt="N/A"/>
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-bt">
            <img src={require("../images/Menu2.png")} id="M_logo" alt="N/A"/>
            </label>

            <Link to={"/"} className="links" onClick={close}>Home</Link>
            <Link to={"/"} className="links" onClick={close}>Services</Link>
            <Link  to={"/events/"} className="links" onClick={close}>Events</Link>
            <Link to={"/blogs/"} className="links" onClick={close}>Blogs</Link>
            <Link  to={"/Under_construction"} className="links" onClick={close}>Training</Link>
            <Link  to={"/Under_construction"} className="links" onClick={close}>Glitch</Link>
            <Link to={"/carrier"} className="links" onClick={close}>Careers</Link>
            <a href="/about/" className="links" onClick={close}>About</a>

            <div id="B_T_N_join"><Link to={"/Book/"} id="jU">Book Now</Link></div>
          </div>
        </nav>
        
      </div>
    );
    
  }
