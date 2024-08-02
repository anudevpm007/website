import React, { Component } from "react";
import "./Join_mobile.css";
import { Button } from "bootstrap";



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
                  <input placeholder="Password" type="password" />
                </div>
                <div id="D_Form_I">
                  <input placeholder="Location" type="text" />
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
