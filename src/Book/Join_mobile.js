import React, { Component } from "react";
import "./Join_mobile.css";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import Home_footer from "../Home/Home_footer/Home_footer";



export default class Join_mobile extends Component {
  render() {
    return (
      <div id="J_mobile">

        <div className="container">
          <div >
            <div id="D_Form">
              <div id="F_head">
                <h1>Hi</h1>
              </div>
              <form id="D_Form">
                <div id="D_Form_I">
                  <input placeholder="Name" type="text" />
                </div>
                <div id="D_Form_I">
                  <input placeholder="E Mail" type="email" />
                </div>
                <div id="D_Form_I">
                  <input placeholder="Phone Number" type="text" />
                </div>
                <div id="D_Form_I">
                  <input placeholder="company" type="text" />
                </div>
                <div className="row">
                  <div className="col" id="Mobile_privacy">
                    <input type="checkbox" />
                    i agree to the <span><Link>terms and conditions</Link></span> and <span><Link>privacy policy</Link></span>
                  </div>
                </div>
                <div id="D_Form_I">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
