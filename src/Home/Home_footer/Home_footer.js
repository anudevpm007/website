import React, { Component } from "react";
import "./Home_footer.css";
import { Link } from "react-router-dom";

export default class Home_footer extends Component {
  render() {
    return (
      <div id="home_footer">
        <div className="row" id="main_box">
          <div id="footer_logo">
            <img src={require("../../images/Logo.png")} id="box_logo" />
          </div>
          <div className="col-md" id="box_1">
            <h3>About Us</h3>
            <p>
              RedTeam Hacker Academy’s career-focused, implementation-based learning programs pave the road to a success-assured career in Ethical Hacking & Cybersecurity. Their curriculum is designed to blend theoretical knowledge with practical, hands-on experience, ensuring students are well-prepared for real-world challenges. The academy offers a range of certifications and courses tailored to different skill levels, from beginners to advanced professionals. Instructors are industry experts, providing insights into the latest trends and threats in cybersecurity. With a strong emphasis on ethical practices and cutting-edge technology, RedTeam Hacker Academy equips its students with the skills needed to protect and defend against cyber threats.
            </p>
          </div>
          <div className="col-lg" id="box_2">
            <h3>Contact Info</h3>
            <div id="C_Info">
                <div>
                  E_Mail: anudevpm101@gmail.com
                </div>
                <div>
                  Mobile: 9895816480
                </div>
                <div>
                  Address: 1600 Amphitheatre Parkway in Mountain View, California
                </div>
            </div>
            <h3>Our Links</h3>
            <div id="footer_links">
              <ul id="F_link_list">
                <li>
                  <div>
                    <a href="#home">
                      Home
                    </a>
                    <a href="#service_list">
                      Services
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to={"/website/blogs/"}>
                      Blog
                    </Link>
                    <Link href="#">
                      Courses
                    </Link>
                  </div>
                </li>

                <li>
                  <div>
                    <Link href="#">
                      Events
                    </Link>
                    <Link to={"/website/Join_Us/"}>
                      Join Us
                    </Link>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
