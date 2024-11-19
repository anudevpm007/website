import React from "react";
import Blog from "../Blog";
import Main_Data from "../../Data/Blog_data";
import "./Main_Blog.css";
import { Link } from "react-router-dom";
import Home_footer from "../../Home/Home_footer/Home_footer"


// var url = window.location.pathname;
// var parts = url.split("/");
// var idu = parts[parts.length - 2];
// console.log(parts);
// if (idu == "blogs") {
//   console.log("okay");
// }
export default function Main_Blog() {
  function close() {
    document.getElementById("sidebar-active").click()

  }
  // render() {
  return (
    <div className="Main_Blogs">
      <div className="Menu-m">
        <nav>
          <div className="S-logo">
            <img
              className="logo"
              src={require("../../images/Main_logo.png")}
              alt="N/A"
            />
          </div>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-bt">
            <img src={require("../../images/white_menu.png")} alt="N/A" />
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-bt">
              <img src={require("../../images/Menu2.png")} id="M_logo" alt="N/A" />
            </label>

            
            <Link to={"/website/"} onClick={close} className="links">
                Home
              </Link>

              <a href="#service_list" onClick={close} className="links">
                Services
              </a>
              <Link to={"/website/events/"} onClick={close} className="links">
                Events
              </Link>
              <Link to={"/website/blogs/"} onClick={close} className="links">
                Blog
              </Link>
              <Link to={"/website/Under_construction"} className="links" onClick={close}>Training</Link>
              <Link to={"/website/Under_construction"} className="links" onClick={close}>Glitch</Link>
              <Link to={"/website/carrier"} onClick={close} className="links">
                Careers
              </Link>
              <a href="#down" onClick={close} className="links">
                About
              </a>
            <div>
              <Link id="jU">Join Us</Link>
            </div>
          </div>
        </nav>
      </div>

      <h1
        style={{
          color: "white",
          fontWeight: "bolder",
          fontFamily: "sans-serif",
        }}
      >
        Stay tuned for our next blog !!
      </h1>
      <div id="blog_con" className="container">
        <div id="blog_row" className="row">
          {Main_Data.map((Data) => (
            <div id="blog_row_block"  className="col-lg-6">
              <Blog
                media_type={Data.media_type}
                media={Data.media}
                heading={Data.heading}
                peragraph={Data.paragraph}
                id={Data.id}
                width={Data.width}
                height={Data.height}
              ></Blog>
            </div>
          ))}
        </div>
      </div>
      <div id="down">
        <Home_footer/>
      </div>
    </div>
  );
}
// }
