import React, { Component } from "react";
import "./Home_body.css";
import services_data from "../../Data/Services_data";
import Services from "./services/services";
import { Link } from "react-router-dom";
import Courses from "./Courses/courses";

function Home_body (){
    return (
      <div className="Home_body">
        <div className="container-fluid">
          <div className="row">
            <div id="service_home">
              <div id="service_list">
                <div
                id = "T_SER"
                  style={{
                    fontSize: 30,
                    fontWeight: "bolder",
                    margin: 20,
                    color: "black",
                    backgroundColor: "transparent",
                  }}
                >
                  Services
                </div>
                <div className="row" id="list">
                  {services_data.map((Data) => (
                    <Services
                      id={Data.id}
                      heading={Data.Heading}
                      pera={Data.Pera}
                      img={Data.img}
                    />
                  ))}
                </div>
                <div className="detials">
                  <Link style={{ color: "#608bf7" }}>More Services -{">"}</Link>
                </div>
                <div className="course">
                  <Courses />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

export default Home_body;
