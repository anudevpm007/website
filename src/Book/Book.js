import { Card } from "react-bootstrap";
import "./Book.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Join_mobile from "./Join_mobile";
import Menu from "../Menu/Menu";

export default function Book() {
  return (
    <div id="Join_us_main">
      <Menu />
      <div className="Join_us">

        <div className="container">
          <div className="col">
            <Card className="JU_card">
              <h3 style={{ color: "white" }}>SEND ENQUIRY</h3>
              <form >
                <div id="JU_form">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="E-Mail" />
                  <input type="password" placeholder="Password" />
                  <input type="text" name="" id="" placeholder="Location" />
                  <div className="row">
                    <div className="col" id="privacy">
                      <input type="checkbox" />
                      i agree to the <span><Link>terms and conditions</Link></span> and <span><Link>privacy policy</Link></span>
                    </div>
                  </div>
                  <div>
                    <button type="button" >Submit</button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
        <div id="mobile">
          <Join_mobile />
        </div>
      </div>
    </div>
  );
}
