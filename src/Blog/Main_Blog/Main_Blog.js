import React from "react";
import Blog from "../Blog";
import Main_Data from "../../Data/Blog_data";
import "./Main_Blog.css";
import { Link } from "react-router-dom";

var url = window.location.pathname;
var parts = url.split("/");
var idu = parts[parts.length - 2];
console.log(parts);
if (idu == "blogs") {
  console.log("okay");
}
export default function Main_Blog() {
  // render() {
  return (
    <div className="Main_Blogs">
      <div className="Menu-m">
        <nav>
          <div className="S-logo">
            <img
              className="logo"
              src={require("../../images/AB WPL 5.png")}
              alt="N/A"
            />
          </div>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-bt">
            <img src={require("../../images/Menu.png")} alt="N/A" />
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-bt">
              <img src={require("../../images/Menu2.png")} id="M_logo" alt="N/A" />
            </label>

            <Link to={"/website/"} className="links">
              Home
            </Link>
            <Link to={"/website/blogs/"} className="links">
              Blog
            </Link>
            <a href="/website/from=blog/#service_list" className="links">
              Services
            </a>
            <Link href="#" className="links">
              About Us
            </Link>
            <Link href="#" className="links">
              Course
            </Link>
            <Link href="#" className="links">
              Events
            </Link>
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
        Blogs
      </h1>
      <div className="container">
        <div className="row">
          {Main_Data.map((Data) => (
            <div className="col-lg-6">
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
    </div>
  );
}
// }
