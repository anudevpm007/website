import React, { Component } from "react";
import "./Home_footer.css";
import { Link } from "react-router-dom";

export default class Home_footer extends Component {
  render() {
    return (
      <div id="home_footer">
        <div id="About_data">
          <p>
            <div>
              <h5>Informations</h5>
            </div>
            <div>
              Mobile No: <span>+919xxxxxxxxx</span>
            </div>
            <div>
              E Mail: <span>sales@inkogsek.com</span>
            </div>
            <div>
              Website:{" "}
              <span>
                <Link>www.inkogsek.com</Link>
              </span>
            </div>
            <div>
              address:{" "}
              <span>
                58/1617 S Beach Rd Kuttichira Calicut, Kerala India-673001
              </span>
            </div>
          </p>
          <div>
            <div>Important pages</div>
            <div>
              <Link>Blogs</Link>
            </div>
            <div>
              <Link>Services</Link>
            </div>
            <div>
              <Link>Courses</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
