import React, { Component } from "react";
import "./Home.css";
import Header_L from "./Header_L/Header_L";
import Home_body from "./Home_body/Home_body";
import Home_footer from "./Home_footer/Home_footer";

export default class Home extends Component {
  render() {
    return (
      <div id="main">
        <div id="home">
          <Header_L />
          <Home_body id="HB" />
          <Home_footer />
        </div>
      </div>
    );
  }
}
